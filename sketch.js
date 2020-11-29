const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,ground

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world
  var balloptions = {
    restitution: 1
  }
  ball=Bodies.rectangle(200,100,50,50 , balloptions);
  World.add(world,ball);
   var options={
     isStatic: true
   }
  ground=Bodies.rectangle(200,390,400,10 , options);
  World.add(world,ground );

}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  drawSprites();
  rect(ball.position.x,ball.position.y,50,50)
  rect(ground.position.x,ground.positiony,400,10)
}