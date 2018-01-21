var G = 6.674e-3;

function Boid(x, y, r) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.position = createVector(x, y);
    this.r = r;
    this.maxSpeed = 3; //Max speed
    this.maxForce = 0.01; //Max Steering Force
}

Boid.prototype.mass = function () {
    return Math.PI * this.r ^ 2 * 10;
}

Boid.prototype.p = function () {
    return this.velocity.mult(this.mass());
}

Boid.prototype.run = function(boids) {

    //var target = createVector(mouseX, mouseY);

    this.gravitate(boids);
    this.collide(boids);
    this.update();
    this.render();

}

Boid.prototype.update = function () {
    this.velocity.add(this.acceleration);
    //this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    //console.log(this.velocity);
    this.acceleration.mult(0)
}

Boid.prototype.render = function () {
    fill(127, 127);
    stroke(200);
    ellipse(this.position.x, this.position.y, this.r, this.r);
}

Boid.prototype.gravitate = function (boids) {

    boids.forEach(boid => {
        if (this != boid) {
            var forceMagnitude = G * ((this.mass() * boid.mass())/(this.position.dist(boid.position))^2);
            //console.log(forceMagnitude);
    
            var force = p5.Vector.sub(boid.position, this.position);
            force.normalize();
            force.mult(forceMagnitude);
    
            //console.log(force);
    
            this.acceleration.add(force.mult(1/this.mass()));
            
            return force;
        }
    });

}

Boid.prototype.collide = function (boids) {
    
    boids.forEach(boid => {        
        if (this != boid) {
            var distance = this.position.dist(boid.position);
            var sumOfRadius = this.r + boid.r;

            if (distance <= sumOfRadius/2) {
                this.velocity.mult(-1);
            }
        }
    });

}

Boid.prototype.seek = function(target) {
    var desired = p5.Vector.sub(target, this.position);

    desired.normalize();
    desired.mult(this.maxSpeed);

    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);

    this.acceleration.add(steer);

    return steer;
}