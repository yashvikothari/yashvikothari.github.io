// Ghost AI implementation with different behaviors
class Ghost {
    constructor(x, y, color, behavior, name) {
        this.startX = x;
        this.startY = y;
        this.x = x;
        this.y = y;
        this.color = color;
        this.behavior = behavior;
        this.name = name;
        this.direction = 'up';
        this.speed = 1.5;
        this.mode = 'scatter'; // scatter, chase, frightened, eaten
        this.modeTimer = 0;
        this.target = { x: 0, y: 0 };
        this.scatterTarget = { x: 0, y: 0 };
        this.inHouse = true;
        this.exitTimer = 0;
        this.animFrame = 0;
        
        // Set scatter targets (corners of maze)
        switch (name) {
            case 'blinky':
                this.scatterTarget = { x: 35, y: 0 };
                this.inHouse = false; // Blinky starts outside
                break;
            case 'pinky':
                this.scatterTarget = { x: 2, y: 0 };
                this.exitTimer = 60; // 1 second
                break;
            case 'inky':
                this.scatterTarget = { x: 35, y: 25 };
                this.exitTimer = 180; // 3 seconds
                break;
            case 'clyde':
                this.scatterTarget = { x: 2, y: 25 };
                this.exitTimer = 300; // 5 seconds
                break;
        }
    }
    
    update(pacmanPos, blinkyPos) {
        this.animFrame++;
        
        // Handle house exit
        if (this.inHouse) {
            this.exitTimer--;
            if (this.exitTimer <= 0) {
                this.inHouse = false;
                this.x = 19 * GRID_SIZE;
                this.y = 9 * GRID_SIZE;
            } else {
                return; // Don't move while in house
            }
        }
        
        // Update mode timer
        this.modeTimer++;
        
        // Mode switching logic
        if (this.mode === 'scatter' && this.modeTimer > 420) { // 7 seconds
            this.mode = 'chase';
            this.modeTimer = 0;
        } else if (this.mode === 'chase' && this.modeTimer > 1200) { // 20 seconds
            this.mode = 'scatter';
            this.modeTimer = 0;
        }
        
        // Handle frightened mode
        if (this.mode === 'frightened') {
            this.speed = 0.75; // Slower when frightened
        } else if (this.mode === 'eaten') {
            this.speed = 3; // Fast return to house
        } else {
            this.speed = 1.5 + (gameState.level - 1) * 0.1; // Increase speed with level
        }
        
        // Set target based on mode and behavior
        this.updateTarget(pacmanPos, blinkyPos);
        
        // Move towards target
        this.move();
        
        // Handle tunnel (side wrapping)
        if (this.x < 0) this.x = canvas.width - GRID_SIZE;
        if (this.x >= canvas.width) this.x = 0;
    }
    
