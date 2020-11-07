const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1;
var box3,box4,pig2,log2;
var box5,log5,log6;
 
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70); 
    pig1 = new Pig(810,350);
    log1 = new Log(810,250,300,PI/2);
    
    box3 = new Box(700,220,70,70);
    box4 = new Box(920,220,70,70);
    pig2 = new Pig(810,250);
    log2 = new Log(810,200,300,PI/2);

    box5 = new Box(810,180,70,70);
    log5 = new Log(760,120,150,PI/4);
    log6 = new Log(850,120,150,-PI/5);

    bird1 = new Bird(100,200);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    
    box5.display();
    log5.display();
    log6.display();

    bird1.display();
}