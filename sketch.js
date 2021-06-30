var canvas, backgroundImage;
var car1_image,car2_image,car3_image,car4_image;
var track_image;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track_image = loadImage("../CarRacingStage1.5-master/images/track.jpg");
  car1_image = loadImage("../CarRacingStage1.5-master/images/car1.png");
  car2_image = loadImage("../CarRacingStage1.5-master/images/car2.png");
  car3_image = loadImage("../CarRacingStage1.5-master/images/car3.png");
  car4_image = loadImage("../CarRacingStage1.5-master/images/car4.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("Blue");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
