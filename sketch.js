 	var bg, bgImg;
var earth, earthImg;
var plane, planeImg;
var rocket, rocketImg;
var asteriod, asteriodImg;
var rocketGrp, asteriodGrp;

asteriodSpeed = 3;
var gameState = "play";

function preload(){
	bgImg = loadImage("spaceBg.jpg");
	earthImg = loadImage("EarthImageEdited.png");
	planeImg = loadImage("jetplane.png");
	rocketImg = loadImage("rocket.png");
	asteriodImg = loadImage("asteriod.png");
}

function setup() {
	createCanvas(530, 870);
	
	bg = createSprite(100,100);
	bg.addImage(bgImg);
	bg.scale = 0.6;

	earth = createSprite(270, 950);
	earth.addImage(earthImg);
	earth.scale = 2;

	plane = createSprite(270, 450);
	plane.addImage(planeImg);
	plane.scale = 0.7;

  
}


function draw() {
  background(0);
  plane.x = World.mouseX; 
  plane.y = World.mouseY;
  console.log(plane.x, plane.y);
 
 	if(plane.y >= 580){
		plane.y = 580;
 	}
  
	if(keyWentDown("SPACE")){
		rocket = createSprite(plane.x,plane.y-90, 20, 20);
		rocket.addImage(rocketImg);
		rocket.scale = 0.2;
		rocket.velocityY = -20;		
	}

	spawnAsteriods();
	drawSprites();

}

function spawnAsteriods(){
	if(frameCount % 60 === 0){
		asteriod = createSprite(random(130, 470), -950, 20,20);
		asteriod.addImage(asteriodImg);
		asteriod.velocityY = asteriodSpeed*1.5;
		asteriod.scale = 0.5;
		asteriod.debug =true;
	}
}



