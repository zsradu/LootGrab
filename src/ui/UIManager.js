import { Logger } from '../utils/Logger';

export class UIManager {
    constructor() {
        try {
            Logger.info('Initializing UIManager');
            
            this.leaderboard = document.getElementById('leaderboard');
            this.playerScore = document.getElementById('player-score');
            this.menuScreen = document.getElementById('menu-screen');
            this.frenzyText = null;
            this.setupFrenzyText();
            Logger.debug('UIManager initialized successfully');
        } catch (error) {
            Logger.error('Failed to initialize UIManager', error);
            throw error;
        }
    }

    setupFrenzyText() {
        try {
            Logger.debug('Setting up frenzy text');
            
            this.frenzyText = document.createElement('div');
            this.frenzyText.style.position = 'absolute';
            this.frenzyText.style.top = '50%';
            this.frenzyText.style.left = '50%';
            this.frenzyText.style.transform = 'translate(-50%, -50%)';
            this.frenzyText.style.fontSize = '48px';
            this.frenzyText.style.color = '#ff00ff';
            this.frenzyText.style.textShadow = '0 0 10px #ff00ff';
            this.frenzyText.style.fontFamily = 'Arial, sans-serif';
            this.frenzyText.style.display = 'none';
            this.frenzyText.style.zIndex = '100';
            document.getElementById('ui-overlay').appendChild(this.frenzyText);
            Logger.debug('Frenzy text setup completed');
        } catch (error) {
            Logger.error('Failed to setup frenzy text', error);
            throw error;
        }
    }

    updateLeaderboard(scores) {
        try {
            Logger.debug('Updating leaderboard', { scores });
            
            // Sort scores by value in descending order
            const sortedScores = Object.entries(scores)
                .sort(([, a], [, b]) => b - a);

            // Create leaderboard HTML
            let html = '<div style="font-weight: bold; margin-bottom: 5px;">Leaderboard</div>';
            sortedScores.forEach(([name, score], index) => {
                const color = index === 0 ? '#ffd700' : index === 1 ? '#c0c0c0' : '#cd7f32';
                html += `<div style="color: ${color}">${name}: ${score}</div>`;
            });

            this.leaderboard.innerHTML = html;
            Logger.debug('Leaderboard updated successfully');
        } catch (error) {
            Logger.error('Failed to update leaderboard', error);
            throw error;
        }
    }

    updatePlayerScore(score) {
        try {
            Logger.debug('Updating player score', { score });
            this.playerScore.textContent = `Score: ${score}`;
        } catch (error) {
            Logger.error('Failed to update player score', error);
            throw error;
        }
    }

    showFrenzy() {
        try {
            Logger.info('Showing frenzy text');
            this.frenzyText.textContent = 'LOOT FRENZY!';
            this.frenzyText.style.display = 'block';
            
            // Add animation
            this.frenzyText.style.animation = 'frenzyPulse 1s infinite';
            
            // Add the animation keyframes
            const style = document.createElement('style');
            style.textContent = `
                @keyframes frenzyPulse {
                    0% { transform: translate(-50%, -50%) scale(1); }
                    50% { transform: translate(-50%, -50%) scale(1.2); }
                    100% { transform: translate(-50%, -50%) scale(1); }
                }
            `;
            document.head.appendChild(style);
            Logger.debug('Frenzy text displayed with animation');
        } catch (error) {
            Logger.error('Failed to show frenzy text', error);
            throw error;
        }
    }

    hideFrenzy() {
        try {
            Logger.debug('Hiding frenzy text');
            this.frenzyText.style.display = 'none';
            this.frenzyText.style.animation = '';
        } catch (error) {
            Logger.error('Failed to hide frenzy text', error);
            throw error;
        }
    }

    showGameOver(winner, scores) {
        try {
            Logger.info('Showing game over screen', { winner, scores });
            
            // Create game over screen
            const gameOverScreen = document.createElement('div');
            gameOverScreen.style.position = 'absolute';
            gameOverScreen.style.top = '50%';
            gameOverScreen.style.left = '50%';
            gameOverScreen.style.transform = 'translate(-50%, -50%)';
            gameOverScreen.style.background = 'rgba(0, 0, 0, 0.9)';
            gameOverScreen.style.padding = '20px';
            gameOverScreen.style.borderRadius = '10px';
            gameOverScreen.style.color = 'white';
            gameOverScreen.style.textAlign = 'center';
            gameOverScreen.style.zIndex = '1000';

            // Add winner text
            const winnerText = document.createElement('div');
            winnerText.style.fontSize = '24px';
            winnerText.style.marginBottom = '20px';
            winnerText.style.color = '#ffd700';
            winnerText.textContent = `Winner: ${winner}`;
            gameOverScreen.appendChild(winnerText);

            // Add final scores
            const scoresDiv = document.createElement('div');
            scoresDiv.style.marginBottom = '20px';
            Object.entries(scores)
                .sort(([, a], [, b]) => b - a)
                .forEach(([name, score]) => {
                    const scoreText = document.createElement('div');
                    scoreText.textContent = `${name}: ${score}`;
                    scoresDiv.appendChild(scoreText);
                });
            gameOverScreen.appendChild(scoresDiv);

            // Add play again button
            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = 'Play Again';
            playAgainButton.style.padding = '10px 20px';
            playAgainButton.style.fontSize = '18px';
            playAgainButton.style.borderRadius = '5px';
            playAgainButton.style.border = 'none';
            playAgainButton.style.background = '#4CAF50';
            playAgainButton.style.color = 'white';
            playAgainButton.style.cursor = 'pointer';
            playAgainButton.onclick = () => {
                Logger.debug('Play again button clicked');
                document.getElementById('menu-screen').style.display = 'flex';
                gameOverScreen.remove();
            };
            gameOverScreen.appendChild(playAgainButton);

            document.getElementById('ui-overlay').appendChild(gameOverScreen);
            Logger.debug('Game over screen displayed successfully');
        } catch (error) {
            Logger.error('Failed to show game over screen', error);
            throw error;
        }
    }

    showGreedBotWarning(distance) {
        try {
            Logger.debug('Showing Greed Bot warning', { distance });
            
            // Create or update warning text
            let warningText = document.getElementById('greed-bot-warning');
            if (!warningText) {
                warningText = document.createElement('div');
                warningText.id = 'greed-bot-warning';
                warningText.style.position = 'absolute';
                warningText.style.top = '50%';
                warningText.style.left = '50%';
                warningText.style.transform = 'translate(-50%, -50%)';
                warningText.style.color = '#ff0000';
                warningText.style.fontSize = '24px';
                warningText.style.textShadow = '0 0 10px #ff0000';
                warningText.style.fontFamily = 'Arial, sans-serif';
                warningText.style.zIndex = '100';
                document.getElementById('ui-overlay').appendChild(warningText);
                Logger.debug('Greed Bot warning element created');
            }

            // Update warning intensity based on distance
            const intensity = Math.min(1, 5 / distance);
            warningText.style.opacity = intensity;
            warningText.textContent = 'GREED BOT NEARBY!';
            Logger.debug('Greed Bot warning updated', { intensity });
        } catch (error) {
            Logger.error('Failed to show Greed Bot warning', error);
            throw error;
        }
    }

    hideGreedBotWarning() {
        try {
            Logger.debug('Hiding Greed Bot warning');
            const warningText = document.getElementById('greed-bot-warning');
            if (warningText) {
                warningText.style.opacity = '0';
            }
        } catch (error) {
            Logger.error('Failed to hide Greed Bot warning', error);
            throw error;
        }
    }
} 