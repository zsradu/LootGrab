import * as THREE from 'three';
import { Logger } from '../utils/Logger';

export class GreedBot {
    constructor(scene, position, uiManager) {
        try {
            Logger.info('Initializing GreedBot');
            
            this.scene = scene;
            this.position = position;
            this.uiManager = uiManager;
            this.radius = 1;
            this.speed = 0.5;
            this.isFrenzy = false;
            this.isGreedRush = false;
            this.greedRushDuration = 5; // 5 seconds
            this.greedRushTimer = 0;
            this.stolenPoints = 0;
            this.createModel();
            Logger.debug('GreedBot created', { position });
        } catch (error) {
            Logger.error('Failed to initialize GreedBot', error);
            throw error;
        }
    }

    createModel() {
        try {
            Logger.debug('Creating GreedBot model');
            
            // Create a menacing red sphere
            const geometry = new THREE.SphereGeometry(this.radius, 32, 32);
            const material = new THREE.MeshPhongMaterial({
                color: 0xff0000,
                emissive: 0xff0000,
                emissiveIntensity: 0.5
            });
            this.mesh = new THREE.Mesh(geometry, material);
            this.mesh.position.copy(this.position);
            this.mesh.castShadow = true;
            this.scene.add(this.mesh);

            // Add pulsing animation
            this.pulseScale = 1;
            this.pulseSpeed = 2;
            Logger.debug('GreedBot model created successfully');
        } catch (error) {
            Logger.error('Failed to create GreedBot model', error);
            throw error;
        }
    }

    update(deltaTime, players, loot) {
        try {
            if (this.isGreedRush) {
                this.greedRushTimer += deltaTime;
                if (this.greedRushTimer >= this.greedRushDuration) {
                    Logger.debug('Greed Rush ended');
                    this.isGreedRush = false;
                    this.greedRushTimer = 0;
                }
            }

            // Find nearest player
            let nearestPlayer = null;
            let minDistance = Infinity;
            players.forEach(player => {
                const distance = this.position.distanceTo(player.getPosition());
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestPlayer = player;
                }
            });

            // Update position
            if (nearestPlayer) {
                const direction = new THREE.Vector3()
                    .subVectors(nearestPlayer.getPosition(), this.position)
                    .normalize();
                
                // Adjust speed based on state
                const currentSpeed = this.isFrenzy ? this.speed * 0.5 : this.speed;
                this.position.add(direction.multiplyScalar(currentSpeed));
                this.mesh.position.copy(this.position);

                // Update UI warning
                if (minDistance < 10) {
                    Logger.debug('GreedBot near player', { distance: minDistance });
                    if (this.uiManager) {
                        this.uiManager.showGreedBotWarning(minDistance);
                    }
                } else if (this.uiManager) {
                    this.uiManager.hideGreedBotWarning();
                }
            }

            // Update pulsing animation
            this.pulseScale = 1 + Math.sin(Date.now() * 0.001 * this.pulseSpeed) * 0.1;
            this.mesh.scale.set(this.pulseScale, this.pulseScale, this.pulseScale);
        } catch (error) {
            Logger.error('Error updating GreedBot', error);
            throw error;
        }
    }

    getPosition() {
        return this.position;
    }

    setFrenzy(frenzy) {
        try {
            Logger.debug('Setting GreedBot frenzy state', { frenzy });
            this.isFrenzy = frenzy;
        } catch (error) {
            Logger.error('Failed to set GreedBot frenzy state', error);
            throw error;
        }
    }

    startGreedRush(points) {
        try {
            Logger.info('Starting Greed Rush', { points });
            this.isGreedRush = true;
            this.greedRushTimer = 0;
            this.stolenPoints = points;
        } catch (error) {
            Logger.error('Failed to start Greed Rush', error);
            throw error;
        }
    }

    dispose() {
        try {
            Logger.debug('Disposing GreedBot');
            this.scene.remove(this.mesh);
        } catch (error) {
            Logger.error('Failed to dispose GreedBot', error);
            throw error;
        }
    }
} 