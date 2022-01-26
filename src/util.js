export const loadImage = (src) =>
  new Promise((res) => {
    const img = new Image();
    img.onload = () => res(img);
    img.src = src;
  });
