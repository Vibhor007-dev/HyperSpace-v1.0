var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;
var i;
var spaceship1,spaceship2;
var objects=[];
var bgImg;
var alien;
var alienBoss;
var form, player, game;
var villains=[];
var spaceship1, spaceship2
var spaceship1Img, spaceship2Img, alienImg,alienBossImg;

function preload(){
  
 i=createImg("images/formbg.gif");
 spaceship1Img=loadImage("images/spaceship.png");
 spaceship2Img=loadImage("images/spaceship.png");
  bgImg = loadImage("images/spacebg.jpg");
  alienImg = loadImage("images/alien.png");
  alienBossImg = loadImage("images/alien.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  //game.update(2);
  //console.log(database);
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //console.log(gameState);
  //console.log(playerCount);
}
