import background from './img/background.png';
import bird from './img/bird.png';
import ground from './img/ground.png';
import pipe from './img/pipe.png';
import { loadImage } from './util';
import App from './core/App';

const init = async () => {
  const images = {};

  images.background = await loadImage(background);
  images.bird = await loadImage(bird);
  images.ground = await loadImage(ground);
  images.pipe = await loadImage(pipe);

  new App(images);
};

window.onload = init;
