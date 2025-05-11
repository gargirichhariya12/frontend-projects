const STAR_COLOR = '#fff';
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW = 50;
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width, height, scale = window.devicePixelRatio || 1;
let stars = [];
let pointerX, pointerY;
let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
let isTouch = false;

function resize() {
    width = window.innerWidth * scale;
    height = window.innerHeight * scale;
    canvas.width = width;
    canvas.height = height;
    stars.forEach(placeStar);
}

function generateStars() {
    for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({ x: 0, y: 0, z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE) });
    }
}

function placeStar(star) {
  star.x = Math.random() * width;
  star.y = Math.random() * height;
}

function recycleStar(star) {
  star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
  const direction = ['left', 'right', 'top', 'bottom'][Math.floor(Math.random() * 4)];

    switch (direction) {
        case 'left':
            star.x = -OVERFLOW;
            star.y = Math.random() * height;
            break;
        case 'right':
            star.x = width + OVERFLOW;
            star.y = Math.random() * height;
            break;
        case 'top':
            star.x = Math.random() * width;
            star.y = -OVERFLOW;
            break;
        case 'bottom':
            star.x = Math.random() * width;
            star.y = height + OVERFLOW;
            break;
    }
}

function update() {
  velocity.tx *= 0.96;
  velocity.ty *= 0.96;
  velocity.x += (velocity.tx - velocity.x) * 0.8;
  velocity.y += (velocity.ty - velocity.y) * 0.8;

    stars.forEach(star => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;
        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
            star.x < -OVERFLOW || star.x > width + OVERFLOW ||
            star.y < -OVERFLOW || star.y > height + OVERFLOW
        ) {
            recycleStar(star);
            }
    }
    );
}

function render() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineWidth = STAR_SIZE * star.z * scale;
        ctx.globalAlpha = 0.5 + 0.5 * Math.random();
        ctx.strokeStyle = STAR_COLOR;

        const tailX = velocity.x * 2 || 0.5;
        const tailY = velocity.y * 2 || 0.5;

        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + tailX, star.y + tailY);
        ctx.stroke();
        }
    );
}

function step() {
    update();
    render();
    requestAnimationFrame(step);
}

function movePointer(x, y) {
    if (pointerX !== undefined && pointerY !== undefined) {
    velocity.tx += (x - pointerX) / 8 * scale * (isTouch ? 1 : -1);
    velocity.ty += (y - pointerY) / 8 * scale * (isTouch ? 1 : -1);
    }
    pointerX = x;
    pointerY = y;
}

canvas.onmousemove = e => {
    isTouch = false;
    movePointer(e.clientX, e.clientY);
};
canvas.ontouchmove = e => {
    isTouch = true;
    movePointer(e.touches[0].clientX, e.touches[0].clientY);
    e.preventDefault();
};
canvas.ontouchend = document.onmouseleave = () => {
    pointerX = pointerY = undefined;
};

window.onresize = resize;

generateStars();
resize();
step();
