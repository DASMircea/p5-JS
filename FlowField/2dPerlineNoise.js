var inc = 0.01
var start = 0

var xoff = 0;
var yoff = 0;

function setup() {
    createCanvas(500, 500);
    pixelDensity(1);
}

function draw() {

    loadPixels();
    yoff = 0;
    for (let y = 0; y < height; y++) {
        xoff = 0;
        for (let x = 0; x < width; x++) {
            var n = noise(xoff, yoff);

            var r = map(sin(n * PI * 24), -1, 1, 0, 255) + 0.618033988749895 % 1; 
            var g = map(sin(n * PI * 12), -1, 1, 0, 255) + 0.618033988749895 % 1;
            var b = map(sin(n * PI * 6), -1, 1, 0, 255) + 0.618033988749895 % 1;

            var index = (x + y * width) * 4;
            pixels[index] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b;
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

    noLoop();
}