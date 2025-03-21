import { Howl } from 'howler';
import { Logger } from '../utils/Logger';

export class AudioManager {
    constructor() {
        try {
            Logger.info('Initializing AudioManager');
            
            this.sounds = {
                coin: new Howl({
                    src: ['/sounds/coin.mp3'],
                    volume: 0.5
                }),
                gem: new Howl({
                    src: ['/sounds/gem.mp3'],
                    volume: 0.6
                }),
                chest: new Howl({
                    src: ['/sounds/chest.mp3'],
                    volume: 0.7
                }),
                greedBot: new Howl({
                    src: ['/sounds/greed-bot.mp3'],
                    volume: 0.4,
                    loop: true
                }),
                frenzy: new Howl({
                    src: ['/sounds/frenzy.mp3'],
                    volume: 0.8
                }),
                jump: new Howl({
                    src: ['/sounds/jump.mp3'],
                    volume: 0.3
                })
            };

            this.isMuted = false;
            this.setupMuteToggle();
            Logger.debug('AudioManager initialized successfully');
        } catch (error) {
            Logger.error('Failed to initialize AudioManager', error);
            throw error;
        }
    }

    setupMuteToggle() {
        try {
            Logger.debug('Setting up mute toggle');
            
            // Add mute button to UI
            const muteButton = document.createElement('button');
            muteButton.id = 'mute-button';
            muteButton.innerHTML = '🔊';
            muteButton.style.position = 'absolute';
            muteButton.style.top = '20px';
            muteButton.style.left = '20px';
            muteButton.style.padding = '10px';
            muteButton.style.borderRadius = '5px';
            muteButton.style.border = 'none';
            muteButton.style.background = 'rgba(0, 0, 0, 0.7)';
            muteButton.style.color = 'white';
            muteButton.style.cursor = 'pointer';
            document.getElementById('ui-overlay').appendChild(muteButton);

            // Load mute state from localStorage
            const savedMute = localStorage.getItem('lootGrabMuted');
            if (savedMute === 'true') {
                Logger.debug('Loading saved mute state');
                this.toggleMute();
            }

            muteButton.addEventListener('click', () => {
                Logger.debug('Mute button clicked');
                this.toggleMute();
                localStorage.setItem('lootGrabMuted', this.isMuted);
            });

            Logger.debug('Mute toggle setup completed');
        } catch (error) {
            Logger.error('Failed to setup mute toggle', error);
            throw error;
        }
    }

    toggleMute() {
        try {
            this.isMuted = !this.isMuted;
            const muteButton = document.getElementById('mute-button');
            muteButton.innerHTML = this.isMuted ? '🔈' : '🔊';

            // Mute/unmute all sounds
            Object.values(this.sounds).forEach(sound => {
                sound.mute(this.isMuted);
            });

            Logger.info('Audio state changed', { isMuted: this.isMuted });
        } catch (error) {
            Logger.error('Failed to toggle mute', error);
            throw error;
        }
    }

    play(soundName) {
        try {
            if (!this.isMuted && this.sounds[soundName]) {
                Logger.debug('Playing sound', { soundName });
                this.sounds[soundName].play();
            }
        } catch (error) {
            Logger.error('Failed to play sound', error, { soundName });
            throw error;
        }
    }

    stop(soundName) {
        try {
            if (this.sounds[soundName]) {
                Logger.debug('Stopping sound', { soundName });
                this.sounds[soundName].stop();
            }
        } catch (error) {
            Logger.error('Failed to stop sound', error, { soundName });
            throw error;
        }
    }

    setVolume(soundName, volume) {
        try {
            if (this.sounds[soundName]) {
                Logger.debug('Setting sound volume', { soundName, volume });
                this.sounds[soundName].volume(volume);
            }
        } catch (error) {
            Logger.error('Failed to set sound volume', error, { soundName, volume });
            throw error;
        }
    }

    // Special methods for specific game events
    playCoinCollect() {
        try {
            Logger.debug('Playing coin collect sound');
            this.play('coin');
        } catch (error) {
            Logger.error('Failed to play coin collect sound', error);
            throw error;
        }
    }

    playGemCollect() {
        try {
            Logger.debug('Playing gem collect sound');
            this.play('gem');
        } catch (error) {
            Logger.error('Failed to play gem collect sound', error);
            throw error;
        }
    }

    playChestCollect() {
        try {
            Logger.debug('Playing chest collect sound');
            this.play('chest');
        } catch (error) {
            Logger.error('Failed to play chest collect sound', error);
            throw error;
        }
    }

    startGreedBotSound() {
        try {
            Logger.debug('Starting Greed Bot sound');
            this.play('greedBot');
        } catch (error) {
            Logger.error('Failed to start Greed Bot sound', error);
            throw error;
        }
    }

    stopGreedBotSound() {
        try {
            Logger.debug('Stopping Greed Bot sound');
            this.stop('greedBot');
        } catch (error) {
            Logger.error('Failed to stop Greed Bot sound', error);
            throw error;
        }
    }

    playFrenzyStart() {
        try {
            Logger.debug('Playing frenzy start sound');
            this.play('frenzy');
        } catch (error) {
            Logger.error('Failed to play frenzy start sound', error);
            throw error;
        }
    }

    playJump() {
        try {
            Logger.debug('Playing jump sound');
            this.play('jump');
        } catch (error) {
            Logger.error('Failed to play jump sound', error);
            throw error;
        }
    }
} 