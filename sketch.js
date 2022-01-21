var canvas, backgroundImage, titleImage

var database;
var form, game, player, playerCount;
 
var gameState = 0;
var playercount;

var button, buttonImage;

var trackImage , track;

var lion, lionImage, rabbit, rabbitImage, elephant, eleohantImage;

function preload() {
 backgroundImage = loadImage("./images/background.jpg");
 buttonImage = loadImage("./images/playButton.png");
 trackImage = loadImage("./images/track.jpg");
 lionImage = loadImage("./images/lion.jpg");

}

function setup() {

canvas = createCanvas(windowWidth, windowHeight);
database = firebase.database();

game = new Game();
game.getState();
game.start();


}


function draw() {
  background(backgroundImage);

  

  if(playerCount === 2) {

    game.update(1);
  }

  if(gameState === 1) {

    game.play();
  }
  

}

