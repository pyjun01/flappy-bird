import background from './img/background.png';
import bird from './img/bird.png';
import ground from './img/ground.png';
import pipe from './img/pipe.png';

const imageSrcs = {
  background,
  bird,
  ground,
  pipe,
};

const loadImage = (src) =>
  new Promise((res) => {
    const img = new Image();
    img.onload = () => res(img);
    img.src = src;
  });
(async () => {
  let images = {};

  images.background = await loadImage(imageSrcs.background);
  images.bird = await loadImage(imageSrcs.bird);
  images.ground = await loadImage(imageSrcs.ground);
  images.pipe = await loadImage(imageSrcs.pipe);

  console.log(imageSrcs, images);

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
  let gravity = -6;
  const velocity = 0.5;

  const pipes = [];

  let score = 0;

  let reqId = null;
  const stop = () => {
    cancelAnimationFrame(reqId);
  };

  ctx.textAlign = 'center';
  ctx.font = '48px sans-serif';

  let frameCount = 0;

  const render = () => {
    // ctx.fillStyle = '#0af';
    // ctx.fillRect(0, 0, width, height);
    ctx.drawImage(images.background, 0, 0, width, height);

    // ctx.fillStyle = '#000';
    // ctx.fillRect(v.x, v.y, v.w, v.h);
    ctx.drawImage(
      images.bird,
      ((Math.floor(frameCount / 8) % 3) * images.bird.naturalWidth) / 3,
      0,
      images.bird.naturalWidth / 3,
      images.bird.naturalHeight,
      v.x,
      v.y,
      v.w,
      v.h
    );

    ctx.fillStyle = '#af0';
    pipes.forEach(({ x, y, w, h }) => {
      // ctx.fillRect(x, 0, w, y);
      // ctx.fillRect(x, y + h, w, height - (y + h));
      ctx.rotate((180 * Math.PI) / 180);
      ctx.drawImage(images.pipe, -x - w, -y, w, 597.6231884058);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(images.pipe, x, y + h, w, 597.6231884058);
    });

    // ctx.fillStyle = '#fa0';
    // ctx.fillRect(0, height - 80, width, 80);
    const w = width / 30;
    for (let i = 0; i < 31; i++) {
      ctx.drawImage(images.ground, w * i - frameCount, height - 80, w, 80);
    }

    ctx.fillStyle = '#fff';
    ctx.fillText(score, width / 2, height / 4);
  };

  const renderGameResult = () => {};

  const update = () => {
    v.y += gravity;

    if (gravity <= 6) {
      gravity += velocity;
    }

    pipes.forEach((d) => {
      d.x = d.x - 1.2;

      if (!d.pass && d.x < v.x) {
        d.pass = true;
        score++;
      }
    });

    if (pipes[0].x - pipes[0].w / 2 <= v.x && pipes.length === 1) {
      pipes.push({
        x: width,
        y: 130 + (Math.floor(Math.random() * 4) + 1) * (height / 10),
        w: 26 * 4,
        h: 65 * 4,
      });
    } else if (pipes[0].x + pipes[0].w <= 0) {
      pipes.shift();
    }
  };

  const FPS = 1000 / 144;
  let p = 0;

  let start = false;
  const animate = (t) => {
    reqId = window.requestAnimationFrame(animate);

    console.log('animate');
    if (t > p + FPS) {
      console.log('real');
      p = t;

      frameCount++;

      if (frameCount >= width / 30) {
        frameCount = 0;
      }

      start && update();
      render();

      if (checkCollision()) {
        stop();

        renderGameResult();
        return;
      }
    }
  };

  render();

  const checkCollision = () => {
    if (v.y + v.h >= height - 80) {
      return true;
    }

    return pipes.some(
      ({ x, y, w, h }) =>
        ((x < v.x + v.w && v.x + v.w <= x + w) || (x < v.x && v.x <= x + w)) &&
        (v.y <= y || y + h <= v.y + v.h)
    );
  };

  canvas.onclick = () => {
    if (pipes.length === 0) {
      pipes.push({
        x: width + 26 * 4,
        y: height / 2 - 65 * 2,
        w: 26 * 4,
        h: 65 * 4,
      });

      start = true;
    }

    gravity = Math.min(gravity, -9) - 3;
  };

  reqId = window.requestAnimationFrame(animate);
})();
