
function setup() {
  angleMode(DEGREES);
  createCanvas(400, 600);
  

  Player = new Player(width/2,height/2);  

  for (let i = 0; i < random(10,20); i++) {
  
    asteroids1.push(new asteroids());
   }
}

function draw() {
 background(220);
  
  rect(width/2,height/2,20,20);
  circle(mouseX,mouseY,20);

  Player.update();
  Player.show();

<<<<<<< HEAD
=======
  for (let i = 0; i < asteroids1.length; i++){
    
    asteroids1[i].update();
    asteroids1[i].show();
      
     }
>>>>>>> main

}
