var playerCount=0;
var allPlayers;
var gameState=0;
var arrowimg,bowimg,backimg,balloon1img,balloon2img,balloon3img,balloon4img;
var player1,player2;
var players;
var bg1img,bg2img;
var arrow,balloon;
var arrowg,balloong;
var game,player,form;
var database;
var createBalloon = true;


function preload(){
    bowimg=loadImage("Images/bow.png");
    bg1img=loadImage("Images/Welcome2.png");
    bg2img=loadImage("Images/bg.png");
    arrowimg=loadImage("Images/arrow.png");
    balloon1img=loadImage("Images/blueballoon.png");
    balloon2img=loadImage("Images/greenballoon.png");
    balloon3img=loadImage("Images/pinkballoon.png");
    balloon4img=loadImage("Images/redballoon.png");
}

function setup(){
    createCanvas(1000,600);
    database=firebase.database();
    arrowg = new Group();
    balloong = new Group();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===2){
        game.play();
    }
}
