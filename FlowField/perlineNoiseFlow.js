var inc = 0.01;
var scl = 10;
var cols, rows;


var zoff = 0;

var parts = [];
var flowField = []

var fr;

function setup() {
    createCanvas(400, 400);
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowField = new Array(cols * rows);

    for (let i = 0; i < 2000; i++) {
        parts.push(new Particle());
    }
    
    background(0);
}

function draw() {

    loadPixels();
    var yoff = 0;
    for (let y = 0; y < rows; y++) {
        var xoff = 0;
        for (let x = 0; x < cols; x++) {
            var index = y + x * cols;

            var r = noise(xoff, yoff, zoff) * PI * 4;
            var v = p5.Vector.fromAngle(r);

            v.setMag(0.1);
            flowField[index] = v;
            xoff += inc;

            // stroke(255, 50);
            // push();
            // translate(x * scl, y * scl);
            // rotate(flowField[index].heading());
            // line(0, 0, scl, 0);    
            // strokeWeight(1);
            // pop();

        }
        yoff += inc;
    }

    zoff += 0.01

    parts.forEach(p => {
        p.follow(flowField);
        p.update();
        p.show();
        p.edges();
    });

    //fr.html(frameRate());
}