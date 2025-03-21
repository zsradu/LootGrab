import * as THREE from 'three';

export class Loot {
    constructor(scene, position, type) {
        this.scene = scene;
        this.position = position;
        this.type = type;
        this.radius = 0.2;
        this.createModel();
    }

    createModel() {
        let geometry, material;

        switch (this.type) {
            case 'coin':
                geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.05, 16);
                material = new THREE.MeshStandardMaterial({
                    color: 0xFFD700,
                    metalness: 0.8,
                    roughness: 0.2,
                    emissive: 0xFFD700,
                    emissiveIntensity: 0.2
                });
                this.points = 1;
                break;

            case 'gem':
                geometry = new THREE.OctahedronGeometry(0.2, 0);
                material = new THREE.MeshStandardMaterial({
                    color: 0x00FFFF,
                    metalness: 0.5,
                    roughness: 0.1,
                    transparent: true,
                    opacity: 0.8,
                    emissive: 0x00FFFF,
                    emissiveIntensity: 0.3
                });
                this.points = 5;
                break;

            case 'chest':
                geometry = new THREE.BoxGeometry(0.3, 0.2, 0.2);
                material = new THREE.MeshStandardMaterial({
                    color: 0x8B4513,
                    metalness: 0.3,
                    roughness: 0.7
                });
                this.points = 10;
                break;
        }

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(this.position);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        // Add to scene
        this.scene.add(this.mesh);

        // Add floating animation
        this.animationOffset = Math.random() * Math.PI * 2;
        this.animationSpeed = 1 + Math.random() * 0.5;
    }

    update(deltaTime) {
        // Floating animation
        this.mesh.position.y = this.position.y + Math.sin(Date.now() * 0.001 * this.animationSpeed + this.animationOffset) * 0.2;

        // Rotation animation
        this.mesh.rotation.y += deltaTime * 2;
    }

    getPosition() {
        return this.mesh.position;
    }

    getPoints() {
        return this.points;
    }

    dispose() {
        this.scene.remove(this.mesh);
    }
} 