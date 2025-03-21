import * as THREE from 'three';
import { Player } from '../entities/Player';
import { GreedBot } from '../entities/GreedBot';
import { Loot } from '../entities/Loot';
import { Arena } from '../entities/Arena';
import { Logger } from '../utils/Logger';

export class Game {
    constructor(renderer, audioManager, uiManager, inputManager, username) {
        try {
            Logger.info('Initializing game with username:', username);
            
            this.renderer = renderer;
            this.audioManager = audioManager;
            this.uiManager = uiManager;
            this.inputManager = inputManager;
            this.username = username;

            // Create scene
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color(0x000000);
            Logger.debug('Scene created');

            // Create camera
            this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.camera.position.set(0, 20, 20);
            this.camera.lookAt(0, 0, 0);
            Logger.debug('Camera created and positioned');

            // Create arena
            this.arena = new Arena(this.scene);
            Logger.debug('Arena created');

            // Initialize game state
            this.players = [];
            this.bots = [];
            this.loot = [];
            this.greedBot = null;
            this.scores = {};
            this.gameTime = Math.floor(Math.random() * 15);
            this.roundDuration = 120; // 2 minutes
            this.isFrenzy = false;
            this.isGameOver = false;
            Logger.debug('Game state initialized');

            this.init();
        } catch (error) {
            Logger.error('Failed to initialize game', error);
            throw error;
        }
    }

    init() {
        try {
            Logger.info('Starting game initialization');
            
            // Create player
            const playerPos = this.arena.getRandomSpawnPosition();
            this.player = new Player(this.scene, playerPos, 0x0000FF, this.username);
            this.players.push(this.player);
            this.scores[this.username] = 0;
            Logger.debug('Player created', { position: playerPos });

            // Create bots
            const botNames = ['LootBot1', 'LootBot2', 'LootBot3', 'LootBot4', 'LootBot5'];
            const botColors = [0x00FF00, 0xFF0000, 0xFFFF00, 0xFF00FF, 0x00FFFF];
            const numBots = 3 + Math.floor(Math.random() * 4); // 3-6 bots

            for (let i = 0; i < numBots; i++) {
                const botPos = this.arena.getRandomSpawnPosition();
                const bot = new Player(this.scene, botPos, botColors[i], botNames[i]);
                this.bots.push(bot);
                this.scores[botNames[i]] = Math.floor(Math.random() * 5); // 0-4 points
                Logger.debug('Bot created', { name: botNames[i], position: botPos });
            }

            // Create Greed Bot
            const greedBotPos = this.arena.getRandomSpawnPosition();
            this.greedBot = new GreedBot(this.scene, greedBotPos, this.uiManager);
            Logger.debug('Greed Bot created', { position: greedBotPos });

            // Spawn initial loot
            this.spawnLoot();
            Logger.debug('Initial loot spawned');

            // Start Greed Bot sound
            this.audioManager.startGreedBotSound();
            Logger.info('Game initialization completed');
        } catch (error) {
            Logger.error('Failed to initialize game components', error);
            throw error;
        }
    }

    spawnLoot() {
        try {
            const numCoins = 10 + Math.floor(Math.random() * 6); // 10-15 coins
            const numGems = 1 + Math.floor(Math.random() * 2); // 1-2 gems
            const numChests = 1; // 1 chest

            Logger.debug('Spawning loot', { numCoins, numGems, numChests });

            // Spawn coins
            for (let i = 0; i < numCoins; i++) {
                const pos = this.arena.getRandomSpawnPosition();
                pos.y = 0.5; // Float above ground
                this.loot.push(new Loot(this.scene, pos, 'coin'));
            }

            // Spawn gems
            for (let i = 0; i < numGems; i++) {
                const pos = this.arena.getRandomSpawnPosition();
                pos.y = 2; // On elevated platforms
                this.loot.push(new Loot(this.scene, pos, 'gem'));
            }

            // Spawn chest
            const chestPos = this.arena.getRandomSpawnPosition();
            chestPos.y = 3; // On highest platforms
            this.loot.push(new Loot(this.scene, chestPos, 'chest'));

            Logger.debug('Loot spawned successfully', {
                totalLoot: this.loot.length,
                coins: numCoins,
                gems: numGems,
                chests: numChests
            });
        } catch (error) {
            Logger.error('Failed to spawn loot', error);
            throw error;
        }
    }

    update(deltaTime) {
        try {
            if (this.isGameOver) return;

            // Update game time
            this.gameTime += deltaTime;

            // Update timer display
            this.uiManager.updateTimer(this.gameTime);

            // Check for frenzy
            if (this.gameTime >= 110 && !this.isFrenzy) { // 1:50
                Logger.info('Starting Loot Frenzy');
                this.startFrenzy();
            }

            // Check for game over
            if (this.gameTime >= this.roundDuration) {
                Logger.info('Round duration reached, ending game');
                this.endGame();
                return;
            }

            // Update player
            this.player.update(deltaTime, this.inputManager);
            Logger.logEntityState(this.player, 'Player');

            // Update bots
            this.bots.forEach(bot => {
                // Create a proper input interface for bots
                const botInput = {
                    getMovementVector: () => {
                        // Simple bot AI
                        return {
                            x: Math.sin(Date.now() * 0.001) * 0.5,
                            z: Math.cos(Date.now() * 0.001) * 0.5
                        };
                    },
                    isJumping: () => {
                        // Bots jump randomly
                        return Math.random() < 0.01; // 1% chance to jump each frame
                    }
                };
                bot.update(deltaTime, botInput);
                Logger.logEntityState(bot, 'Bot');
            });

            // Update Greed Bot
            this.greedBot.update(deltaTime, [...this.players, ...this.bots], this.loot);
            Logger.logEntityState(this.greedBot, 'GreedBot');

            // Update loot
            this.loot.forEach(item => {
                item.update(deltaTime);
            });

            // Check collisions
            this.checkCollisions();

            // Update scores
            this.updateScores();

            // Log game state periodically
            if (Math.floor(this.gameTime) % 5 === 0) {
                Logger.logGameState({
                    gameTime: this.gameTime,
                    scores: this.scores,
                    lootCount: this.loot.length,
                    isFrenzy: this.isFrenzy,
                    isGameOver: this.isGameOver
                });
            }
        } catch (error) {
            Logger.error('Error in game update loop', error);
            throw error;
        }
    }

