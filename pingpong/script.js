const gameArea = document.getElementById('gameArea');
let snake = [{x: 200, y: 200}];
let food = {x: 0, y: 0};
let direction = 'top';
let intervalId;

function startGame() {
    createFood();
    intervalId = setInterval(moveSnake, 50);
    document.addEventListener('keydown', changeDirection);
}

function createFood() {
    food.x = Math.floor(Math.random() * 40) * 10;
    food.y = Math.floor(Math.random() * 40) * 10;
    
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.left = `${food.x}px`;
    foodElement.style.top = `${food.y}px`;
    gameArea.appendChild(foodElement);
}

function moveSnake() {
    const head = {x: snake[0].x, y: snake[0].y};

    switch (direction) {
        case 'up':
            head.y -= 10;
            break;
        case 'down':
            head.y += 10;
            break;
        case 'left':
            head.x -= 10;
            break;
        case 'right':
            head.x += 10;
            break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        eatFood();
    } else {
        snake.pop();
    }

    if (checkCollision()) {
        clearInterval(intervalId);
        alert('Game Over! Your score: ' + (snake.length - 1));
    }

    renderSnake();
}

function eatFood() {
    // Remover o elemento da comida do DOM
    const foodElement = document.querySelector('.food');
    foodElement.remove();

    // Criar uma nova comida
    createFood();
}
function renderSnake() {
    const snakeElements = document.querySelectorAll('.snake');
    snakeElements.forEach(element => element.remove());

    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.left = `${segment.x}px`;
        snakeElement.style.top = `${segment.y}px`;
        gameArea.appendChild(snakeElement);
    });
}

function changeDirection(event) {
    const key = event.keyCode;
    switch (key) {
        case 37:
            if (direction !== 'right') direction = 'left';
            break;
        case 38:
            if (direction !== 'down') direction = 'up';
            break;
        case 39:
            if (direction !== 'left') direction = 'right';
            break;
        case 40:
            if (direction !== 'up') direction = 'down';
            break;
    }
}

function checkCollision() {
    const head = snake[0];

    if (head.x < 0 || head.x >= "100%" || head.y < 0 || head.y >= "100%") {
        return true; // Collision with walls
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true; // Collision with self
        }
    }

    return false;
}

startGame();