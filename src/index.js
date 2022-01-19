const width = 768;
const height = 1024;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const v = {
  x: width / 2 - 68,
  y: height / 2,
  w: 17 * 4,
  h: 13 * 4,
};
let gravity = 0;
const velocity = 0.5;

const pipes = [];

let reqId = null;
const stop = () => {
  cancelAnimationFrame(reqId);
};

const render = () => {
  ctx.fillStyle = '#0af';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#000';
  ctx.fillRect(v.x, v.y, v.w, v.h);

  ctx.fillStyle = '#af0';
  pipes.forEach(({ x, y, w, h }) => {
    ctx.fillRect(x - w / 2, 0, w, y - h / 2);
    ctx.fillRect(x - w / 2, y + h / 2, w, height - (y + h / 2));
  });
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

    pipes.push({
      x: width,
      y: height / 2,
      w: 26 * 4,
      h: 65 * 4,
    });

    setInterval(() => {
      v.y += gravity;

      if (gravity <= 6) {
        gravity += velocity;
      }

      pipes.forEach((d) => {
        d.x = d.x - 1.2;
      });

      if (pipes[0].x - pipes[0].w / 2 <= v.x && pipes.length === 1) {
        pipes.push({
          x: width,
          y: height / 10 + 130 + Math.floor(Math.random() * 6) * (height / 10),
          w: 26 * 4,
          h: 65 * 4,
        });
      } else if (pipes[0].x + pipes[0].w / 2 <= 0) {
        pipes.shift();
      }
    }, 1000 / 100);
  }
  gravity = Math.min(gravity, -9) - 3;
};
