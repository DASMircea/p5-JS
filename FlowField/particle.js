function Particle(){
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 2;
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

    var r = map(this.vel.heading(), 0, PI, 0, 75);
    var g = map(this.vel.heading(), 0, PI, 150, 255);
    var b = map(this.vel.heading(), 0, PI, 60, 150);

    stroke(r,g,b,20);
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