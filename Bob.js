class Bob
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic : false,
            restitution : 0.2,
            friction : 1.0,
            density : 1.5
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display()
    {
        var ppos=this.body.position;
        push();
        translate(ppos.x,ppos.y);
        rectMode(CENTER);
        fill("white");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}