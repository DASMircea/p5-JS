var xoff = 0;

function setup(){
    createCanvas(800,800)
}

function draw(){
    background(51);

    var x = map(noise(xoff), 0, 1, 0, width);
    ellipse(x, 200,24,24);

    xoff += 0.01;

}