// Game variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const levelElement = document.getElementById('level');

// Game constants
const GRID_SIZE = 20;
const COLS = canvas.width / GRID_SIZE;
const ROWS = canvas.height / GRID_SIZE;
const FPS = 60;
const POWER_MODE_DURATION = 300; // 5 seconds at 60fps
const GHOST_RESPAWN_TIME = 180; // 3 seconds

// Game state
let gameState = {
    score: 0,
    lives: 3,
    level: 1,
    gameRunning: false,
    gamePaused: false,
    gameOver: false,
    powerMode: false,
    powerModeTimer: 0,
    ghostMultiplier: 1,
    frameCount: 0,
    lastFrameTime: 0,
    highScore: localStorage.getItem('pacmanHighScore') || 0
};

// Input management
const input = {
    keys: {},
    previousKeys: {},
    
    isKeyPressed(key) {
        return this.keys[key] && !this.previousKeys[key];
    },
    
    isKeyHeld(key) {
        return this.keys[key];
    },
    
    update() {
        this.previousKeys = { ...this.keys };
    }
};

// Audio system
const audio = {
    sounds: {},
    muted: false,
    
    init() {
        // Create audio context for better browser support
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        
        // Load sound effects (placeholder - would load actual audio files)
        this.sounds = {
            chomp: this.createBeep(800, 0.1),
            powerPellet: this.createBeep(400, 0.3),
            ghostEaten: this.createBeep(1200, 0.2),
            death: this.createBeep(200, 0.5),
            gameStart: this.createBeep(600, 0.4)
        };
    },
    
    createBeep(frequency, duration) {
        return () => {
            if (this.muted) return;
            
            const oscillator = this.context.createOscillator();
            const gainNode = this.context.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.context.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.3, this.context.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration);
            
            oscillator.start(this.context.currentTime);
            oscillator.stop(this.context.currentTime + duration);
        };
    },
    
    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    },
    
    toggle() {
        this.muted = !this.muted;
    }
};

// Enhanced maze with better design
const originalMaze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,2,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,2,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,-1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,-1,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,1,1,3,3,0,1,1,1,1,1,1,1,1,0,3,3,1,1,1,0,1,1,0,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,1,1,3,3,0,1,1,1,1,1,1,1,1,0,3,3,1,1,1,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,-1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,-1,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// Game entities
let maze = JSON.parse(JSON.stringify(originalMaze)); // Deep copy
let pacman = null;
let ghosts = [];
let particles = [];
let totalDots = 0;
let dotsEaten = 0;

