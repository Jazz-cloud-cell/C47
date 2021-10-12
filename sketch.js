var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4, cars;

function preload()
{
  track = loadImage("../images/sky.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
 
}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getGameState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.updateGamestate(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if (gameState===2){
    game.end();
  } 

}
