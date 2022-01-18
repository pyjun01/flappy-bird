const width = 768;
const height = 1024;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const v = {
  x: 184,
  y: height / 2,
  w: 17 * 4,
  h: 13 * 4,
};
let gravity = 0;
const velocity = 0.5;

let reqId = null;
const stop = () => {
  cancelAnimationFrame(reqId);
};

const render = () => {
  ctx.fillStyle = '#0af';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#000';
  ctx.fillRect(v.x, v.y, v.w, v.h);
};

const FPS = 1000 / 60;
let p = 0;
const animate = (t) => {
  if (t > p + FPS) {
    p = t;

    render();

    if (v.y + v.h >= height - 80) {
      return;
    }
  }

  window.requestAnimationFrame(animate);
};

render();

canvas.onclick = () => {
  if (reqId === null) {
    reqId = requestAnimationFrame(animate);

    setInterval(() => {
      v.y += gravity;

      if (gravity <= 6) {
        gravity += velocity;
      }
    }, 1000 / 100);
  }
  gravity = Math.min(gravity, -9) - 3;
};
