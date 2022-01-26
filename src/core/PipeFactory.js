import { width, height } from './constant';
import Pipe from './Pipe';

class PipeFactory {
  pipes = [];

  constructor(image) {
    this.image = image;
  }

  reset() {
    this.pipes.length = 0;
  }

  addPipe() {
    this.pipes.push(
      new Pipe({
        x: width,
        y: 130 + (Math.floor(Math.random() * 4) + 1) * (height / 10),
      })
    );
  }

  checkCollision(bird) {
    return this.pipes.some(
      ({ x, y, w, h }) =>
        ((x < bird.x + bird.w && bird.x + bird.w <= x + w) ||
          (x < bird.x && bird.x <= x + w)) &&
        (bird.y < y || y + h < bird.y + bird.h)
    );
  }

  update(addScore, birdX) {
    this.pipes.forEach((pipe) => {
      pipe.update();

      if (pipe.checkPass(birdX)) {
        pipe.pass = true;
        addScore();
        this.addPipe();
      }
    });

    if (this.pipes[0].x + this.pipes[0].w <= 0) {
      this.pipes.shift();
    }
  }

  render(ctx) {
    this.pipes.forEach((pipe) => pipe.render(ctx, this.image));
  }
}

export default PipeFactory;
