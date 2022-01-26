import { width, height } from './constant';

class Ground {
  w = width / 30;
  h = 80;
  x = 0;
  y = height - this.h;
  renderCount = 0;

  constructor(image) {
    this.image = image;
  }

  checkCollision(bird) {
    return bird.y + bird.h > this.y;
  }

  update() {
    this.x -= 6;
  }

  render(ctx) {
    ctx.translate(this.x % this.w, 0);

    for (let i = 0; i < 31; i++) {
      ctx.drawImage(this.image, this.w * i, this.y, this.w, this.h);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.renderCount++;
  }
}

export default Ground;
