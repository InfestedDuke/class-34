class Ball {
    constructor(){
        this.body = Bodies.circle(450,480,50);
        World.add(world,this.body);

    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,50,50);
    }

}