var fish;
var background;
var shark;
var npcfish;
var coin;
var backgroundImg;
var fishImg;
var coinImg;
var npcfishImg;
var gameState = "play"

function preload(){
backgroundImg = loadImage("images/background.jpg");
fishImg = loadImage("images/fish.jpg");
npcfishImg = loadImage("images/npcfish.png");
coinImg = loadImage("images/coin.png");
sharkImg = loadImage("images/shark.jpg");
}

function setup(){
    createCanvas(1000,600);
    fish = createSprite();
    fish.addImage("fish", fishImg);
    
}

function draw(){
    background();
    if(keyDown("up_arrow")){
        fish.y = fish.y + 3;
    }
    if(keyDown("down_arrow")){
        fish.y = fish.y - 3;
    }
    fish.velocityX = fish.velocityX + 0.8;
}