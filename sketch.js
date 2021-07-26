var path,boy,leftB,rightB,edges;
var boyImg,pathImg;
function preload(){
  boyImg=loadImage("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(180,340,30,30);
  boy.addImage(boyImg);
  boy.scale=0.08;

  leftB=createSprite(0,0,50,800);
  rightB=createSprite(400,0,50,800);

  edges=createEdgeSprites();
}

function draw() {
  background(0);
  boy.x=World.mouseX;
  
  if(path.y>400){
    path.y=height/2;
  }
  boy.collide(edges[3]);
  boy.collide(leftB);
  boy.collide(rightB);

  drawSprites();
}