// Particle system for visual effects
class Particle {
    constructor(x, y, color, velocity, life) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.life = life;
        this.maxLife = life;
        this.size = 3;
    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.life--;
        this.size = (this.life / this.maxLife) * 3;
        return this.life > 0;
    }
    
    render(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Enhanced Pac-Man class
class Pacman {
    constructor(x, y) {
        this.startX = x;
        this.startY = y;
        this.x = x;
        this.y = y;
        this.direction = 'right';
        this.nextDirection = 'right';
        this.speed = 2;
        this.animFrame = 0;
        this.mouthOpen = true;
        this.invulnerable = false;
        this.invulnerableTimer = 0;
    }
    
    update() {
        // Handle invulnerability
        if (this.invulnerable) {
            this.invulnerableTimer--;
            if (this.invulnerableTimer <= 0) {
                this.invulnerable = false;
            }
        }
        
        // Animation
        this.animFrame++;
        if (this.animFrame % 10 === 0) {
            this.mouthOpen = !this.mouthOpen;
        }
        
        // Try to change direction
        if (this.canMove(this.nextDirection)) {
            this.direction = this.nextDirection;
        }
        
        // Move if possible
        if (this.canMove(this.direction)) {
            this.move();
        }
        
        // Handle tunnel (side wrapping)
        if (this.x < 0) this.x = canvas.width - GRID_SIZE;
        if (this.x >= canvas.width) this.x = 0;
    }
    
    move() {
        switch (this.direction) {
            case 'up': this.y -= this.speed; break;
            case 'down': this.y += this.speed; break;
            case 'left': this.x -= this.speed; break;
            case 'right': this.x += this.speed; break;
        }
    }
    
    canMove(direction) {
        let newX = this.x;
        let newY = this.y;
        
        switch (direction) {
            case 'up': newY -= this.speed; break;
            case 'down': newY += this.speed; break;
            case 'left': newX -= this.speed; break;
            case 'right': newX += this.speed; break;
        }
        
        // Handle tunnel
        if (newX < 0 || newX >= canvas.width) return true;
        
        const gridX = Math.floor((newX + GRID_SIZE/2) / GRID_SIZE);
        const gridY = Math.floor((newY + GRID_SIZE/2) / GRID_SIZE);
        
        if (gridY < 0 || gridY >= maze.length || gridX < 0 || gridX >= maze[0].length) {
            return false;
        }
        
        return maze[gridY][gridX] !== 1;
    }
    
    getGridPosition() {
        return {
            x: Math.floor((this.x + GRID_SIZE/2) / GRID_SIZE),
            y: Math.floor((this.y + GRID_SIZE/2) / GRID_SIZE)
        };
    }
    
    setDirection(direction) {
        this.nextDirection = direction;
    }
    
    reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.direction = 'right';
        this.nextDirection = 'right';
        this.invulnerable = true;
        this.invulnerableTimer = 120; // 2 seconds
    }
    
    render(ctx) {
        const centerX = this.x + GRID_SIZE/2;
        const centerY = this.y + GRID_SIZE/2;
        const radius = GRID_SIZE/2 - 2;
        
        // Flicker when invulnerable
        if (this.invulnerable && Math.floor(this.invulnerableTimer / 5) % 2) {
            return;
        }
        
        ctx.fillStyle = '#FFFF00';
        ctx.beginPath();
        
        if (this.mouthOpen) {
            // Pac-Man with mouth open
            let startAngle = 0;
            let endAngle = Math.PI * 2;
            
            switch (this.direction) {
                case 'right':
                    startAngle = Math.PI * 0.2;
                    endAngle = Math.PI * 1.8;
                    break;
                case 'left':
                    startAngle = Math.PI * 1.2;
                    endAngle = Math.PI * 0.8;
                    break;
                case 'up':
                    startAngle = Math.PI * 1.7;
                    endAngle = Math.PI * 1.3;
                    break;
                case 'down':
                    startAngle = Math.PI * 0.7;
                    endAngle = Math.PI * 0.3;
                    break;
            }
            
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(centerX, centerY);
        } else {
            // Closed mouth (full circle)
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        }
        
        ctx.fill();
        
        // Eye
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(centerX - 3, centerY - 3, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Game initialization
function initGame() {
    // Initialize audio
    audio.init();
    
    // Count total dots
    totalDots = 0;
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            if (maze[row][col] === 0 || maze[row][col] === 2) {
                totalDots++;
            }
        }
    }
    
    // Create Pac-Man
    pacman = new Pacman(GRID_SIZE, GRID_SIZE);
    
    // Create ghosts
    ghosts = [
        new Ghost(19 * GRID_SIZE, 9 * GRID_SIZE, '#FF0000', 'aggressive', 'blinky'),
        new Ghost(19 * GRID_SIZE, 11 * GRID_SIZE, '#FFB8FF', 'ambush', 'pinky'),
        new Ghost(18 * GRID_SIZE, 11 * GRID_SIZE, '#00FFFF', 'patrol', 'inky'),
        new Ghost(20 * GRID_SIZE, 11 * GRID_SIZE, '#FFB852', 'random', 'clyde')
    ];
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial render
    updateUI();
    draw();
}

function setupEventListeners() {
    // Keyboard input
    document.addEventListener('keydown', (e) => {
        input.keys[e.code] = true;
        
        // Prevent default for game keys
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
            e.preventDefault();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        input.keys[e.code] = false;
    });
    
    // Game controls
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('pauseBtn').addEventListener('click', togglePause);
    
    // Add mute button if it exists
    const muteBtn = document.getElementById('muteBtn');
    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            audio.toggle();
            muteBtn.textContent = audio.muted ? 'Unmute' : 'Mute';
        });
    }
}

function startGame() {
    if (gameState.gameOver) {
        resetGame();
    }
    
    gameState.gameRunning = true;
    gameState.gamePaused = false;
    audio.play('gameStart');
    gameLoop();
}

