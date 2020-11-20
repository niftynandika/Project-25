class Paper{
    constructor(x,y,r){
    var options = {
        isStatic:false,
        restitution: 0,
        friction: 0,
        density: 1.2,
    }
    this.x = x;
    this.y = y;
    this.r = 55;
    this.image = loadImage("sprites/paper.png");
    this.body = Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
    }
    display() {
        var paperpos = this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        // ellipseMode(RADIUS);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
         //circle(this.body.position.x, this.body.position.y, this.r );
    }
}

