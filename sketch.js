
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var beachball;
var floor;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   var beachball_options ={
    restitution: 0.85
   }
   
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  beachball = Bodies.circle(250,10,20,beachball_options);
  World.add(world,beachball);
  
  floor = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,floor);

  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipse(beachball.position.x,beachball.position.y,20);
  rect(floor.position.x,floor.position.y,200,20);
}

