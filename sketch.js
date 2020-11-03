var fixedrectangle ,  movingrectangle 


function setup() {
  
  createCanvas(800,400);

  fixedrectangle=createSprite(600, 400, 80, 50);
  fixedrectangle.shapeColor="red";
  movingrectangle=createSprite(400,200,80,30)
  movingrectangle.shapeColor="green";

}
function draw() {
  background(255,255,255);  
  drawSprites();
movingrectangle.y = mouseY;
movingrectangle.x = mouseX;
if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
  fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
  movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2+movingrectangle.height/2&&
  fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+fixedrectangle.height/2){
    movingrectangle.shapeColor="blue"
    fixedrectangle.shapeColor="blue"}
    else{fixedrectangle .shapeColor="pink"
    movingrectangle.shapeColor ="pink"
  }

 
}