/*

Final Project Pitch Needs at least:
Title
Description
Theme
Interaction
Example Graphics

*/

//Next Button XY Location
var nextButtonX = 960-150;
var nextButtonY = 640-60;
var backButtonX = 20;
var backButtonY = nextButtonY;

//Button Size
var buttonW = 100;
var buttonH = 35;

var currentSlide = 1;
var totalSlides = 5;


var slide3Sound;

//Preload any external media
function preload(){
  slide3Sound = loadSound("fun_jump.wav");
}

//Size the canvas for however big you want the presentation to be
function setup() {
  createCanvas(960, 640);
}

function draw() {
  background(220);
  
  noStroke();
  fill('black');
  
  
  //Creating content for different slides, inside an if() statement
  if(currentSlide==1){
    //Your Title Slide
    
    textSize(75);
    textAlign(CENTER,CENTER);
    text('Cow Simulator',width/2,height/2-50);
    textSize(35);
    text('The Big Cheese',width/2,height/2+50);
  } else if (currentSlide==2){
    //Describing our project
    
    textAlign(LEFT);
    text('The user will click on a cow, a sound will play and a wheel of cheese will appear. When you click on the cheese, you will hear a yum sound.',50,100,width-100);
    
  } else if(currentSlide==3){
    //Describe the interaction
    
    textAlign(LEFT);
    text('This program uses a mouse based interface. Wheels of cheese will use hit detection of the mouse position, and checking for a mouseclick to trigger a sound that is included in the sketch folder. That will be in .wav format.',50,100,width-100);
  } else if(currentSlide==4){
    //Describe the graphics
    
    textAlign(LEFT);
    text('Cow program graphics are going to be all hand drawn by me. There will be a cow, a meadow, and generated cheese wheels to click. They will be approximately this big, and randomly placed:',50,100,width-100);
    fill('yellow');
    circle(width/2,height/2,50);
    circle(width/2-100,height/2+22,50);
    circle(width/2+45,height/2-88,50);
    circle(width/2-29,height/2+71,50);
  } else if(currentSlide==5){
    //Describe the theme
    //Vibe check
    
    textAlign(LEFT);
    text('The cartoon-ish, hand drawn characters and style will be funny and absurd. This is my attempt at making a fun meme that can be passed around between friends.',50,100,width-100);
    
    //using the image() function
    //Add images that are inspirations to your theme
    //"look book", similiar projects or inspirations to what you want to do
  } 
  
  //Always running our next button code with this button function call
  button(nextButtonX,nextButtonY,'NEXT');
  
  //Only displaying 'back' button if we are past the 1st slide
  if(currentSlide>1){
    button(backButtonX,backButtonY,'BACK');
  }
  
}


function mousePressed(){
  
  //Ask the 4 Questions for mouse hit:
  if(mouseX > nextButtonX &&
     mouseX < nextButtonX+ buttonW &&
     mouseY > nextButtonY &&
     mouseY < nextButtonY + buttonH){
    currentSlide++;
    
    if(currentSlide>totalSlides){
      currentSlide = totalSlides;
    }
  }
  
  //need to repeat this for the back button
  if(mouseX > backButtonX&&
    mouseX < backButtonX+ buttonW &&
     mouseY > backButtonY &&
     mouseY < backButtonY + buttonH){
    currentSlide--;
    
    if(currentSlide<1){
      currentSlide = 1;
    }
  }
  
  //Play a sound once,
  //when on a specific slide
  if(currentSlide==3){
    slide3Sound.play();
  }
  
}



function button(x,y,buttonText){
  //Drawing a button, based on the x, y, and button text that is put in the arguments for the function call
  
  fill('white');
  stroke('green');
  strokeWeight(4);
  
  //Ask the 4 Questions for mouse hit:
  if(mouseX > x &&
    mouseX < x + buttonW &&
     mouseY > y &&
     mouseY < y + buttonH){
    fill('red');
    
    if(mouseIsPressed){
      stroke('pink');
    }
    
  }
  
  rect(x,y,buttonW,buttonH);
  noStroke();
  textSize(25);
  textAlign(CENTER,CENTER);
  fill('black');
  text(buttonText,x,y,buttonW,buttonH);
 
}



