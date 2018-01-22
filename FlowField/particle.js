function Particle(){
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 1;
    this.previousPosition = this.pos.copy();
}

Particle.prototype.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.previousPosition = this.pos.copy();
    this.pos.add(this.vel);
    this.acc.mult(0);
}

Particle.prototype.applyForce = function(force){
    this.acc.add(force);
}

Particle.prototype.show = function(){
    var inc = 0.01
    var n = noise(this.vel.heading(), this.vel.heading());

    var r = map(sin(n * PI * 24), -1, 1, 0, 255);
    r = r + (0.5 * (255 - r));
    var g = map(sin(n * PI * 12), -1, 1, 0, 255);
    g = g + (0.5 * (255 - g));
    var b = map(sin(n * PI * 6), -1, 1, 0, 255);
    b = b + (0.5 * (255 - b));

    stroke(r, g, b, 5);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.previousPosition.x, this.previousPosition.y);
}

Particle.prototype.follow = function(vectors){
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];

    this.applyForce(force);

}

Particle.prototype.edges = function(){
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
}