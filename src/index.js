import * as THREE from 'three';
import { Game } from './game/Game';
import { AudioManager } from './audio/AudioManager';
import { UIManager } from './ui/UIManager';
import { InputManager } from './input/InputManager';
import { Logger } from './utils/Logger';

class GameApp {
    constructor() {
        try {
            Logger.info('Initializing game application');
            
            this.renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById('game-canvas'),
                antialias: true
            });
            Logger.debug('WebGL renderer created');
            
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.shadowMap.enabled = true;
            Logger.debug('Renderer configured', {
                size: { width: window.innerWidth, height: window.innerHeight },
                pixelRatio: this.renderer.getPixelRatio()
            });

            this.clock = new THREE.Clock();
            this.game = null;
            this.audioManager = new AudioManager();
            this.uiManager = new UIManager();
            this.inputManager = new InputManager();
            Logger.info('Core managers initialized');

            this.init();
        } catch (error) {
            Logger.error('Failed to initialize game application', error);
            throw error;
        }
    }

    init() {
        try {
            Logger.info('Setting up game initialization');
            
            // Handle window resize
            window.addEventListener('resize', () => {
                Logger.debug('Window resize detected', {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                if (this.game) {
                    this.game.onResize(window.innerWidth, window.innerHeight);
                }
            });

            // Handle game start
            document.getElementById('join-game').addEventListener('click', () => {
                const username = document.getElementById('username').value.trim();
                if (username) {
                    Logger.info('Starting game for user:', username);
                    this.startGame(username);
                } else {
                    Logger.warn('Attempted to start game without username');
                }
            });

            // Handle mobile controls
            if (window.innerWidth <= 768) {
                Logger.info('Mobile device detected, setting up mobile controls');
                this.setupMobileControls();
            }
        } catch (error) {
            Logger.error('Failed to initialize game', error);
            throw error;
        }
    }

    setupMobileControls() {
        try {
            const mobileControls = document.getElementById('mobile-controls');
            const jumpButton = document.getElementById('jump-button');

            // Virtual joystick setup
            let touchStartX = 0;
            let touchStartY = 0;
            let isMoving = false;

            mobileControls.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                isMoving = true;
                Logger.debug('Touch start detected', { x: touchStartX, y: touchStartY });
            });

            mobileControls.addEventListener('touchmove', (e) => {
                if (!isMoving) return;
                
                const touchX = e.touches[0].clientX;
                const touchY = e.touches[0].clientY;
                
                const deltaX = touchX - touchStartX;
                const deltaY = touchY - touchStartY;
                
                this.inputManager.setMobileInput(deltaX, deltaY);
                Logger.debug('Touch move detected', { deltaX, deltaY });
            });

            mobileControls.addEventListener('touchend', () => {
                isMoving = false;
                this.inputManager.setMobileInput(0, 0);
                Logger.debug('Touch end detected');
            });

            // Jump button setup
            jumpButton.addEventListener('touchstart', () => {
                this.inputManager.setJump(true);
                Logger.debug('Jump button pressed');
            });

            jumpButton.addEventListener('touchend', () => {
                this.inputManager.setJump(false);
                Logger.debug('Jump button released');
            });

            Logger.info('Mobile controls setup completed');
        } catch (error) {
            Logger.error('Failed to setup mobile controls', error);
            throw error;
        }
    }

    startGame(username) {
        try {
            Logger.info('Starting new game for user:', username);
            
            // Hide menu screen
            document.getElementById('menu-screen').style.display = 'none';
            
            // Initialize game
            this.game = new Game(
                this.renderer,
                this.audioManager,
                this.uiManager,
                this.inputManager,
                username
            );
            
            // Start game loop
            this.animate();
            Logger.info('Game started successfully');
        } catch (error) {
            Logger.error('Failed to start game', error);
            throw error;
        }
    }

    animate() {
        try {
            requestAnimationFrame(() => this.animate());

            const deltaTime = this.clock.getDelta();

            if (this.game) {
                this.game.update(deltaTime);
                this.game.render();
            }
        } catch (error) {
            Logger.error('Error in animation loop', error);
            throw error;
        }
    }
}

// Start the game when the page loads
window.addEventListener('load', () => {
    try {
        Logger.info('Page loaded, initializing game application');
        new GameApp();
    } catch (error) {
        Logger.error('Failed to initialize game application on page load', error);
        throw error;
    }
}); 