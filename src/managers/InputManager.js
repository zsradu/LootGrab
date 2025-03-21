import { Logger } from '../utils/Logger';

export class InputManager {
    constructor() {
        try {
            Logger.info('Initializing input manager');
            
            this.keys = new Set();
            this.touchControls = {
                joystick: { x: 0, y: 0 },
                jumpButton: false
            };
            this.setupEventListeners();
            Logger.debug('Input manager initialized');
        } catch (error) {
            Logger.error('Failed to initialize input manager', error);
            throw error;
        }
    }

    setupEventListeners() {
        try {
            // Keyboard events
            window.addEventListener('keydown', (e) => {
                this.keys.add(e.key.toLowerCase());
                Logger.debug('Key pressed', { key: e.key });
            });

            window.addEventListener('keyup', (e) => {
                this.keys.delete(e.key.toLowerCase());
                Logger.debug('Key released', { key: e.key });
            });

            // Touch events for mobile
            window.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const rect = e.target.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const y = touch.clientY - rect.top;

                // Check if touch is in joystick area (left side)
                if (x < 150 && y > window.innerHeight - 150) {
                    this.touchControls.joystick = { x: 0, y: 0 };
                }
                // Check if touch is in jump button area (right side)
                else if (x > window.innerWidth - 100 && y > window.innerHeight - 100) {
                    this.touchControls.jumpButton = true;
                }
            });

            window.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const rect = e.target.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const y = touch.clientY - rect.top;

                // Update joystick position
                if (x < 150 && y > window.innerHeight - 150) {
                    const centerX = 75;
                    const centerY = window.innerHeight - 75;
                    const dx = x - centerX;
                    const dy = y - centerY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 50) {
                        this.touchControls.joystick = {
                            x: dx / 50,
                            y: dy / 50
                        };
                    }
                }
            });

            window.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.touchControls.joystick = { x: 0, y: 0 };
                this.touchControls.jumpButton = false;
            });

            Logger.debug('Event listeners set up');
        } catch (error) {
            Logger.error('Failed to set up event listeners', error);
            throw error;
        }
    }

    getMovementVector() {
        try {
            let x = 0;
            let z = 0;

            // Keyboard controls
            if (this.keys.has('w')) z -= 1;
            if (this.keys.has('s')) z += 1;
            if (this.keys.has('a')) x -= 1;
            if (this.keys.has('d')) x += 1;

            // Touch controls
            if (this.touchControls.joystick.x !== 0 || this.touchControls.joystick.y !== 0) {
                x = this.touchControls.joystick.x;
                z = this.touchControls.joystick.y;
            }

            // Normalize diagonal movement
            if (x !== 0 && z !== 0) {
                const length = Math.sqrt(x * x + z * z);
                x /= length;
                z /= length;
            }

            return { x, z };
        } catch (error) {
            Logger.error('Error getting movement vector', error);
            throw error;
        }
    }

    getRotationInput() {
        try {
            let rotation = 0;

            // Keyboard controls
            if (this.keys.has('a')) rotation -= 1;
            if (this.keys.has('d')) rotation += 1;

            // Touch controls (horizontal component of joystick)
            if (this.touchControls.joystick.x !== 0) {
                rotation = this.touchControls.joystick.x;
            }

            return rotation;
        } catch (error) {
            Logger.error('Error getting rotation input', error);
            throw error;
        }
    }

    isJumping() {
        try {
            return this.keys.has(' ') || this.touchControls.jumpButton;
        } catch (error) {
            Logger.error('Error checking jump state', error);
            throw error;
        }
    }

    dispose() {
        try {
            Logger.debug('Disposing input manager');
            window.removeEventListener('keydown', this.handleKeyDown);
            window.removeEventListener('keyup', this.handleKeyUp);
            window.removeEventListener('touchstart', this.handleTouchStart);
            window.removeEventListener('touchmove', this.handleTouchMove);
            window.removeEventListener('touchend', this.handleTouchEnd);
        } catch (error) {
            Logger.error('Failed to dispose input manager', error);
            throw error;
        }
    }
} 