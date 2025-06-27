// Enhanced Pac-Man specific utilities and extensions

// Pac-Man animation states
const PACMAN_ANIMATIONS = {
    CHOMP: {
        frames: [0.2, 0.8, 1.2, 1.8], // Mouth opening angles
        speed: 8 // Animation speed
    },
    DEATH: {
        frames: [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0],
        speed: 4
    }
};

// Pac-Man power-up effects
class PacmanEffects {
    static createChompParticles(x, y) {
        const particles = [];
        for (let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 * i) / 5;
            const speed = 1 + Math.random() * 2;
            particles.push(new Particle(
                x, y,
                '#FFFF00',
                {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                },
                20 + Math.random() * 10
            ));
        }
        return particles;
    }
    
    static createPowerPelletEffect(x, y) {
        const particles = [];
        for (let i = 0; i < 12; i++) {
            const angle = (Math.PI * 2 * i) / 12;
            const speed = 2 + Math.random() * 3;
            particles.push(new Particle(
                x, y,
                i % 2 === 0 ? '#FFFFFF' : '#FFFF00',
                {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                },
                40 + Math.random() * 20
            ));
        }
        return particles;
    }
    
    static createDeathEffect(x, y) {
        const particles = [];
        for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 * i) / 20;
            const speed = 1 + Math.random() * 4;
            particles.push(new Particle(
                x, y,
                '#FF0000',
                {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                },
                60 + Math.random() * 30
            ));
        }
        return particles;
    }
}

// Pac-Man sound effects (enhanced)
class PacmanSounds {
    static playChomp() {
        if (audio && !audio.muted) {
            audio.play('chomp');
        }
    }
    
    static playPowerPellet() {
        if (audio && !audio.muted) {
            audio.play('powerPellet');
        }
    }
    
    static playDeath() {
        if (audio && !audio.muted) {
            audio.play('death');
        }
    }
    
    static playExtraLife() {
        if (audio && !audio.muted) {
            // Create a special sound for extra life
            const oscillator = audio.context.createOscillator();
            const gainNode = audio.context.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audio.context.destination);
            
            oscillator.frequency.setValueAtTime(523, audio.context.currentTime); // C5
            oscillator.frequency.setValueAtTime(659, audio.context.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(784, audio.context.currentTime + 0.2); // G5
            oscillator.frequency.setValueAtTime(1047, audio.context.currentTime + 0.3); // C6
            
            gainNode.gain.setValueAtTime(0.3, audio.context.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audio.context.currentTime + 0.5);
            
            oscillator.start(audio.context.currentTime);
            oscillator.stop(audio.context.currentTime + 0.5);
        }
    }
}

// Pac-Man statistics tracking
class PacmanStats {
    constructor() {
        this.dotsEaten = 0;
        this.powerPelletsEaten = 0;
        this.ghostsEaten = 0;
        this.deaths = 0;
        this.levelsCompleted = 0;
        this.totalScore = 0;
        this.playTime = 0;
        this.startTime = Date.now();
    }
    
    reset() {
        this.dotsEaten = 0;
        this.powerPelletsEaten = 0;
        this.ghostsEaten = 0;
        this.deaths = 0;
        this.levelsCompleted = 0;
        this.totalScore = 0;
        this.playTime = 0;
        this.startTime = Date.now();
    }
    
    update() {
        this.playTime = Date.now() - this.startTime;
    }
    
    eatDot() {
        this.dotsEaten++;
    }
    
    eatPowerPellet() {
        this.powerPelletsEaten++;
    }
    
    eatGhost() {
        this.ghostsEaten++;
    }
    
    die() {
        this.deaths++;
    }
    
    completeLevel() {
        this.levelsCompleted++;
    }
    
    getStats() {
        return {
            dotsEaten: this.dotsEaten,
            powerPelletsEaten: this.powerPelletsEaten,
            ghostsEaten: this.ghostsEaten,
            deaths: this.deaths,
            levelsCompleted: this.levelsCompleted,
            totalScore: this.totalScore,
            playTime: this.playTime,
            dotsPerMinute: this.playTime > 0 ? (this.dotsEaten / (this.playTime / 60000)).toFixed(1) : 0,
            accuracy: this.dotsEaten > 0 ? ((this.dotsEaten / (this.dotsEaten + this.deaths)) * 100).toFixed(1) : 0
        };
    }
}

