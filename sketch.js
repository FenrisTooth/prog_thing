let asteroids1 = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < random(10,20); i++) {
  
    asteroids1.push(new asteroids());
   }

}

function draw() {
  background(220);

  for (let i = 0; i < asteroids1.length; i++){
    
    asteroids1[i].update();
    asteroids1[i].show();
      
     }
}
