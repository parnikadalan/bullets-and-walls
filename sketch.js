var  wall, thickness 
var bullet,speed, weight
var rect
var damage

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200
  wall = createSprite(1500,200
  wall.shapeColor=color(80,80,
  speed = random (223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet.velocityX= speed;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
}

function draw() {
  background(255,255,255);
  
 

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
bullet.velocityX = 0
var deformation= 0.5*weight*speed*speed/22509
if (deformation>180)
{
bullet.shapeColor=color(255,0,0);
}
  if(deformation<180 && deformation>180)
  {
    bullet.shapeColor=color(230,230,0)
  }

  if(deformation<100)
  {
    bullet.shapeColor=color(0,255,0)
  }
}
 if (bullet.isTouching(wall))
 {
   bullet.velocityX = 0
 }

 hasCollided()

drawSprites();
text("DAMAGE:"+ damage, 250, 100);
}

function hasCollided(bullet, wall){

}


