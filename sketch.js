var Bunty, BuntysAnimation, Banana, BananasImage, StoneHenge, StoneHengeImage , DantidurgaJungle , DantidurgaJunglesImage
var Fruits,Obstacles
var BuntyIsScoring = 0
var invisible_ground


function preload (){
BuntysAnimation = loadAnimation("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png" , "Monkey_04.png" , "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" , "Monkey_08.png" , "Monkey_09.png" , "Monkey_10.png")
DantidurgaJunglesImage = loadImage ("jungle.jpg")
BananasImage = loadImage ("banana.png") 
StoneHengeImage = loadImage ("stone.png")
}
function setup() {
  createCanvas(400, 400);
    DantidurgaJungle = createSprite(200,200,400,400)
  DantidurgaJungle.addImage("Beautiful", DantidurgaJunglesImage)
  invisible_ground = createSprite (25,388,400,9)
  invisible_ground.visible = false
  Bunty = createSprite(50,100)
  Bunty.addAnimation("Great Monkey",BuntysAnimation)
StoneHenge = createSprite(390,390)
StoneHenge.addImage("Annoying!", StoneHengeImage)
DantidurgaJungle.x  = DantidurgaJungle.width / 2
DantidurgaJungle.velocityX = -2
Bunty.scale = 0.13
StoneHenge.scale = 0.14
Fruits = new Group()
Obstacles = new Group()
}

function draw() {
drawSprites()
//text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY)
Bunty.collide(invisible_ground)
stroke("white")
textSize(20)
fill("white")
text("Score: "+BuntyIsScoring, 250,90)
if (DantidurgaJungle.x < 0){
DantidurgaJungle.x = DantidurgaJungle.width/2;
  }
if (keyDown("space")){
Bunty.velocityY = -3
}
Bunty.velocityY = Bunty.velocityY +1
if(Fruits.isTouching(Bunty)){
//Fruits.destoryEach()
BuntyIsScoring = BuntyIsScoring +2
}
SpawnBananas();
}

function SpawnBananas(){
if (frameCount % 60 === 0){
Banana = createSprite(289,90)
Banana.addImage("Bananan", BananasImage)
Banana.velocityX = -3
Banana.scale = 0.15
Fruits.add(Banana)
Banana.depth = Bunty.depth;
Bunty.depth = Bunty.depth + 1;
Banana.lifetime = 134
Banana.y = Math.round (random(123,290))
}
}



