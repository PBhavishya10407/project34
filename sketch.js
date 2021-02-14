const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bd = 40;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bd=40;

	//Create the Bodies Here.
	
	roof = new Roof(400,100,300,50);

	bob1 = new Bob(320,300,30);
	bob2 = new Bob(330,300,30);
	bob3 = new Bob(340,300,30);
	bob5 = new Bob(350,300,30);
	bob4 = new Bob(360,300,30);

	rope1 = new Rope(bob1.body,roof.body,-bd*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bd*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bd*2,0);
	rope5 = new Rope(bob5.body,roof.body,bd*1,0);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function mouseDragged()
{
	   Matter.Body.setPosition(bob1.body,{x : mouseX,y : mouseY});
}

