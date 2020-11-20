var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

  //crearing car sprite
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;

  //creating wall sprite;
  weight=createSprite(1500, 200, 60, height/2);
  weight.shapeColor=color(80,80,80);

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);
  //changing the color of the car according to deformation
  if(wall.x-car.x<(wall.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if (deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      car.shapeColor=color(0,230,0);
    }
  }
  


  drawSprites();
}