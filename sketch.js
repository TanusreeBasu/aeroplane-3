var aeroplane,aeroplaneImg;
var story,keys,play,Menu;
var backImg,backImg;
var gameState = 0;

function preload(){
aeroplaneImg = loadImage("Images/Aeroplane image.png")
backImg = loadImage("Images/AIRPORT image.jpg")
backImg2 = loadImage("Images/Background image.jpg")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-200);
  background(backImg);
  if(gameState === 0){
 story = createButton("STORY")
 story.position(400,100)
 

 keys = createButton("KEYS")
keys.position(400,200)


 play = createButton("PLAY")
 play.position(400,300)

  
 Menu = createButton("Main Menu")
 Menu.position(50,450)
 

}
}
function draw() {
 //background(backImg);
  play.mousePressed(Play)
  keys.mousePressed(Keys)
 
  Menu.mousePressed(MENU)
  
 // if(gameState === 1){

   // Menu.mousePressed(MENU)
 // }


  drawSprites();
  story.mousePressed(Story)
//gameState = 1;
}

function Story(){
 // background(backImg);
story.hide()
keys.hide()
play.hide()

 stroke(20)
 textSize(40)
 fill("yellow")
 textFont("Georgia")
 text("Dear Pilot,",10,30)
 text("This is to inform you that your application have been appcepted by",50,100)
 text("our company and your flight from Whales to 20,000 kilometers have",50,170)
 text("been accepted. You are requested to visit our company in Whales.",50,240)
 text("From,",10,310)
 text("The Company Owner,KETAN",10,380)

 gameState = 1;
 //clear();
}

function Keys(){
  background(backImg);
story.hide()
keys.hide()
play.hide()
text("")
gameState = 1
}

function Play(){
 background(backImg);
 
  
  story.hide()
  keys.hide()
  play.hide()

aeroplane = createSprite(600,470,50,50);
aeroplane.addImage(aeroplaneImg)



}

function keyPressed(){
 background(backImg);
 if(keyCode===LEFT_ARROW){
   aeroplane.velocityX = -2;
 }
 if(keyCode===RIGHT_ARROW){
  aeroplane.velocityX = 2;
}
if(keyCode===UP_ARROW){
  aeroplane.velocityY = -2;
}
if(keyCode===DOWN_ARROW){
  aeroplane.velocityY = 2;
}
}

function MENU(){
  
 clear()
 background(backImg);
 //Menu.hide()

story = createButton("STORY")
story.position(400,100)
story.mousePressed(Story)

keys = createButton("KEYS")
keys.position(400,200)
keys.mousePressed(Keys)

play = createButton("PLAY")
play.position(400,300)
play.mousePressed(Play)

  }