// Pac-Man achievements system
class PacmanAchievements {
    constructor() {
        this.achievements = {
            firstDot: { name: "First Bite", description: "Eat your first dot", unlocked: false },
            firstPowerPellet: { name: "Power Up", description: "Eat your first power pellet", unlocked: false },
            firstGhost: { name: "Ghost Hunter", description: "Eat your first ghost", unlocked: false },
            perfectLevel: { name: "Perfect Clear", description: "Complete a level without dying", unlocked: false },
            speedDemon: { name: "Speed Demon", description: "Complete a level in under 60 seconds", unlocked: false },
            ghostMaster: { name: "Ghost Master", description: "Eat all 4 ghosts in one power mode", unlocked: false },
            survivor: { name: "Survivor", description: "Reach level 5", unlocked: false },
            champion: { name: "Champion", description: "Reach level 10", unlocked: false },
            highScore: { name: "High Scorer", description: "Score over 10,000 points", unlocked: false },
            dedication: { name: "Dedication", description: "Play for 30 minutes", unlocked: false }
        };
        
        this.loadAchievements();
    }
    
    check(type, value = null) {
        let newAchievements = [];
        
        switch (type) {
            case 'dot':
                if (!this.achievements.firstDot.unlocked) {
                    this.achievements.firstDot.unlocked = true;
                    newAchievements.push(this.achievements.firstDot);
                }
                break;
                
            case 'powerPellet':
                if (!this.achievements.firstPowerPellet.unlocked) {
                    this.achievements.firstPowerPellet.unlocked = true;
                    newAchievements.push(this.achievements.firstPowerPellet);
                }
                break;
                
            case 'ghost':
                if (!this.achievements.firstGhost.unlocked) {
                    this.achievements.firstGhost.unlocked = true;
                    newAchievements.push(this.achievements.firstGhost);
                }
                break;
                
            case 'level':
                if (value >= 5 && !this.achievements.survivor.unlocked) {
                    this.achievements.survivor.unlocked = true;
                    newAchievements.push(this.achievements.survivor);
                }
                if (value >= 10 && !this.achievements.champion.unlocked) {
                    this.achievements.champion.unlocked = true;
                    newAchievements.push(this.achievements.champion);
                }
                break;
                
            case 'score':
                if (value >= 10000 && !this.achievements.highScore.unlocked) {
                    this.achievements.highScore.unlocked = true;
                    newAchievements.push(this.achievements.highScore);
                }
                break;
        }
        
        if (newAchievements.length > 0) {
            this.saveAchievements();
            this.showAchievements(newAchievements);
        }
    }
    
    showAchievements(achievements) {
        achievements.forEach(achievement => {
            this.showAchievementNotification(achievement);
        });
    }
    
    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-text">
                <div class="achievement-title">${achievement.name}</div>
                <div class="achievement-desc">${achievement.description}</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }
    
    saveAchievements() {
        localStorage.setItem('pacmanAchievements', JSON.stringify(this.achievements));
    }
    
    loadAchievements() {
        const saved = localStorage.getItem('pacmanAchievements');
        if (saved) {
            const savedAchievements = JSON.parse(saved);
            Object.keys(savedAchievements).forEach(key => {
                if (this.achievements[key]) {
                    this.achievements[key].unlocked = savedAchievements[key].unlocked;
                }
            });
        }
    }
    
    getUnlockedCount() {
        return Object.values(this.achievements).filter(a => a.unlocked).length;
    }
    
    getTotalCount() {
        return Object.keys(this.achievements).length;
    }
}

// Initialize global instances
let pacmanStats = new PacmanStats();
let pacmanAchievements = new PacmanAchievements();

// Export for use in main game
if (typeof window !== 'undefined') {
    window.PacmanEffects = PacmanEffects;
    window.PacmanSounds = PacmanSounds;
    window.pacmanStats = pacmanStats;
    window.pacmanAchievements = pacmanAchievements;
}
