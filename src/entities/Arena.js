import * as THREE from 'three';
import { Logger } from '../utils/Logger';

export class Arena {
    constructor(scene) {
        try {
            Logger.info('Initializing arena');
            
            this.scene = scene;
            this.size = 50; // 50m x 50m
            this.height = 1; // 1m high blocks
            this.cubeSize = 5; // 5m x 5m blocks
            this.platforms = [];
            this.createArena();
            Logger.debug('Arena created successfully');
        } catch (error) {
            Logger.error('Failed to initialize arena', error);
            throw error;
        }
    }

    createArena() {
        try {
            Logger.debug('Creating arena components');
            
            // Create base layer (10x10 grid)
            this.createBaseLayer();
            
            // Create elevated platforms
            this.createElevatedPlatforms();
            
            // Create specific platforms
            this.createSpecificPlatforms();
            
            // Create obstacles
            this.createObstacles();
            
            // Create void effect
            this.createVoidEffect();
            
            // Add lighting
            this.addLighting();
            
            Logger.debug('Arena components created successfully');
        } catch (error) {
            Logger.error('Failed to create arena components', error);
            throw error;
        }
    }

    createBaseLayer() {
        try {
            Logger.debug('Creating base layer');
            
            // Load textures
            const textureLoader = new THREE.TextureLoader();
            const rockGrassTexture = textureLoader.load('/assets/rock_grass.png');
            const crackedStoneTexture = textureLoader.load('/assets/cracked_stone.png');
            
            // Create base material
            const baseMaterial = new THREE.MeshPhongMaterial({
                map: rockGrassTexture,
                bumpMap: rockGrassTexture,
                bumpScale: 0.1
            });
            
            // Create 10x10 grid of cubes
            for (let x = 0; x < 10; x++) {
                for (let z = 0; z < 10; z++) {
                    const geometry = new THREE.BoxGeometry(this.cubeSize, this.height, this.cubeSize);
                    const material = baseMaterial.clone();
                    
                    // Randomly add cracked stone decal
                    if (Math.random() < 0.5) {
                        material.map = crackedStoneTexture;
                    }
                    
                    const cube = new THREE.Mesh(geometry, material);
                    cube.position.set(
                        x * this.cubeSize - this.size / 2,
                        0,
                        z * this.cubeSize - this.size / 2
                    );
                    cube.castShadow = true;
                    cube.receiveShadow = true;
                    
                    // Add collision box
                    cube.userData.collisionBox = new THREE.Box3().setFromObject(cube);
                    
                    this.scene.add(cube);
                    this.platforms.push(cube);
                }
            }
            
            Logger.debug('Base layer created', { numCubes: this.platforms.length });
        } catch (error) {
            Logger.error('Failed to create base layer', error);
            throw error;
        }
    }

    createElevatedPlatforms() {
        try {
            Logger.debug('Creating elevated platforms');
            
            // Create 20 random elevated cubes
            for (let i = 0; i < 20; i++) {
                const height = 2 + Math.floor(Math.random() * 2); // 2m or 3m high
                const x = Math.random() * this.size - this.size / 2;
                const z = Math.random() * this.size - this.size / 2;
                
                this.createElevatedCube(x, height, z);
            }
            
            Logger.debug('Elevated platforms created', { numPlatforms: 20 });
        } catch (error) {
            Logger.error('Failed to create elevated platforms', error);
            throw error;
        }
    }

    createSpecificPlatforms() {
        try {
            Logger.debug('Creating specific platforms');
            
            // Platform 1: 3 connected 2m-high cubes at X=10, Y=2, Z=10
            for (let x = 0; x < 3; x++) {
                this.createElevatedCube(10 + x * 5, 2, 10);
            }
            
            // Platform 2: 4 connected 2m-high cubes at X=30, Y=2, Z=30
            for (let x = 0; x < 4; x++) {
                this.createElevatedCube(30 + x * 5, 2, 30);
            }
            
            // Platform 3: 2 connected 3m-high cubes at X=20, Y=3, Z=40
            for (let x = 0; x < 2; x++) {
                this.createElevatedCube(20 + x * 5, 3, 40);
            }
            
            Logger.debug('Specific platforms created');
        } catch (error) {
            Logger.error('Failed to create specific platforms', error);
            throw error;
        }
    }

