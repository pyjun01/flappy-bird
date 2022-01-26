class Pipe {
  w = 26 * 4;
  h = 65 * 4;
  velocity = 6;
  pass = false;

  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  checkPass(birdX) {
    return !this.pass && this.x < birdX;
  }

  update() {
    this.x = this.x - 6;
  }

  render(ctx, image) {
    ctx.rotate((180 * Math.PI) / 180);
    ctx.drawImage(image, -this.x - this.w, -this.y, this.w, 597.6231884058);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(image, this.x, this.y + this.h, this.w, 597.6231884058);
  }
}

export default Pipe;
