const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, log1, log2; 
var paper;

//var box2, box3, box4;
//var pig1, pig2;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(800,390,200,10);
    box2 = new Box(900,350,20,100);
    box3 = new Box(700,350,20,100);
    paper = new Ball(100,320,50,50);
    //box4 = new Box(920,240,70,70);
    ground = new Ground(200,height,2000,10)
    //pig1 = new Piggy(810,350)
  //  pig2 = new Piggy(810,220)
   // log1 = new Log(810,260,300,PI/2)
    //log2 = new Log(810,180,300,PI/2)
   // bird1 = new Bird(100,400,50,50)

    
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    paper.display();
    //box4.display();
    ground.display();
    //pig1.display();
    //pig2.display();
    //log1.display();
    //log2.display();
   // bird1.display();
}

function keypressed (){
if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}

};