    createElevatedCube(x, height, z) {
        try {
            const geometry = new THREE.BoxGeometry(this.cubeSize, height, this.cubeSize);
            const material = new THREE.MeshPhongMaterial({
                map: new THREE.TextureLoader().load('/assets/rock_grass.png'),
                bumpMap: new THREE.TextureLoader().load('/assets/rock_grass.png'),
                bumpScale: 0.1
            });
            
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(x, height / 2, z);
            cube.castShadow = true;
            cube.receiveShadow = true;
            
            // Add collision box
            cube.userData.collisionBox = new THREE.Box3().setFromObject(cube);
            
            this.scene.add(cube);
            this.platforms.push(cube);
        } catch (error) {
            Logger.error('Failed to create elevated cube', error);
            throw error;
        }
    }

    createObstacles() {
        try {
            Logger.debug('Creating obstacles');
            
            // Create 5-7 obstacles
            const numObstacles = 5 + Math.floor(Math.random() * 3);
            
            for (let i = 0; i < numObstacles; i++) {
                const x = Math.random() * this.size - this.size / 2;
                const z = Math.random() * this.size - this.size / 2;
                const height = 1 + Math.floor(Math.random() * 2); // 1m or 2m high
                
                const geometry = new THREE.BoxGeometry(this.cubeSize, height, this.cubeSize);
                const material = new THREE.MeshPhongMaterial({
                    color: 0x808080,
                    map: new THREE.TextureLoader().load('/assets/cracked_stone.png')
                });
                
                const obstacle = new THREE.Mesh(geometry, material);
                obstacle.position.set(x, height / 2, z);
                obstacle.castShadow = true;
                obstacle.receiveShadow = true;
                
                // Add collision box
                obstacle.userData.collisionBox = new THREE.Box3().setFromObject(obstacle);
                
                this.scene.add(obstacle);
                this.platforms.push(obstacle);
            }
            
            Logger.debug('Obstacles created', { numObstacles });
        } catch (error) {
            Logger.error('Failed to create obstacles', error);
            throw error;
        }
    }

