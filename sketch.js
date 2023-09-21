
function setup() {
  angleMode(DEGREES);
  createCanvas(400, 600);
  

  Player = new Player(width/2,height/2);  


}

function draw() {
 background(220);
  
  rect(width/2,height/2,20,20);
  circle(mouseX,mouseY,20);

  Player.update();
  Player.show();


}
