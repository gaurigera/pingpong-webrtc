const canvas = document.getElementById("pong-table")
const context = canvas.getContext("2d")

function drawRect(x, y, h, w, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h)
}

function drawCircle(x, y, r, color) {
    context.fillStyle = color
    context.beginPath()
    context.arc(x, y, r, Math.PI * 2, false)
    context.fill()
    context.closePath()
}

function drawNet(x, y, w, h, color) {
    for (let i = 0; i <= canvas.height; i += 15) {
        drawRect(x, y + i, h, w, color)
    }
}
const user1 = {
    x: 0,
    y: canvas.height / 2 - 120 / 2,
    width: 12,
    height: 120,
    color: "BLACK",
    score: 0
}

const user2 = {
    x: canvas.width - 12,
    y: canvas.height / 2 - 120 / 2,
    width: 12,
    height: 120,
    color: "BLACK",
    score: 0
}

const net = {
    x: canvas.width / 2 - 1.5,
    y: 0,
    width: 3,
    height: 12,
    color: "RED"
}
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: 20,
    velX: 5,
    velY: 5,
    speed: 6,
    color: "GREEN"
}
function draw() {
    drawRect(0, 0, canvas.height, canvas.width, "WHITE")
    drawRect(user1.x, user1.y, user1.height, user1.width, user1.color)
    drawRect(user2.x, user2.y, user2.height, user2.width, user2.color)
    drawNet(net.x, net.y, net.width, net.height, net.color)
    drawCircle(ball.x, ball.y, ball.r, ball.color)
}

function updateBall() {
    ball.x += ball.velX; ball.y += ball.velY;
    if (ball.y + ball.r == canvas.height || ball.y - ball.r <= 0) {
        ball.velY = -ball.velY;
    }
    let player = (ball.x < canvas.width / 2) ? user1 : user2;
    if (collision(ball, player)) {

    }
}
function render() {
    updateBall();
    draw();
}
function collision(b, p) {
    top = p.y;
    left = p.x;
    right = p.x + p.width;
    bottom = p.y + p.height;

    topb = b.y - b.r;
    bottomb = b.y + b.r;
    leftb = b.x - b.r;
    rightb = b.x + b.r;

    if (rightb > left)
        return true
    else if (leftb < right)
        return true
    else if (topb < bottom)
        return true
    else if (bottomb > top)
        return true

}
const framesPerSec = 5;
setInterval(render, 1000 / framesPerSec)