    updateTarget(pacmanPos, blinkyPos) {
        switch (this.mode) {
            case 'scatter':
                this.target = this.scatterTarget;
                break;
                
            case 'chase':
                switch (this.behavior) {
                    case 'aggressive': // Blinky - direct chase
                        this.target = {
                            x: Math.floor(pacmanPos.x / GRID_SIZE),
                            y: Math.floor(pacmanPos.y / GRID_SIZE)
                        };
                        break;
                        
                    case 'ambush': // Pinky - 4 tiles ahead of Pac-Man
                        let offsetX = 0, offsetY = 0;
                        switch (pacman.direction) {
                            case 'up': offsetY = -4; break;
                            case 'down': offsetY = 4; break;
                            case 'left': offsetX = -4; break;
                            case 'right': offsetX = 4; break;
                        }
                        this.target = {
                            x: Math.floor(pacmanPos.x / GRID_SIZE) + offsetX,
                            y: Math.floor(pacmanPos.y / GRID_SIZE) + offsetY
                        };
                        break;
                        
                    case 'patrol': // Inky - complex targeting
                        if (blinkyPos) {
                            const pacGridX = Math.floor(pacmanPos.x / GRID_SIZE);
                            const pacGridY = Math.floor(pacmanPos.y / GRID_SIZE);
                            const blinkyGridX = Math.floor(blinkyPos.x / GRID_SIZE);
                            const blinkyGridY = Math.floor(blinkyPos.y / GRID_SIZE);
                            
                            // Vector from Blinky to 2 tiles ahead of Pac-Man, then double it
                            let targetX = pacGridX;
                            let targetY = pacGridY;
                            
                            switch (pacman.direction) {
                                case 'up': targetY -= 2; break;
                                case 'down': targetY += 2; break;
                                case 'left': targetX -= 2; break;
                                case 'right': targetX += 2; break;
                            }
                            
                            this.target = {
                                x: targetX + (targetX - blinkyGridX),
                                y: targetY + (targetY - blinkyGridY)
                            };
                        } else {
                            this.target = this.scatterTarget;
                        }
                        break;
                        
                    case 'random': // Clyde - chase if far, scatter if close
                        const distance = this.getDistance(pacmanPos);
                        if (distance > 8 * GRID_SIZE) {
                            this.target = {
                                x: Math.floor(pacmanPos.x / GRID_SIZE),
                                y: Math.floor(pacmanPos.y / GRID_SIZE)
                            };
                        } else {
                            this.target = this.scatterTarget;
                        }
                        break;
                }
                break;
                
            case 'frightened':
                // Random movement when frightened
                this.target = {
                    x: Math.floor(Math.random() * 40),
                    y: Math.floor(Math.random() * 22)
                };
                break;
                
            case 'eaten':
                // Return to ghost house
                this.target = { x: 19, y: 11 };
                break;
        }
    }
    
    move() {
        const currentGridX = Math.floor((this.x + GRID_SIZE/2) / GRID_SIZE);
        const currentGridY = Math.floor((this.y + GRID_SIZE/2) / GRID_SIZE);
        
        // Check if we're at grid center (can change direction)
        const atGridCenter = (this.x % GRID_SIZE === 0) && (this.y % GRID_SIZE === 0);
        
        if (atGridCenter) {
            const possibleDirections = this.getPossibleDirections(currentGridX, currentGridY);
            
            if (possibleDirections.length > 0) {
                // Choose best direction towards target
                let bestDirection = possibleDirections[0];
                let bestDistance = Infinity;
                
                for (const dir of possibleDirections) {
                    const distance = this.getDirectionDistance(currentGridX, currentGridY, dir);
                    if (distance < bestDistance) {
                        bestDistance = distance;
                        bestDirection = dir;
                    }
                }
                
                this.direction = bestDirection;
            }
        }
        
        // Move in current direction
        switch (this.direction) {
            case 'up': this.y -= this.speed; break;
            case 'down': this.y += this.speed; break;
            case 'left': this.x -= this.speed; break;
            case 'right': this.x += this.speed; break;
        }
        
        // Snap to grid to prevent drift
        if (Math.abs(this.x % GRID_SIZE) < 0.5) this.x = Math.round(this.x / GRID_SIZE) * GRID_SIZE;
        if (Math.abs(this.y % GRID_SIZE) < 0.5) this.y = Math.round(this.y / GRID_SIZE) * GRID_SIZE;
    }
    
    getPossibleDirections(gridX, gridY) {
        const directions = [];
        const opposite = this.getOppositeDirection(this.direction);
        
        // Check each direction
        if (this.canMove(gridX, gridY - 1) && 'up' !== opposite) directions.push('up');
        if (this.canMove(gridX, gridY + 1) && 'down' !== opposite) directions.push('down');
        if (this.canMove(gridX - 1, gridY) && 'left' !== opposite) directions.push('left');
        if (this.canMove(gridX + 1, gridY) && 'right' !== opposite) directions.push('right');
        
        // If no valid directions (shouldn't happen), allow reverse
        if (directions.length === 0) {
            if (this.canMove(gridX, gridY - 1)) directions.push('up');
            if (this.canMove(gridX, gridY + 1)) directions.push('down');
            if (this.canMove(gridX - 1, gridY)) directions.push('left');
            if (this.canMove(gridX + 1, gridY)) directions.push('right');
        }
        
        return directions;
    }
    
