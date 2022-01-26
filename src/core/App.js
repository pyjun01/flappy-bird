import { width, height } from './constant';
import Ground from './Ground';
import PipeFactory from './PipeFactory';
import Bird from './Bird';
import Button from './Button';

class App {
  FPS = 1000 / 144;

  constructor(images) {
    this.iamges = images;

    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.ground = new Ground(images.ground);
    this.pipes = new PipeFactory(images.pipe);
    this.bird = new Bird(images.bird, {
      x: width / 2 - 68,
      y: height / 2,
    });

    this.restartButton = new Button(this);

    this.reset();
  }

  reset() {
    this.score = 0;
    this.isStart = false;
    this.prevTime = 0;
    this.reqId = null;

    this.canvas.width = width;
    this.canvas.height = height;

    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = '48px sans-serif';

    this.reqId = window.requestAnimationFrame(this.animate);

    this.pipes.reset();
    this.bird.reset();

    this.eve();
  }

  eve() {
    this.canvas.addEventListener('click', this.gameStart);
    this.canvas.addEventListener('click', this.flyBird);
  }

  gameStart = () => {
    this.pipes.addPipe();

    this.isStart = true;

    this.canvas.removeEventListener('click', this.gameStart);
  };

  flyBird = () => {
    this.bird.updateGravity();
  };

  checkCollision() {
    if (this.bird.isDead) return false;

    if (this.ground.checkCollision(this.bird)) {
      return true;
    }

    return this.pipes.checkCollision(this.bird);
  }

  stop() {
    cancelAnimationFrame(this.reqId);
  }

  addScore = () => {
    this.score++;
  };

  animate = (t) => {
    this.reqId = window.requestAnimationFrame(this.animate);

    if (t > this.prevTime + this.FPS) {
      this.prevTime = t;

      this.isStart && this.update();
      this.render();

      if (this.bird.y - this.bird.h >= height) {
        this.stop();

        this.renderGameResult();
        return;
      }

      if (this.checkCollision()) {
        this.bird.dead();

        this.canvas.removeEventListener('click', this.flyBird);

        this.renderCrash();
      }
    }
  };

  update() {
    this.bird.update();

    if (this.bird.isDead) {
      return;
    }

    this.ground.update();

    this.pipes.update(this.addScore, this.bird.x);
  }

  renderGameResult() {
    this.restartButton.show();
  }

  renderCrash() {
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(0, 0, width, height);

    this.stop();
    setTimeout(() => {
      this.reqId = window.requestAnimationFrame(this.animate);
    }, 100);
  }

  render() {
    this.ctx.drawImage(this.iamges.background, 0, 0, width, height);

    this.pipes.render(this.ctx);
    this.ground.render(this.ctx);

    this.bird.render(this.ctx, { isStart: this.isStart });

    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(this.score, width / 2, height / 4);
  }
}

export default App;
