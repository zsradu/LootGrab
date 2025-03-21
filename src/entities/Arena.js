import * as THREE from 'three';

export class Arena {
    constructor(scene) {
        this.scene = scene;
        this.size = 50;
        this.height = 10;
        this.cubeSize = 1;
        this.platforms = [];
        this.createArena();
    }

    createArena() {
        // Create base layer
        this.createBaseLayer();

        // Create elevated platforms
        this.createElevatedPlatforms();

        // Create obstacles
        this.createObstacles();

        // Create void effect
        this.createVoidEffect();

        // Add lighting
        this.addLighting();
    }

    createBaseLayer() {
        const baseGeometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
        const baseMaterial = new THREE.MeshStandardMaterial({
            color: 0x808080,
            roughness: 0.8,
            metalness: 0.2
        });

        for (let x = -this.size / 2; x < this.size / 2; x += this.cubeSize) {
            for (let z = -this.size / 2; z < this.size / 2; z += this.cubeSize) {
                const cube = new THREE.Mesh(baseGeometry, baseMaterial);
                cube.position.set(x, -this.cubeSize / 2, z);
                cube.castShadow = true;
                cube.receiveShadow = true;
                this.scene.add(cube);
                this.platforms.push(cube);
            }
        }
    }

    createElevatedPlatforms() {
        const platformGeometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
        const platformMaterial = new THREE.MeshStandardMaterial({
            color: 0x808080,
            roughness: 0.8,
            metalness: 0.2
        });

        // Create 10-15 elevated platforms
        const numPlatforms = 10 + Math.floor(Math.random() * 6);
        for (let i = 0; i < numPlatforms; i++) {
            const height = 1 + Math.floor(Math.random() * 2); // 2-3 blocks high
            const x = (Math.random() - 0.5) * (this.size - 4);
            const z = (Math.random() - 0.5) * (this.size - 4);

            for (let h = 0; h < height; h++) {
                const cube = new THREE.Mesh(platformGeometry, platformMaterial);
                cube.position.set(x, h - this.cubeSize / 2, z);
                cube.castShadow = true;
                cube.receiveShadow = true;
                this.scene.add(cube);
                this.platforms.push(cube);
            }
        }
    }

    createObstacles() {
        const obstacleGeometry = new THREE.BoxGeometry(this.cubeSize, this.cubeSize, this.cubeSize);
        const obstacleMaterial = new THREE.MeshStandardMaterial({
            color: 0x404040,
            roughness: 0.9,
            metalness: 0.1
        });

        // Create 5-7 obstacles
        const numObstacles = 5 + Math.floor(Math.random() * 3);
        for (let i = 0; i < numObstacles; i++) {
            const x = (Math.random() - 0.5) * (this.size - 4);
            const z = (Math.random() - 0.5) * (this.size - 4);

            const cube = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
            cube.position.set(x, 0, z);
            cube.castShadow = true;
            cube.receiveShadow = true;
            this.scene.add(cube);
            this.platforms.push(cube);
        }
    }

    createVoidEffect() {
        // Create void plane
        const voidGeometry = new THREE.PlaneGeometry(this.size * 2, this.size * 2);
        const voidMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.5
        });
        const voidPlane = new THREE.Mesh(voidGeometry, voidMaterial);
        voidPlane.rotation.x = -Math.PI / 2;
        voidPlane.position.y = -this.height;
        this.scene.add(voidPlane);

        // Add red glow
        const glowGeometry = new THREE.PlaneGeometry(this.size * 2, this.size * 2);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xFF0000,
            transparent: true,
            opacity: 0.1
        });
        const glowPlane = new THREE.Mesh(glowGeometry, glowMaterial);
        glowPlane.rotation.x = -Math.PI / 2;
        glowPlane.position.y = -this.height + 0.1;
        this.scene.add(glowPlane);
    }

    addLighting() {
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);

        // Add directional light (sunlight)
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
        directionalLight.position.set(0, this.height, 0);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = this.height * 2;
        directionalLight.shadow.camera.left = -this.size / 2;
        directionalLight.shadow.camera.right = this.size / 2;
        directionalLight.shadow.camera.top = this.size / 2;
        directionalLight.shadow.camera.bottom = -this.size / 2;
        this.scene.add(directionalLight);
    }

    getRandomSpawnPosition() {
        const x = (Math.random() - 0.5) * (this.size - 4);
        const z = (Math.random() - 0.5) * (this.size - 4);
        return new THREE.Vector3(x, 0, z);
    }

    isOnPlatform(position) {
        const ray = new THREE.Raycaster();
        ray.set(position, new THREE.Vector3(0, -1, 0));
        ray.far = 2;

        const intersects = ray.intersectObjects(this.platforms);
        return intersects.length > 0;
    }

    getPlatformHeight(position) {
        const ray = new THREE.Raycaster();
        ray.set(position, new THREE.Vector3(0, -1, 0));
        ray.far = this.height;

        const intersects = ray.intersectObjects(this.platforms);
        if (intersects.length > 0) {
            return intersects[0].point.y;
        }
        return 0;
    }

    dispose() {
        this.platforms.forEach(platform => {
            this.scene.remove(platform);
        });
        this.platforms = [];
    }
} 