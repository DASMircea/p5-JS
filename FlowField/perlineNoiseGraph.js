var inc = 0.01;
var start = 0;

function setup() {
    createCanvas(400, 400)
}

function draw() {

    background(51);
    noFill();
    beginShape();

    var xoff = start;

    for (let x = 0; x < width; x++) {
        stroke(255);

        var n = map(noise(xoff), 0, 1 , 0, height);
        var s = map(sin(xoff), -1, 1, -50, 50);
        var y = s + n;

        xoff += inc;
        vertex(x, y);
    }

    endShape();

    start += inc;
    // noLoop();    
}