function togglePause() {
    if (!gameState.gameRunning) return;
    
    gameState.gamePaused = !gameState.gamePaused;
    if (!gameState.gamePaused) {
        gameLoop();
    }
}

function resetGame() {
    // Reset game state
    gameState.score = 0;
    gameState.lives = 3;
    gameState.level = 1;
    gameState.gameOver = false;
    gameState.powerMode = false;
    gameState.powerModeTimer = 0;
    gameState.ghostMultiplier = 1;
    gameState.frameCount = 0;
    
    // Reset maze
    maze = JSON.parse(JSON.stringify(originalMaze));
    dotsEaten = 0;
    
    // Reset entities
    pacman.reset();
    ghosts.forEach(ghost => ghost.reset());
    particles = [];
    
    updateUI();
}

// Main game loop
function gameLoop() {
    if (!gameState.gameRunning || gameState.gamePaused) return;
    
    const currentTime = performance.now();
    const deltaTime = currentTime - gameState.lastFrameTime;
    gameState.lastFrameTime = currentTime;
    
    update(deltaTime);
    draw();
    
    gameState.frameCount++;
    requestAnimationFrame(gameLoop);
}

function update(deltaTime) {
    // Handle input
    handleInput();
    
    // Update entities
    pacman.update();
    
    // Update ghosts
    const blinkyPos = ghosts[0] ? { x: ghosts[0].x, y: ghosts[0].y } : null;
    ghosts.forEach(ghost => {
        ghost.update({ x: pacman.x, y: pacman.y }, blinkyPos);
    });
    
    // Update particles
    particles = particles.filter(particle => particle.update());
    
    // Check collisions
    checkCollisions();
    
    // Update power mode
    updatePowerMode();
    
    // Check level completion
    if (dotsEaten >= totalDots) {
        nextLevel();
    }
    
    // Update input state
    input.update();
}

function handleInput() {
    // Movement controls
    if (input.isKeyHeld('ArrowUp') || input.isKeyHeld('KeyW')) {
        pacman.setDirection('up');
    } else if (input.isKeyHeld('ArrowDown') || input.isKeyHeld('KeyS')) {
        pacman.setDirection('down');
    } else if (input.isKeyHeld('ArrowLeft') || input.isKeyHeld('KeyA')) {
        pacman.setDirection('left');
    } else if (input.isKeyHeld('ArrowRight') || input.isKeyHeld('KeyD')) {
        pacman.setDirection('right');
    }
    
    // Pause with spacebar
    if (input.isKeyPressed('Space')) {
        togglePause();
    }
    
    // Mute with M
    if (input.isKeyPressed('KeyM')) {
        audio.toggle();
    }
}

function checkCollisions() {
    const pacGridPos = pacman.getGridPosition();
    
    // Check dot collection
    if (pacGridPos.y >= 0 && pacGridPos.y < maze.length &&
        pacGridPos.x >= 0 && pacGridPos.x < maze[0].length) {
        
        const cellType = maze[pacGridPos.y][pacGridPos.x];
        
        if (cellType === 0) { // Regular dot
            gameState.score += 10;
            maze[pacGridPos.y][pacGridPos.x] = -1;
            dotsEaten++;
            audio.play('chomp');
            
            // Add particle effect
            addParticles(pacman.x + GRID_SIZE/2, pacman.y + GRID_SIZE/2, '#FFFF00', 3);
            
        } else if (cellType === 2) { // Power pellet
            gameState.score += 50;
            maze[pacGridPos.y][pacGridPos.x] = -1;
            dotsEaten++;
            activatePowerMode();
            audio.play('powerPellet');
            
            // Add more particles for power pellet
            addParticles(pacman.x + GRID_SIZE/2, pacman.y + GRID_SIZE/2, '#FFFFFF', 8);
        }
    }
    
    // Check ghost collisions
    if (!pacman.invulnerable) {
        ghosts.forEach((ghost, index) => {
            if (ghost.inHouse) return;
            
            const distance = Math.sqrt(
                Math.pow(pacman.x - ghost.x, 2) + 
                Math.pow(pacman.y - ghost.y, 2)
            );
            
            if (distance < GRID_SIZE * 0.8) {
                if (ghost.mode === 'frightened') {
                    // Eat ghost
                    const points = 200 * gameState.ghostMultiplier;
                    gameState.score += points;
                    gameState.ghostMultiplier *= 2;
                    
                    ghost.setMode('eaten');
                    audio.play('ghostEaten');
                    
                    // Add score popup particle
                    addScorePopup(ghost.x + GRID_SIZE/2, ghost.y + GRID_SIZE/2, points);
                    
                } else if (ghost.mode !== 'eaten') {
                    // Pac-Man dies
                    pacmanDeath();
                }
            }
        });
    }
}

