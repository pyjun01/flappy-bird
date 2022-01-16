const width = 768;
const height = 1024;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

ctx.fillStyle = '#0af';
ctx.fillRect(0, 0, width, height);
