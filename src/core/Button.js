import { width, height } from './constant';

class Button {
  w = 150;
  h = 60;
  x = width / 2 - this.w / 2;
  y = height / 2 - this.h / 2 - 3;
  text = 'RESTART';
  visible = false;

  constructor(app) {
    this.app = app;
  }

  toggle() {
    this.visible = !this.visible;
  }

  isEnter = (e) => {
    const { canvas } = this.app;

    const bound = canvas.getBoundingClientRect();
    const x = ((e.pageX - bound.left) * canvas.width) / canvas.clientWidth;
    const y = ((e.pageY - bound.top) * canvas.height) / canvas.clientHeight;

    return (
      this.x < x && x < this.x + this.w && this.y < y && y < this.y + this.h
    );
  };

  onMousemove = (e) => {
    this.app.canvas.style.cursor = this.isEnter(e) ? 'pointer' : 'auto';
  };

  onClick = (e) => {
    if (this.isEnter(e)) {
      document.querySelector('canvas').style = '';
      this.app.canvas.removeEventListener('mousemove', this.onMousemove);
      this.app.ctx.canvas.removeEventListener('click', this.onClick);

      this.app.reset();
    }
  };

  show() {
    this.app.canvas.addEventListener('mousemove', this.onMousemove);
    this.app.canvas.addEventListener('click', this.onClick);

    this.render();
  }

  render() {
    this.app.ctx.fillStyle = '#e86102';
    this.app.ctx.fillRect(this.x, this.y, this.w, this.h);

    this.app.ctx.fillStyle = '#fff';
    this.app.ctx.font = '32px sans-serif';
    this.app.ctx.fillText(this.text, width / 2, height / 2);
  }
}

export default Button;
