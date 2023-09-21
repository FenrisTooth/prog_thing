class Player{
    constructor(x, y){
     this.pos = createVector(x,y);
     this.dir = createVector(1,0);
     this.angle = 0;
     this.vel = createVector(0,0); 
  
      
      console.log(this.vel.heading());
      
  
    }  
    
      show(){
      
    push();
      stroke(10,10,255);
      beginShape();
      translate(this.pos.x,this.pos.y);
      rotate(this.angle);
      
      vertex(16, 0);
      vertex(-12, -10);
      vertex(-8, 0);
      vertex(-12, 10);
      vertex(16, 0);
        
      endShape();
      
    if(keyIsDown(UP_ARROW)){
      stroke(240,127,19);
      beginShape();
      vertex(-10, 0);
      vertex(-14, 1);
      vertex(-18, 0);
      vertex(-14, -1);
      vertex(-10, 0);
      
      endShape();
      
      
      
      
    }
      pop();     
  }
    
     
    
    
     update() {
  
       this.pos.add(this.vel);
       
       if (this.pos.x < -10){
  this.pos.x = width;       
  
       }
      
      if (this.pos.x > width+10){
  this.pos.x = 0;   
  
       }
       
      if (this.pos.y < -10){
  this.pos.y = height;       
  
       }
      if (this.pos.y > height+10){
  this.pos.y = 0;       
  
       }
       
     //   console.log(mouseX,mouseY)
       
       
       if (keyIsDown(RIGHT_ARROW)){
         
         this.angle +=2
         this.dir.rotate(2);
         
       }
      if (keyIsDown(LEFT_ARROW)){
         
         this.angle -=2
         this.dir.rotate(-2);
         
       } 
      
      if (keyIsDown(UP_ARROW)){
         
      this.dir.setMag(0.05);
      this.vel.add(this.dir);
      this.vel.limit(5000000000);
      
         
       }
        if (!keyIsDown(UP_ARROW)){
         
      this.vel.mult(0.99);
    
        
          
       }
       
     
    }  
  }
  
  
  
  
  
  //push pop betyder at translate kun virker i den ene instance 