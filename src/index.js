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

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  const width = (canvas.width = 768);
  const height = (canvas.height = 1024);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '48px sans-serif';

  const FPS = 1000 / 144;
  let p = 0;

  let start = false;
  let dead = false;
  let reqId = null;
  let score = 0;

  let gravity = -6;
  const velocity = 0.6;
  const maxGravity = 10;

  const curvePoint = 7;
  let curveCount = 0;

  const v = {
    x: width / 2 - 68,
    y: height / 2,
    w: 17 * 4,
    h: 13 * 4,
  };

  const pipes = [];

  const stop = () => {
    cancelAnimationFrame(reqId);
  };

  const getDirection = () => {
    if (gravity >= curvePoint) {
      if (curveCount < 90) {
        curveCount += 6;
      }

      return curveCount;
    }

    return -20;
  };

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

  let renderCount = 0;

  const render = () => {
    ctx.drawImage(images.background, 0, 0, width, height);

    ctx.fillStyle = '#af0';
    pipes.forEach(({ x, y, w, h }) => {
      ctx.rotate((180 * Math.PI) / 180);
      ctx.drawImage(images.pipe, -x - w, -y, w, 597.6231884058);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(images.pipe, x, y + h, w, 597.6231884058);
    });

    const w = width / 30;
    ctx.translate(-(renderCount % 6) * 6, 0);
    for (let i = 0; i < 31; i++) {
      ctx.drawImage(images.ground, w * i, height - 80, w, 80);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // bird
    const direction = getDirection();
    ctx.translate(v.x + v.w / 2, v.y + v.h / 2);

    if (start) {
      ctx.rotate((direction * Math.PI) / 180);
    }

    let curr = dead
      ? 0
      : Math.floor((Math.floor(window.performance.now() / 10) % 100) / 25);

    ctx.drawImage(
      images.bird,
      ((curr + (curr === 3 ? -2 : 0)) * images.bird.naturalWidth) / 3,
      0,
      images.bird.naturalWidth / 3,
      images.bird.naturalHeight,
      -v.w / 2,
      -v.h / 2,
      v.w,
      v.h
    );
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.fillStyle = '#fff';
    ctx.fillText(score, width / 2, height / 4);

    !dead && renderCount++;
  };

  const blink = () => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);
  };

  const renderGameResult = () => {
    ctx.fillStyle = '#e86102';

    const w = 150;
    const h = 60;

    const startPoint = [width / 2 - w / 2, height / 2 - h / 2 - 3];

    ctx.fillRect(startPoint[0], startPoint[1], w, h);

    ctx.fillStyle = '#fff';
    ctx.font = '32px sans-serif';
    ctx.fillText('RESTART', width / 2, height / 2);

    const onMousemove = (e) => {
      const bound = ctx.canvas.getBoundingClientRect();
      const x =
        ((e.pageX - bound.left) * ctx.canvas.width) / ctx.canvas.clientWidth;
      const y =
        ((e.pageY - bound.top) * ctx.canvas.height) / ctx.canvas.clientHeight;

      if (
        startPoint[0] < x &&
        x < startPoint[0] + w &&
        startPoint[1] < y &&
        y < startPoint[1] + h
      ) {
        ctx.canvas.style.cursor = 'pointer';
      } else {
        ctx.canvas.style.cursor = 'auto';
      }
    };

    const onClick = (e) => {
      const bound = ctx.canvas.getBoundingClientRect();
      const x =
        ((e.pageX - bound.left) * ctx.canvas.width) / ctx.canvas.clientWidth;
      const y =
        ((e.pageY - bound.top) * ctx.canvas.height) / ctx.canvas.clientHeight;

      if (
        startPoint[0] < x &&
        x < startPoint[0] + w &&
        startPoint[1] < y &&
        y < startPoint[1] + h
      ) {
        ctx.canvas.style.cursor = 'auto';

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '48px sans-serif';

        start = false;
        dead = false;
        score = 0;
        gravity = -6;
        curveCount = 0;

        v.x = width / 2 - 68;
        v.y = height / 2;
        v.w = 17 * 4;
        v.h = 13 * 4;

        pipes.length = 0;

        reqId = window.requestAnimationFrame(animate);

        ctx.canvas.removeEventListener('mousemove', onMousemove);
        ctx.canvas.removeEventListener('click', onClick);
        ctx.canvas.addEventListener('click', onCanvasClick);
      }
    };

    ctx.canvas.addEventListener('mousemove', onMousemove);

    ctx.canvas.addEventListener('click', onClick);
  };

  const update = () => {
    if (dead) {
      gravity = maxGravity + 2;

      v.y += gravity;

      return;
    }

    v.y += gravity;

    gravity < maxGravity ? (gravity += velocity) : (gravity = maxGravity);

    pipes.forEach((d) => {
      d.x = d.x - 6;

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

  const animate = (t) => {
    reqId = window.requestAnimationFrame(animate);

    if (t > p + FPS) {
      p = t;

      start && update();
      render();

      if (v.y >= height + v.h) {
        stop();

        renderGameResult();
        return;
      }

      if (!dead && checkCollision()) {
        dead = true;

        canvas.removeEventListener('click', onCanvasClick);

        blink();
        stop();

        setTimeout(() => {
          reqId = window.requestAnimationFrame(animate);
        }, 100);
      }
    }
  };

  const onCanvasClick = () => {
    if (pipes.length === 0) {
      pipes.push({
        x: width + 26 * 4,
        y: height / 2 - 65 * 2,
        w: 26 * 4,
        h: 65 * 4,
      });

      start = true;
    }

    gravity = Math.min(gravity, -maxGravity + 1) - 3;
    curveCount = 0;
  };

  canvas.addEventListener('click', onCanvasClick);

  reqId = window.requestAnimationFrame(animate);
})();
