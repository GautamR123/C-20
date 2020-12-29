
var car,wall, speed, weight;




function setup() {
  createCanvas(1600,400);

  
  speed=random(223,321);
  weight=random(30,52);

  wall = createSprite(1200,200,60,height/2);
  car = createSprite(50,200,50,20);

  car.velocityX=speed;




}

function draw() {
  background("black"); 
  
  wall.shapeColor = color(80,80,80);


  

  if(wall.x-car.x<=(car.width+wall.width)/2){
    car.velocityX=0;
       
    var damage=(0.5*weight*speed*speed/22500)

    if(damage>180){
      car.shapeColor = "red";
    }


    if(damage<180 && damage>100){
      car.shapeColor = "yellow";
    }

    if(damage<100){
      car.shapeColor = "green";
    }
  }

  

  drawSprites()
}