    createVoidEffect() {
        try {
            Logger.debug('Creating void effect');
            
            // Create skybox
            const skyboxGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
            const skyboxMaterials = [];
            
            // Load skybox textures
            const textureLoader = new THREE.TextureLoader();
            const skyboxTextures = {
                top: textureLoader.load('/assets/sky_top.png'),
                bottom: textureLoader.load('/assets/sky_bottom.png'),
                left: textureLoader.load('/assets/sky_left.png'),
                right: textureLoader.load('/assets/sky_right.png'),
                front: textureLoader.load('/assets/sky_front.png'),
                back: textureLoader.load('/assets/sky_back.png')
            };
            
            // Create materials for each face
            for (let face in skyboxTextures) {
                skyboxMaterials.push(new THREE.MeshBasicMaterial({
                    map: skyboxTextures[face],
                    side: THREE.BackSide
                }));
            }
            
            const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterials);
            this.scene.add(skybox);
            
            // Create void plane
            const voidGeometry = new THREE.PlaneGeometry(this.size, this.size);
            const voidMaterial = new THREE.MeshBasicMaterial({
                color: 0x000000,
                transparent: true,
                opacity: 0.5
            });
            const voidPlane = new THREE.Mesh(voidGeometry, voidMaterial);
            voidPlane.rotation.x = -Math.PI / 2;
            voidPlane.position.y = -0.1;
            this.scene.add(voidPlane);
            
            // Add red glow
            const glowGeometry = new THREE.PlaneGeometry(this.size, this.size);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: 0xff0000,
                transparent: true,
                opacity: 0.1
            });
            const glowPlane = new THREE.Mesh(glowGeometry, glowMaterial);
            glowPlane.rotation.x = -Math.PI / 2;
            glowPlane.position.y = -0.05;
            this.scene.add(glowPlane);
            
            Logger.debug('Void effect created');
        } catch (error) {
            Logger.error('Failed to create void effect', error);
            throw error;
        }
    }

    addLighting() {
        try {
            Logger.debug('Adding lighting');
            
            // Ambient light
            const ambientLight = new THREE.AmbientLight(0x404040);
            this.scene.add(ambientLight);
            
            // Directional light (sun)
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(10, 20, 10);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            directionalLight.shadow.camera.near = 0.5;
            directionalLight.shadow.camera.far = 100;
            directionalLight.shadow.camera.left = -25;
            directionalLight.shadow.camera.right = 25;
            directionalLight.shadow.camera.top = 25;
            directionalLight.shadow.camera.bottom = -25;
            this.scene.add(directionalLight);
            
            Logger.debug('Lighting added');
        } catch (error) {
            Logger.error('Failed to add lighting', error);
            throw error;
        }
    }

    getRandomSpawnPosition() {
        try {
            // Find a random position on a platform
            let attempts = 0;
            const maxAttempts = 100;
            
            while (attempts < maxAttempts) {
                const x = Math.random() * this.size - this.size / 2;
                const z = Math.random() * this.size - this.size / 2;
                
                // Check if position is on a platform
                const position = new THREE.Vector3(x, 0, z);
                if (this.isOnPlatform(position)) {
                    position.y = this.getPlatformHeight(position);
                    Logger.debug('Found valid spawn position', { position });
                    return position;
                }
                
                attempts++;
            }
            
            // If no valid position found, return a position on the base layer
            Logger.warn('No valid spawn position found, using base layer');
            return new THREE.Vector3(
                Math.random() * this.size - this.size / 2,
                0,
                Math.random() * this.size - this.size / 2
            );
        } catch (error) {
            Logger.error('Failed to get random spawn position', error);
            throw error;
        }
    }

    isOnPlatform(position) {
        try {
            // Create a ray from above
            const ray = new THREE.Ray(
                new THREE.Vector3(position.x, 10, position.z),
                new THREE.Vector3(0, -1, 0)
            );
            
            // Check intersection with all platforms
            for (const platform of this.platforms) {
                const intersection = new THREE.Vector3();
                const normal = new THREE.Vector3();
                
                if (platform.geometry.type === 'BoxGeometry') {
                    const box = platform.userData.collisionBox;
                    if (ray.intersectBox(box, intersection, normal)) {
                        // Check if we're within the platform's bounds
                        const platformPos = platform.position;
                        const halfSize = this.cubeSize / 2;
                        
                        if (Math.abs(intersection.x - platformPos.x) <= halfSize &&
                            Math.abs(intersection.z - platformPos.z) <= halfSize) {
                            return true;
                        }
                    }
                }
            }
            
            return false;
        } catch (error) {
            Logger.error('Failed to check platform collision', error);
            throw error;
        }
    }

    getPlatformHeight(position) {
        try {
            // Create a ray from above
            const ray = new THREE.Ray(
                new THREE.Vector3(position.x, 10, position.z),
                new THREE.Vector3(0, -1, 0)
            );
            
            // Find the highest platform intersection
            let highestY = 0;
            
            for (const platform of this.platforms) {
                const intersection = new THREE.Vector3();
                const normal = new THREE.Vector3();
                
                if (platform.geometry.type === 'BoxGeometry') {
                    const box = platform.userData.collisionBox;
                    if (ray.intersectBox(box, intersection, normal)) {
                        // Check if we're within the platform's bounds
                        const platformPos = platform.position;
                        const halfSize = this.cubeSize / 2;
                        
                        if (Math.abs(intersection.x - platformPos.x) <= halfSize &&
                            Math.abs(intersection.z - platformPos.z) <= halfSize) {
                            highestY = Math.max(highestY, intersection.y);
                        }
                    }
                }
            }
            
            return highestY;
        } catch (error) {
            Logger.error('Failed to get platform height', error);
            throw error;
        }
    }

    dispose() {
        try {
            Logger.debug('Disposing arena');
            this.platforms.forEach(platform => {
                this.scene.remove(platform);
            });
            this.platforms = [];
        } catch (error) {
            Logger.error('Failed to dispose arena', error);
            throw error;
        }
    }
} 