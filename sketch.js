const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1;
var wall2;

var wall_con;

var bridge;
var jointPoint;

var stone = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

 wall1 = new Base(50, 50, 100, 105);
 World.add(world, wall1);

 wall2 = new Base(50, 50, 40, 50);
 World.add(world, wall2);

 bridge = new Bridge(nlink, jointPoint);
 World.add(world, bridge);

jointPoint = new Base(50, 50 , 100, 100);
World.add(world, jointPoint);

Matter.Composite.add(bridge, jointPoint);


Engine.run(engine);

rectMode(CENTER);
elipseMode(CENTER);
}

function draw() {
  background(51);

  for( var i = 0; i <= 8;  i++) {
    var x = random(width / 2 - 200, width / 2 - 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }




  Engine.update(engine);

}
