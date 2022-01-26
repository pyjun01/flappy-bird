const width = 768;
const height = 1024;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
const v = {
    x: width / 2 - 68,
    y: height / 2,
    w: 68,
    h: 52
};
let gravity = 0;
const velocity = 0.5;
const pipes = [];
let score = 0;
let reqId = null;
const stop = ()=>{
    cancelAnimationFrame(reqId);
};
ctx.textAlign = 'center';
ctx.font = '48px sans-serif';
const render = ()=>{
    ctx.fillStyle = '#0af';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#000';
    ctx.fillRect(v.x, v.y, v.w, v.h);
    ctx.fillStyle = '#af0';
    pipes.forEach(({ x , y , w , h  })=>{
        ctx.fillRect(x, 0, w, y);
        ctx.fillRect(x, y + h, w, height - (y + h));
    });
    ctx.fillStyle = '#fa0';
    ctx.fillRect(0, height - 80, width, 80);
    ctx.fillStyle = '#fff';
    ctx.fillText(score, width / 2, height / 4);
};
const update = ()=>{
    v.y += gravity;
    if (gravity <= 6) gravity += velocity;
    pipes.forEach((d)=>{
        d.x = d.x - 1.2;
        if (!d.pass && d.x < v.x) {
            d.pass = true;
            score++;
        }
    });
    if (pipes[0].x - pipes[0].w / 2 <= v.x && pipes.length === 1) pipes.push({
        x: width,
        y: 130 + (Math.floor(Math.random() * 4) + 1) * (height / 10),
        w: 104,
        h: 260
    });
    else if (pipes[0].x + pipes[0].w <= 0) pipes.shift();
};
const FPS = 1000 / 144;
let p = 0;
const animate = (t)=>{
    console.log('animate');
    if (t > p + FPS) {
        console.log('real');
        p = t;
        update();
        render();
        if (checkCollision()) return;
    }
    window.requestAnimationFrame(animate);
};
render();
const checkCollision = ()=>{
    if (v.y + v.h >= height - 80) return true;
    return pipes.some(({ x , y , w , h  })=>(x < v.x + v.w && v.x + v.w <= x + w || x < v.x && v.x <= x + w) && (v.y <= y || y + h <= v.y + v.h)
    );
};
canvas.onclick = ()=>{
    if (reqId === null) {
        pipes.push({
            x: width + 104,
            y: height / 2 - 130,
            w: 104,
            h: 260
        });
        reqId = requestAnimationFrame(animate);
    }
    gravity = Math.min(gravity, -9) - 3;
};

//# sourceMappingURL=index.017db2f2.js.map
