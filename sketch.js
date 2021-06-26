var bullet;
var car;
function setup() {
  createCanvas(800,400);
  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = 7;
  car = createSprite(700,200,30,200);
}

function draw() {
  background(255,255,255); 
  background("red"); 
  if (bullet.isTouching(car)){
  isStatic = true;
    }
  drawSprites();
}