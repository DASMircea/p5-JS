var inc = 0.01
var start = 0

var xoff = 0;
var yoff = 0;

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
}

function draw() {

    loadPixels();
    yoff = 0;
    for (let y = 0; y < height; y++) {
        xoff = 0;
        for (let x = 0; x < width; x++) {
            var r = noise(xoff, yoff) * 255;
            
            var index = (x + y * width) * 4;
            pixels[index] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
    start += inc;
    // var x = map(noise(xoff, yoff), 0, 1, 0, width);

    // xoff += 0.01;
    // yoff += 0.01;

    // noLoop();
}