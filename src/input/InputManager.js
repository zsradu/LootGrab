import { Logger } from '../utils/Logger';

export class InputManager {
    constructor() {
        try {
            Logger.info('Initializing InputManager');
            
            this.keys = {
                forward: false,
                backward: false,
                left: false,
                right: false,
                jump: false
            };

            this.mobileInput = {
                x: 0,
                y: 0
            };

            this.setupKeyboardControls();
            Logger.debug('InputManager initialized successfully');
        } catch (error) {
            Logger.error('Failed to initialize InputManager', error);
            throw error;
        }
    }

    setupKeyboardControls() {
        try {
            Logger.debug('Setting up keyboard controls');
            
            window.addEventListener('keydown', (e) => {
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        this.keys.forward = true;
                        Logger.debug('Forward key pressed');
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        this.keys.backward = true;
                        Logger.debug('Backward key pressed');
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        this.keys.left = true;
                        Logger.debug('Left key pressed');
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        this.keys.right = true;
                        Logger.debug('Right key pressed');
                        break;
                    case 'Space':
                        this.keys.jump = true;
                        Logger.debug('Jump key pressed');
                        break;
                }
            });

            window.addEventListener('keyup', (e) => {
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        this.keys.forward = false;
                        Logger.debug('Forward key released');
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        this.keys.backward = false;
                        Logger.debug('Backward key released');
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        this.keys.left = false;
                        Logger.debug('Left key released');
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        this.keys.right = false;
                        Logger.debug('Right key released');
                        break;
                    case 'Space':
                        this.keys.jump = false;
                        Logger.debug('Jump key released');
                        break;
                }
            });

            Logger.debug('Keyboard controls setup completed');
        } catch (error) {
            Logger.error('Failed to setup keyboard controls', error);
            throw error;
        }
    }

    setMobileInput(x, y) {
        try {
            Logger.debug('Setting mobile input', { x, y });
            this.mobileInput.x = x;
            this.mobileInput.y = y;
        } catch (error) {
            Logger.error('Failed to set mobile input', error);
            throw error;
        }
    }

    setJump(jumping) {
        try {
            Logger.debug('Setting jump state', { jumping });
            this.keys.jump = jumping;
        } catch (error) {
            Logger.error('Failed to set jump state', error);
            throw error;
        }
    }

    getMovementVector() {
        try {
            const vector = { x: 0, z: 0 };

            // Handle keyboard input
            if (this.keys.forward) vector.z -= 1;
            if (this.keys.backward) vector.z += 1;
            if (this.keys.left) vector.x -= 1;
            if (this.keys.right) vector.x += 1;

            // Handle mobile input
            if (Math.abs(this.mobileInput.x) > 10) {
                vector.x += Math.sign(this.mobileInput.x);
            }
            if (Math.abs(this.mobileInput.y) > 10) {
                vector.z += Math.sign(this.mobileInput.y);
            }

            // Normalize vector
            const length = Math.sqrt(vector.x * vector.x + vector.z * vector.z);
            if (length > 0) {
                vector.x /= length;
                vector.z /= length;
            }

            Logger.debug('Movement vector calculated', { vector });
            return vector;
        } catch (error) {
            Logger.error('Failed to calculate movement vector', error);
            throw error;
        }
    }

    isJumping() {
        try {
            Logger.debug('Checking jump state', { isJumping: this.keys.jump });
            return this.keys.jump;
        } catch (error) {
            Logger.error('Failed to check jump state', error);
            throw error;
        }
    }
} 