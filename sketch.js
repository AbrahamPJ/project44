var snake;
let rez = 20;
var height;
var width;
var gameEnd;



function setup() {
  createCanvas(600, 600);
 snake = createSprite(50,50,20,20);  
 snake.shapeColor = "red"
  width = floor(width / rez);
  height = floor(height / rez);
}

function draw() {
   // scale(rez);
    background("black");
    if (frameCount%100===0){
      food = createSprite(random(1,600),random(1,600),10,10);
      food.lifetime = 100;
      }

      if (keyDown(RIGHT_ARROW)){
snake.velocityX = 10;
snake.velocityY = 0;
      }

 if (keyDown(LEFT_ARROW)){
        snake.velocityX = -10;
        snake.velocityY = 0;
 }
if (keyDown(UP_ARROW)){
        snake.velocityX = 0;
        snake.velocityY = -10;
              }
 if (keyDown(DOWN_ARROW)){
        snake.velocityX = 0;
        snake.velocityY = 10;
              }

  fill("red");
  drawSprites();
  }


function foodLocation() {
  let x = floor(random(width));
  let y = floor(random(height));
  food = createVector(x, y);

}

 function setDir(x,y){
   snake.x = snake.x + x;
   snake.y = snake.y + y;
 } 



 
//if (snake.isTouching(edges)){
//  gameState = end;
//}

//if (gameState == end){
 // print("END GAME")
 // noLoop();
//}
