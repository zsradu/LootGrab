export class Logger {
    static levels = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3
    };

    static currentLevel = Logger.levels.DEBUG;

    static setLevel(level) {
        Logger.currentLevel = level;
    }

    static debug(message, ...args) {
        if (Logger.currentLevel <= Logger.levels.DEBUG) {
            console.debug(`[DEBUG] ${message}`, ...args);
        }
    }

    static info(message, ...args) {
        if (Logger.currentLevel <= Logger.levels.INFO) {
            console.info(`[INFO] ${message}`, ...args);
        }
    }

    static warn(message, ...args) {
        if (Logger.currentLevel <= Logger.levels.WARN) {
            console.warn(`[WARN] ${message}`, ...args);
        }
    }

    static error(message, error = null, ...args) {
        if (Logger.currentLevel <= Logger.levels.ERROR) {
            console.error(`[ERROR] ${message}`, error, ...args);
            if (error) {
                console.error(error);
                if (error.stack) {
                    console.error(error.stack);
                }
            }
        }
    }

    static logGameState(state) {
        Logger.debug('Game State:', {
            time: state.gameTime,
            scores: state.scores,
            lootCount: state.lootCount,
            isFrenzy: state.isFrenzy,
            isGameOver: state.isGameOver
        });
    }

    static logEntityState(entity, type) {
        Logger.debug(`${type} State:`, {
            position: entity.getPosition(),
            score: entity.getScore ? entity.getScore() : null,
            isJumping: entity.isJumping
        });
    }
} 