function activatePowerMode() {
    gameState.powerMode = true;
    gameState.powerModeTimer = POWER_MODE_DURATION;
    gameState.ghostMultiplier = 1;
    
    // Make all ghosts frightened
    ghosts.forEach(ghost => {
        if (ghost.mode !== 'eaten') {
            ghost.setMode('frightened');
        }
    });
}

function updatePowerMode() {
    if (gameState.powerMode) {
        gameState.powerModeTimer--;
        
        if (gameState.powerModeTimer <= 0) {
            gameState.powerMode = false;
            
            // Return ghosts to normal mode
            ghosts.forEach(ghost => {
                if (ghost.mode === 'frightened') {
                    ghost.mode = 'scatter';
                    ghost.modeTimer = 0;
                }
            });
        }
    }
}

function pacmanDeath() {
    gameState.lives--;
    audio.play('death');
    
    // Add death particles
    addParticles(pacman.x + GRID_SIZE/2, pacman.y + GRID_SIZE/2, '#FF0000', 12);
    
    if (gameState.lives <= 0) {
        gameOver();
    } else {
        // Reset positions
        pacman.reset();
        ghosts.forEach(ghost => ghost.reset());
        gameState.powerMode = false;
        gameState.powerModeTimer = 0;
    }
}

function nextLevel() {
    gameState.level++;
    
    // Reset maze
    maze = JSON.parse(JSON.stringify(originalMaze));
    dotsEaten = 0;
    
    // Reset positions
    pacman.reset();
    ghosts.forEach(ghost => ghost.reset());
    
    // Reset power mode
    gameState.powerMode = false;
    gameState.powerModeTimer = 0;
    
    // Bonus points for completing level
    gameState.score += gameState.level * 100;
    
    // Add level completion particles
    addParticles(canvas.width/2, canvas.height/2, '#00FF00', 20);
}

function gameOver() {
    gameState.gameOver = true;
    gameState.gameRunning = false;
    
    // Update high score
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('pacmanHighScore', gameState.highScore);
    }
    
    // Show game over message
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2 - 50);
    
    ctx.font = '24px Arial';
    ctx.fillText(`Final Score: ${gameState.score}`, canvas.width/2, canvas.height/2);
    ctx.fillText(`High Score: ${gameState.highScore}`, canvas.width/2, canvas.height/2 + 30);
    ctx.fillText('Click Start to Play Again', canvas.width/2, canvas.height/2 + 80);
    
    ctx.restore();
}

function addParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = 2 + Math.random() * 3;
        const velocity = {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed
        };
        
        particles.push(new Particle(x, y, color, velocity, 30 + Math.random() * 20));
    }
}

function addScorePopup(x, y, points) {
    const velocity = { x: 0, y: -1 };
    const particle = new Particle(x, y, '#FFFF00', velocity, 60);
    particle.text = points.toString();
    particle.render = function(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    };
    
    particles.push(particle);
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw maze
    drawMaze();
    
    // Draw entities
    pacman.render(ctx);
    ghosts.forEach(ghost => ghost.render(ctx));
    
    // Draw particles
    particles.forEach(particle => particle.render(ctx));
    
    // Draw power mode indicator
    if (gameState.powerMode) {
        drawPowerModeIndicator();
    }
    
    // Draw debug info if needed
    if (gameState.debug) {
        drawDebugInfo();
    }
}