    checkCollisions() {
        try {
            // Check player-loot collisions
            this.loot = this.loot.filter(item => {
                const distance = this.player.getPosition().distanceTo(item.getPosition());
                if (distance < this.player.radius + item.radius) {
                    Logger.debug('Player collected loot', {
                        type: item.type,
                        points: item.getPoints()
                    });
                    this.player.addScore(item.getPoints());
                    this.audioManager.play(item.type + 'Collect');
                    item.dispose();
                    return false;
                }
                return true;
            });

            // Check Greed Bot collisions
            const greedBotPos = this.greedBot.getPosition();
            
            // Check player-Greed Bot collision
            const playerDistance = this.player.getPosition().distanceTo(greedBotPos);
            if (playerDistance < this.player.radius + this.greedBot.radius) {
                const stolenPoints = this.player.getScore();
                Logger.warn('Player caught by Greed Bot', { stolenPoints });
                this.player.addScore(-stolenPoints);
                this.greedBot.startGreedRush(stolenPoints);
                this.audioManager.play('greedBot');
            }

            // Check bot-Greed Bot collisions
            this.bots.forEach(bot => {
                const botDistance = bot.getPosition().distanceTo(greedBotPos);
                if (botDistance < bot.radius + this.greedBot.radius) {
                    const stolenPoints = bot.getScore();
                    Logger.warn('Bot caught by Greed Bot', {
                        botName: bot.username,
                        stolenPoints
                    });
                    bot.addScore(-stolenPoints);
                    this.greedBot.startGreedRush(stolenPoints);
                    this.audioManager.play('greedBot');
                }
            });

            // Check loot-Greed Bot collisions
            this.loot = this.loot.filter(item => {
                const distance = greedBotPos.distanceTo(item.getPosition());
                if (distance < this.greedBot.radius + item.radius) {
                    Logger.debug('Greed Bot destroyed loot', { type: item.type });
                    item.dispose();
                    return false;
                }
                return true;
            });
        } catch (error) {
            Logger.error('Error in collision detection', error);
            throw error;
        }
    }

    updateScores() {
        try {
            // Update player score
            this.scores[this.username] = this.player.getScore();

            // Update bot scores
            this.bots.forEach(bot => {
                this.scores[bot.username] = bot.getScore();
            });

            // Update UI
            this.uiManager.updateLeaderboard(this.scores);
            this.uiManager.updatePlayerScore(this.player.getScore());

            // Check for winner
            if (this.player.getScore() >= 30) {
                Logger.info('Player reached winning score');
                this.endGame();
            }
        } catch (error) {
            Logger.error('Error updating scores', error);
            throw error;
        }
    }

    startFrenzy() {
        try {
            Logger.info('Starting Loot Frenzy');
            this.isFrenzy = true;
            this.greedBot.setFrenzy(true);
            this.audioManager.playFrenzyStart();
            this.uiManager.showFrenzy();
            this.spawnLoot(); // Spawn more loot
            Logger.debug('Loot Frenzy started successfully');
        } catch (error) {
            Logger.error('Failed to start Loot Frenzy', error);
            throw error;
        }
    }

    endGame() {
        try {
            Logger.info('Ending game');
            this.isGameOver = true;
            this.audioManager.stopGreedBotSound();

            // Find winner
            let winner = this.username;
            let maxScore = this.player.getScore();
            Object.entries(this.scores).forEach(([name, score]) => {
                if (score > maxScore) {
                    maxScore = score;
                    winner = name;
                }
            });

            Logger.info('Game ended', { winner, scores: this.scores });

            // Show game over screen
            this.uiManager.showGameOver(winner, this.scores);
        } catch (error) {
            Logger.error('Error ending game', error);
            throw error;
        }
    }

    render() {
        try {
            this.renderer.render(this.scene, this.camera);
        } catch (error) {
            Logger.error('Error rendering scene', error);
            throw error;
        }
    }

    onResize(width, height) {
        try {
            Logger.debug('Resizing game view', { width, height });
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        } catch (error) {
            Logger.error('Error handling resize', error);
            throw error;
        }
    }

    dispose() {
        try {
            Logger.info('Disposing game resources');
            // Clean up all entities
            this.player.dispose();
            this.bots.forEach(bot => bot.dispose());
            this.loot.forEach(item => item.dispose());
            this.greedBot.dispose();
            this.arena.dispose();
            Logger.info('Game resources disposed successfully');
        } catch (error) {
            Logger.error('Error disposing game resources', error);
            throw error;
        }
    }
} 