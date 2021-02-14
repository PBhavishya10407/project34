class Rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options =
        {
          bodyA : body1,
          bodyB : body2,
          pointB:{x:this.offsetX,y:this.offsetY},
        }

        this.body = Constraint.create (options);
        World.add(world,this.body);
    }
    display ()
    {
        var pointA= this.body.bodyA.position;
        var pointB= this.body.bodyB.position;

        strokeWeight(4);
        var c1x=pointA.x;
        var c1y=pointA.y;
        var c2x=pointB.x+this.offsetX;
        var c2y=pointB.y+this.offsetY;
        line (c1x,c1y,c2x,c2y);
        
    }
}