function drawMaze() {
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            const x = col * GRID_SIZE;
            const y = row * GRID_SIZE;
            
            switch (maze[row][col]) {
                case 1: // Wall
                    ctx.fillStyle = '#0000FF';
                    ctx.fillRect(x, y, GRID_SIZE, GRID_SIZE);
                    
                    // Add wall border for better visibility
                    ctx.strokeStyle = '#4444FF';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, GRID_SIZE, GRID_SIZE);
                    break;
                    
                case 0: // Dot
                    ctx.fillStyle = '#FFFF88';
                    ctx.beginPath();
                    ctx.arc(x + GRID_SIZE/2, y + GRID_SIZE/2, 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                    
                case 2: // Power pellet
                    const pulseSize = 6 + Math.sin(gameState.frameCount * 0.2) * 2;
                    ctx.fillStyle = '#FFFFFF';
                    ctx.beginPath();
                    ctx.arc(x + GRID_SIZE/2, y + GRID_SIZE/2, pulseSize, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                    
                case 3: // Ghost house door
                    ctx.fillStyle = '#FF69B4';
                    ctx.fillRect(x, y + GRID_SIZE/2 - 2, GRID_SIZE, 4);
                    break;
            }
        }
    }
}

function drawPowerModeIndicator() {
    const timeLeft = gameState.powerModeTimer / POWER_MODE_DURATION;
    const barWidth = 200;
    const barHeight = 10;
    const x = (canvas.width - barWidth) / 2;
    const y = 20;
    
    // Background
    ctx.fillStyle = '#333333';
    ctx.fillRect(x, y, barWidth, barHeight);
    
    // Power bar
    const color = timeLeft > 0.3 ? '#00FF00' : '#FF0000';
    ctx.fillStyle = color;
    ctx.fillRect(x, y, barWidth * timeLeft, barHeight);
    
    // Border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, barWidth, barHeight);
    
    // Text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('POWER MODE', canvas.width/2, y - 5);
}

function drawDebugInfo() {
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '12px monospace';
    ctx.textAlign = 'left';
    
    const debugInfo = [
        `FPS: ${Math.round(1000 / (performance.now() - gameState.lastFrameTime))}`,
        `Pac-Man: (${Math.floor(pacman.x/GRID_SIZE)}, ${Math.floor(pacman.y/GRID_SIZE)})`,
        `Direction: ${pacman.direction}`,
        `Power Mode: ${gameState.powerMode ? 'ON' : 'OFF'}`,
        `Dots Eaten: ${dotsEaten}/${totalDots}`,
        `Ghost Modes: ${ghosts.map(g => g.mode).join(', ')}`
    ];
    
    debugInfo.forEach((info, index) => {
        ctx.fillText(info, 10, canvas.height - 100 + (index * 15));
    });
}

function updateUI() {
    scoreElement.textContent = gameState.score.toLocaleString();
    livesElement.textContent = gameState.lives;
    levelElement.textContent = gameState.level;
    
    // Update high score display if element exists
    const highScoreElement = document.getElementById('highScore');
    if (highScoreElement) {
        highScoreElement.textContent = gameState.highScore.toLocaleString();
    }
    
    // Update button states
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    
    if (gameState.gameOver) {
        startBtn.textContent = 'Start New Game';
        pauseBtn.disabled = true;
    } else if (gameState.gameRunning) {
        startBtn.textContent = 'Restart';
        pauseBtn.textContent = gameState.gamePaused ? 'Resume' : 'Pause';
        pauseBtn.disabled = false;
    } else {
        startBtn.textContent = 'Start Game';
        pauseBtn.disabled = true;
    }
}

// Utility functions
function getDistance(pos1, pos2) {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function gridToPixel(gridX, gridY) {
    return {
        x: gridX * GRID_SIZE,
        y: gridY * GRID_SIZE
    };
}

function pixelToGrid(pixelX, pixelY) {
    return {
        x: Math.floor(pixelX / GRID_SIZE),
        y: Math.floor(pixelY / GRID_SIZE)
    };
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    initGame();
});

// Handle window focus/blur for pause
window.addEventListener('blur', () => {
    if (gameState.gameRunning && !gameState.gamePaused) {
        togglePause();
    }
});

// Handle resize
window.addEventListener('resize', () => {
    // Could implement responsive canvas sizing here
});

// Export for debugging (if needed)
if (typeof window !== 'undefined') {
    window.gameState = gameState;
    window.pacman = pacman;
    window.ghosts = ghosts;
    window.toggleDebug = () => {
        gameState.debug = !gameState.debug;
    };
}
