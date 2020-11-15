const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,300,50,50);
    box = new Box(260,350,90,10);
    gr=new ground(200,390,400,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box.display();
    gr.display();
}