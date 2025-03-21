import * as THREE from 'three';

export class Player {
    constructor(scene, position, color, username) {
        this.scene = scene;
        this.username = username;
        this.score = 0;
        this.isJumping = false;
        this.jumpVelocity = 0;
        this.jumpHeight = 2;
        this.jumpDuration = 1;
        this.speed = 5;
        this.radius = 0.5;

        // Create player model
        this.createModel(color);
        this.mesh.position.copy(position);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        // Create username label
        this.createUsernameLabel();
        this.updateUsernamePosition();

        // Add to scene
        scene.add(this.mesh);
        scene.add(this.usernameLabel);
    }

    createModel(color) {
        // Create stickman model
        const group = new THREE.Group();

        // Body
        const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
        const bodyMaterial = new THREE.MeshStandardMaterial({ color });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.5;
        group.add(body);

        // Head
        const headGeometry = new THREE.SphereGeometry(0.2, 8, 8);
        const headMaterial = new THREE.MeshStandardMaterial({ color });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 1.4;
        group.add(head);

        // Arms
        const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8);
        const armMaterial = new THREE.MeshStandardMaterial({ color });
        
        const leftArm = new THREE.Mesh(armGeometry, armMaterial);
        leftArm.position.set(-0.3, 1.1, 0);
        leftArm.rotation.z = Math.PI / 4;
        group.add(leftArm);

        const rightArm = new THREE.Mesh(armGeometry, armMaterial);
        rightArm.position.set(0.3, 1.1, 0);
        rightArm.rotation.z = -Math.PI / 4;
        group.add(rightArm);

        // Legs
        const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.7, 8);
        const legMaterial = new THREE.MeshStandardMaterial({ color });
        
        const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
        leftLeg.position.set(-0.1, 0.15, 0);
        leftLeg.rotation.z = Math.PI / 6;
        group.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
        rightLeg.position.set(0.1, 0.15, 0);
        rightLeg.rotation.z = -Math.PI / 6;
        group.add(rightLeg);

        this.mesh = group;
    }

    createUsernameLabel() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 64;

        // Draw username background
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw username text
        context.font = 'bold 24px Arial';
        context.fillStyle = 'white';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(this.username, canvas.width / 2, canvas.height / 2);

        // Create texture from canvas
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        this.usernameLabel = new THREE.Sprite(spriteMaterial);
        this.usernameLabel.scale.set(2, 0.5, 1);
    }

    updateUsernamePosition() {
        this.usernameLabel.position.copy(this.mesh.position);
        this.usernameLabel.position.y += 2;
    }

    update(deltaTime, input) {
        // Handle movement
        const movement = input.getMovementVector();
        this.mesh.position.x += movement.x * this.speed * deltaTime;
        this.mesh.position.z += movement.z * this.speed * deltaTime;

        // Handle jumping
        if (input.isJumping() && !this.isJumping) {
            this.startJump();
        }

        if (this.isJumping) {
            this.updateJump(deltaTime);
        }

        // Update username position
        this.updateUsernamePosition();

        // Update animation
        this.updateAnimation(movement);
    }

    startJump() {
        this.isJumping = true;
        this.jumpVelocity = (2 * this.jumpHeight * Math.PI) / this.jumpDuration;
    }

    updateJump(deltaTime) {
        const gravity = 9.8;
        this.jumpVelocity -= gravity * deltaTime;
        this.mesh.position.y += this.jumpVelocity * deltaTime;

        // Check if landed
        if (this.mesh.position.y <= 0) {
            this.mesh.position.y = 0;
            this.isJumping = false;
            this.jumpVelocity = 0;
        }
    }

    updateAnimation(movement) {
        // Rotate player to face movement direction
        if (movement.x !== 0 || movement.z !== 0) {
            this.mesh.rotation.y = Math.atan2(movement.x, movement.z);
        }

        // Animate arms and legs
        const time = Date.now() * 0.01;
        const armRotation = Math.sin(time) * 0.3;
        const legRotation = Math.sin(time) * 0.2;

        this.mesh.children[1].rotation.z = Math.PI / 4 + armRotation; // Left arm
        this.mesh.children[2].rotation.z = -Math.PI / 4 - armRotation; // Right arm
        this.mesh.children[3].rotation.z = Math.PI / 6 + legRotation; // Left leg
        this.mesh.children[4].rotation.z = -Math.PI / 6 - legRotation; // Right leg
    }

    addScore(points) {
        this.score += points;
    }

    getScore() {
        return this.score;
    }

    getPosition() {
        return this.mesh.position;
    }

    dispose() {
        this.scene.remove(this.mesh);
        this.scene.remove(this.usernameLabel);
    }
} 