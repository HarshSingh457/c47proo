// sprites
var home;
var button1, button2, button3, button4, rocket1, rocket2, bg3, instruction, ctrlbutton, backbutton;
var edges;
// sprites images
var bg1img, bg2img, bg3img, ctrlbuttonimg;
var button1img, button2img, button3img, button4img, rocket1img, rocket2img, instructionimg, ctrlbg, bbimg;

// gamestate
var gameState = "home";



function preload() {

  bg1img = loadImage("images/bg1.jpg");
  bg2img = loadImage("images/bg2.jpg");
  bg3img = loadAnimation("images/bg3.gif");
  button1img = loadImage("images/b1.png");
  button2img = loadImage("images/b3.png");
  button3img = loadImage("images/takeofff.png");
  button4img = loadAnimation("images/arrow1.gif");
  rocket1img = loadImage("images/rocket1.png");
  rocket2img = loadImage("images/rocket2.png")
  instructionimg = loadImage("images/instruction.PNG");
  ctrlbuttonimg = loadImage("images/b2.PNG");
  ctrlbg = loadImage("images/ctrlbg.PNG");
  bbimg = loadImage("images/bimg.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  if (gameState === "home") {

    home = createSprite(windowWidth / 2, windowHeight / 2);
    home.addImage(bg1img)
    home.scale = 0.8;

    rocket1 = createSprite(windowWidth / 2, windowHeight - 200);
    rocket1.addImage(rocket1img);
    rocket1.scale = 0.21;
    rocket1.visible = false;

    button1 = createSprite(950, 250);
    button1.addImage(button1img);
    button1.scale = 0.8;

    button2 = createSprite(960, 450);
    button2.addImage(button2img);
    button2.scale = 0.8;
  }
  button3 = createSprite(windowWidth / 2, windowHeight - 600);
  button3.addImage(button3img);
  button3.scale = 0.18;
  button3.visible = false;

  button4 = createSprite(windowWidth - 780, windowHeight - 600);
  button4.addAnimation("arrow", button4img);
  button4.scale = 0.5;
  button4.visible = false;


  instruction = createSprite(windowWidth / 2, windowHeight - 275);
  instruction.addImage(instructionimg);
  instruction.scale = 1.5;
  instruction.visible = false;




  ctrlbutton = createSprite(955, 350);
  ctrlbutton.addImage(ctrlbuttonimg);
  ctrlbutton.scale = 0.8;
  ctrlbutton.visible = true;



  bgctrl = createSprite(windowWidth / 2, windowHeight / 2);
  bgctrl.addImage(ctrlbg);
  bgctrl.scale = 1;
  bgctrl.visible = false;



}

function draw() {
  background("darkblue");


  if (gameState === "home") {
    if (mousePressedOver(button1)) {
      gameState = "play";
    }

// ctrlbutton.visible=true;
    if (mousePressedOver(button2)) {
      instruction.visible=true;
      ctrlbutton.visible=false;
    }

if(keyDown("B")){
  instruction.visible=false;
  ctrlbutton.visible=true;
}

    if (mousePressedOver(ctrlbutton)) {
      bgctrl.visible = true;

    }


    if (keyDown("B")) {
      bgctrl.visible = false;


    }


    // if(mousePressedOver(ctrlbutton)){
    //   gameState="play";
    // }

    if (gameState === "instruction") {
      instruction.visible = true;
      ctrlbutton.visible = false;

    }


  }
  if (gameState === "play") {

    // if(keyDown("B")){
    // gameState="home";
    // }
    home.addImage(bg2img);
    home.scale = 3.5;
    home.y = -height * 9.65;
    home.x = width / 2;
    home.depth = -2;
    button2.visible = false;
    button1.visible = false;
    rocket1.visible = true;
    button3.visible = true;
    button4.visible = true;
    instruction.visible = false;
    ctrlbutton.visible = false;

    if (mousePressedOver(button3)) {
      gameState = "takeoff";
      rocket1.velocityY = -2;

    }


  }

  if (gameState === "takeoff") {
    camera.position.y = rocket1.y - 150;

    button3.destroy();
    button4.destroy();

    if (rocket1.x >= 1300) {
      rocket1.x = 1290;
    }

    if (rocket1.x <= 50) {
      rocket1.x = 55;
    }


    if (keyWentDown("UP")) {
      rocket1.addImage(rocket2img);
      rocket1.scale = 0.82;
      rocket1.velocityY = -18;

    }
    if (keyWentUp("UP")) {
      rocket1.addImage(rocket1img);
      rocket1.scale = 0.21;
      rocket1.velocityY = -3;
    }

    if (keyWentDown("LEFT")) {
      rocket1.velocityX = -10;

    }

    if (keyWentUp("LEFT")) {
      rocket1.velocityX = 0;

    }

    if (keyWentDown("RIGHT")) {
      rocket1.velocityX = +10;
    }

    if (keyWentUp("RIGHT")) {
      rocket1.velocityX = 0;
    }


    if (rocket1.y <= -12500) {
      gameState = "space";
    }


  }




  if (gameState === "space") {
    camera.position.y = rocket1.y - 150;

    home.destroy();
    bg3 = createSprite(windowWidth / 2, windowHeight);
    bg3.addAnimation("stars",bg3img);
    bg3.scale = 3;
    bg3.depth = -2;
    bg3.y = rocket1.y;



    if (rocket1.x >= 1300) {
      rocket1.x = 1290;
    }

    if (rocket1.x <= 50) {
      rocket1.x = 55;
    }



    if (keyWentDown("UP")) {
      rocket1.addImage(rocket2img);
      rocket1.scale = 0.82;
      rocket1.velocityY = 0;

    }
    if (keyWentUp("UP")) {
      rocket1.addImage(rocket1img);
      rocket1.scale = 0.21;
      rocket1.velocityY = 0;
    }

    if (keyWentDown("LEFT")) {
      rocket1.velocityX = -10;

    }

    if (keyWentUp("LEFT")) {
      rocket1.velocityX = 0;

    }

    if (keyWentDown("RIGHT")) {
      rocket1.velocityX = +10;
    }

    if (keyWentUp("RIGHT")) {
      rocket1.velocityX = 0;
    }


  }

  drawSprites();

}