    canMove(gridX, gridY) {
        // Handle tunnel
        if (gridX < 0 || gridX >= maze[0].length) return true;
        if (gridY < 0 || gridY >= maze.length) return false;
        
        const cell = maze[gridY][gridX];
        return cell !== 1; // Not a wall
    }
    
    getDirectionDistance(gridX, gridY, direction) {
        let newX = gridX;
        let newY = gridY;
        
        switch (direction) {
            case 'up': newY--; break;
            case 'down': newY++; break;
            case 'left': newX--; break;
            case 'right': newX++; break;
        }
        
        const dx = newX - this.target.x;
        const dy = newY - this.target.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    getOppositeDirection(direction) {
        switch (direction) {
            case 'up': return 'down';
            case 'down': return 'up';
            case 'left': return 'right';
            case 'right': return 'left';
            default: return 'up';
        }
    }
    
    getDistance(pos) {
        const dx = this.x - pos.x;
        const dy = this.y - pos.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    setMode(mode) {
        if (mode === 'frightened' && this.mode !== 'eaten') {
            this.mode = mode;
            this.modeTimer = 0;
            this.direction = this.getOppositeDirection(this.direction);
        } else if (mode === 'eaten') {
            this.mode = mode;
            this.modeTimer = 0;
        }
    }
    
    reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.direction = 'up';
        this.mode = 'scatter';
        this.modeTimer = 0;
        this.inHouse = this.name !== 'blinky';
        
        // Reset exit timers
        switch (this.name) {
            case 'pinky': this.exitTimer = 60; break;
            case 'inky': this.exitTimer = 180; break;
            case 'clyde': this.exitTimer = 300; break;
        }
    }
    
    render(ctx) {
        const centerX = this.x + GRID_SIZE/2;
        const centerY = this.y + GRID_SIZE/2;
        const radius = GRID_SIZE/2 - 2;
        
        // Don't render if in house
        if (this.inHouse) return;
        
        // Ghost body color
        let bodyColor = this.color;
        if (this.mode === 'frightened') {
            bodyColor = Math.floor(this.animFrame / 10) % 2 ? '#0000FF' : '#FFFFFF';
        } else if (this.mode === 'eaten') {
            bodyColor = '#444444';
        }
        
        // Ghost body (rounded rectangle)
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.arc(centerX, centerY - radius/2, radius, Math.PI, 0);
        ctx.rect(centerX - radius, centerY - radius/2, radius * 2, radius * 1.5);
        
        // Ghost bottom (wavy)
        const waveHeight = 4;
        const waveWidth = radius / 2;
        for (let i = 0; i < 4; i++) {
            const waveX = centerX - radius + (i * waveWidth);
            const waveY = centerY + radius/2 + (i % 2 === 0 ? waveHeight : -waveHeight);
            if (i === 0) {
                ctx.lineTo(waveX, waveY);
            } else {
                ctx.lineTo(waveX, waveY);
            }
        }
        ctx.lineTo(centerX + radius, centerY + radius/2);
        ctx.closePath();
        ctx.fill();
        
        // Eyes
        if (this.mode !== 'eaten') {
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(centerX - 4, centerY - 4, 3, 0, Math.PI * 2);
            ctx.arc(centerX + 4, centerY - 4, 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Eye pupils
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            
            // Pupils look in movement direction
            let pupilOffsetX = 0, pupilOffsetY = 0;
            switch (this.direction) {
                case 'up': pupilOffsetY = -1; break;
                case 'down': pupilOffsetY = 1; break;
                case 'left': pupilOffsetX = -1; break;
                case 'right': pupilOffsetX = 1; break;
            }
            
            ctx.arc(centerX - 4 + pupilOffsetX, centerY - 4 + pupilOffsetY, 1.5, 0, Math.PI * 2);
            ctx.arc(centerX + 4 + pupilOffsetX, centerY - 4 + pupilOffsetY, 1.5, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Just eyes for eaten ghost
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(centerX - 4, centerY - 4, 2, 0, Math.PI * 2);
            ctx.arc(centerX + 4, centerY - 4, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
