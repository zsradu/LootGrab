import * as THREE from 'three';
import { Logger } from '../utils/Logger';

export class Player {
    constructor(scene, position, color, username) {
        try {
            Logger.info('Initializing player', { username });
            
            this.scene = scene;
            this.position = position;
            this.color = color;
            this.username = username;
            this.radius = 0.5;
            this.speed = 5; // 5 meters per second
            this.rotationSpeed = 90; // 90 degrees per second
            this.jumpHeight = 1; // 1 meter high
            this.jumpDuration = 0.5; // 0.5 seconds
            this.isJumping = false;
            this.jumpStartTime = 0;
            this.score = 0;
            this.rotation = 0; // Current rotation in degrees
            this.createModel();
            Logger.debug('Player created', { position, color, username });
        } catch (error) {
            Logger.error('Failed to initialize player', error);
            throw error;
        }
    }

    createModel() {
        try {
            Logger.debug('Creating player model');
            
            // Create a stick figure
            const group = new THREE.Group();

            // Body
            const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
            const bodyMaterial = new THREE.MeshPhongMaterial({ color: this.color });
            const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
            body.position.y = 0.5;
            group.add(body);

            // Head
            const headGeometry = new THREE.SphereGeometry(0.2, 8, 8);
            const headMaterial = new THREE.MeshPhongMaterial({ color: this.color });
            const head = new THREE.Mesh(headGeometry, headMaterial);
            head.position.y = 1.2;
            group.add(head);

            // Arms
            const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8);
            const armMaterial = new THREE.MeshPhongMaterial({ color: this.color });

            const leftArm = new THREE.Mesh(armGeometry, armMaterial);
            leftArm.position.set(-0.3, 1, 0);
            leftArm.rotation.z = Math.PI / 4;
            group.add(leftArm);

            const rightArm = new THREE.Mesh(armGeometry, armMaterial);
            rightArm.position.set(0.3, 1, 0);
            rightArm.rotation.z = -Math.PI / 4;
            group.add(rightArm);

            // Legs
            const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 8);
            const legMaterial = new THREE.MeshPhongMaterial({ color: this.color });

            const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
            leftLeg.position.set(-0.1, 0, 0);
            group.add(leftLeg);

            const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
            rightLeg.position.set(0.1, 0, 0);
            group.add(rightLeg);

            this.mesh = group;
            this.mesh.position.copy(this.position);
            this.mesh.castShadow = true;
            this.mesh.receiveShadow = true;
            this.scene.add(this.mesh);

            // Add name label
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 256;
            canvas.height = 64;
            context.fillStyle = 'white';
            context.font = 'bold 32px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(this.username, 128, 32);

            const texture = new THREE.CanvasTexture(canvas);
            const labelMaterial = new THREE.SpriteMaterial({ map: texture });
            this.nameLabel = new THREE.Sprite(labelMaterial);
            this.nameLabel.scale.set(2, 0.5, 1);
            this.nameLabel.position.y = 2;
            this.mesh.add(this.nameLabel);

            Logger.debug('Player model created successfully');
        } catch (error) {
            Logger.error('Failed to create player model', error);
            throw error;
        }
    }

    update(deltaTime, input) {
        try {
            // Handle rotation
            const rotationInput = input.getRotationInput();
            if (rotationInput !== 0) {
                this.rotation += rotationInput * this.rotationSpeed * deltaTime;
                this.mesh.rotation.y = THREE.MathUtils.degToRad(this.rotation);
            }

            // Handle movement
            const movement = input.getMovementVector();
            if (movement.x !== 0 || movement.z !== 0) {
                // Convert movement to world space based on player's rotation
                const angle = THREE.MathUtils.degToRad(this.rotation);
                const worldMovement = new THREE.Vector3(
                    movement.x * Math.sin(angle) + movement.z * Math.cos(angle),
                    0,
                    movement.x * Math.cos(angle) - movement.z * Math.sin(angle)
                );

                // Apply movement
                this.position.add(worldMovement.multiplyScalar(this.speed * deltaTime));
            }

            // Handle jumping
            if (input.isJumping() && !this.isJumping) {
                Logger.debug('Player started jumping');
                this.isJumping = true;
                this.jumpStartTime = Date.now();
                this.scene.audioManager.playJump();
            }

            // Update jump position
            if (this.isJumping) {
                const jumpProgress = (Date.now() - this.jumpStartTime) / (this.jumpDuration * 1000);
                if (jumpProgress >= 1) {
                    this.isJumping = false;
                    this.position.y = 0;
                    Logger.debug('Player finished jumping');
                } else {
                    // Parabolic trajectory
                    this.position.y = this.jumpHeight * Math.sin(jumpProgress * Math.PI);
                }
            }

            // Update model position
            this.mesh.position.copy(this.position);
            Logger.debug('Player position updated', { position: this.position });
        } catch (error) {
            Logger.error('Error updating player', error);
            throw error;
        }
    }

    getPosition() {
        return this.position;
    }

    getScore() {
        return this.score;
    }

    addScore(points) {
        try {
            Logger.debug('Updating player score', { oldScore: this.score, points });
            this.score += points;
        } catch (error) {
            Logger.error('Failed to update player score', error);
            throw error;
        }
    }

    dispose() {
        try {
            Logger.debug('Disposing player');
            this.scene.remove(this.mesh);
        } catch (error) {
            Logger.error('Failed to dispose player', error);
            throw error;
        }
    }
} 