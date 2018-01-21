var boids = [];
var maxIterations = 10;
var iterations = 0;

function setup(){
    createCanvas(800, 600);
    for (let i = 0; i < 50; i++) {
        boids.push(new Boid(random(width), random(height), random(50)));
    }

    boids.push(new Boid(width / 2, height / 2, 50));
}

function draw(){
    background(51);
    //if (iterations < maxIterations) {
        
        boids.forEach(boid => {
            boid.run(boids);
        });
    //   iterations += 1;
    //}
}