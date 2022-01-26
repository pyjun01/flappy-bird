import { width, height } from './constant';

class Bird {
  w = 17 * 4;
  h = 13 * 4;
  velocity = 0.6;
  gravity = -6;
  maxGravity = 10;
  curvePoint = 7;
  isDead = false;

  constructor(image, { x, y, w, h }) {
    this.image = image;

    this.x = x;
    this.y = y;
    this.w = w || this.w;
    this.h = h || this.h;
  }

  reset() {
    this.x = width / 2 - 68;
    this.y = height / 2;
    this.isDead = false;
    this.velocity = 0.6;
    this.gravity = -6;
    this.curveCount = 0;
  }

  dead() {
    this.isDead = true;
  }

  updateGravity() {
    this.gravity = Math.min(this.gravity, -this.maxGravity + 1) - 3;
    this.curveCount = 0;
  }

  getDirection() {
    if (this.gravity >= this.curvePoint) {
      if (this.curveCount < 90) {
        this.curveCount += 6;
      }

      return this.curveCount;
    }

    return -20;
  }

  update() {
    if (this.isDead) {
      this.gravity = this.maxGravity + 2;

      this.y += this.gravity;

      return;
    }

    this.y += this.gravity;

    if (this.gravity > this.maxGravity) {
      this.gravity = this.maxGravity;
      return;
    }

    this.gravity += this.velocity;
  }

  render(ctx, { isStart }) {
    const direction = isStart ? this.getDirection() : 0;

    ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
    ctx.rotate((direction * Math.PI) / 180);

    const idx = this.isDead
      ? 0
      : Math.floor((Math.sin(window.performance.now() / 200) + 1) / (2 / 3));

    ctx.drawImage(
      this.image,
      (idx * this.image.naturalWidth) / 3,
      0,
      this.image.naturalWidth / 3,
      this.image.naturalHeight,
      -this.w / 2,
      -this.h / 2,
      this.w,
      this.h
    );

    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}

export default Bird;
