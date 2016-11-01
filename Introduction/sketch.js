  var x, y, xVel, yVel, intro, curChar, prevChar, speech, anim;
  var textSpdSld, textSpd;
function setup() {
  createCanvas(windowWidth, windowHeight);
 x = 0;
 y = 0;
  xVel = 2;
  yVel = 2.5;
  intro = "Hello, \n"
  speech = "How are you? \nI'm BoRen, ";
  curChar = speech.charAt(0);
  anim = 0;
  textSpdSld = createSlider(1, 60, 25);
  textSpdSld.position(20, 20);
}

function draw() {
  textSpd = textSpdSld.value();
  background(0);
  mouseColor = color(mouseX, mouseY, 255);
  fill(mouseColor);
  
  text(intro, 100, 100);
  if(speech.length > 1 && speech.startsWith(curChar)){
      if(!intro.endsWith('|') && anim !== 1){
        if(anim === 2){
           intro = intro.substring(0, intro.length-1);
        }
        anim = 1;
        intro = intro.concat('|');
      }else if(anim!=2){
        if(anim === 1){
        intro = intro.substring(0, intro.length - 1);
        }
        anim = 2;
        intro = intro.concat(' ');
      }
    if(frameCount%textSpd===0){
      if(anim === 1 || anim === 2){
        anim = 0;
        intro = intro.substring(0, intro.length-1);
      }
      console.log(speech);
      speech = speech.substring(1, speech.length);
      intro = intro.concat(curChar);
      console.log(intro);
      curChar = speech.charAt(0);
      console.log(speech.charAt(0));
      console.log(speech);
    }
  }
  
  //Drawing Circle
  ellipse(x, y, 20, 20);
  x += xVel;
  y += yVel;
  if(x > width ||x < 0){
    xVel = -xVel;
  }
  if(y > height || y < 0){
    yVel = -yVel;
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  if(x > windowWidth){
    x = windowWidth - 20
  } else if(x < 0){
    x = 0;
  }
  if(y > windowHeight){
    y = windowHeight -20
  } else if (y < 0){
    y = 0;
  }
  
  
}