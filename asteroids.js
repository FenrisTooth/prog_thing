class asteroids{
    constructor(x,y){
      this.size = 1.5;
      this.rotation = random(0,360);
      this.pos = createVector(x,y);
      this.vel = p5.Vector.random2D();
    //  this.vel.normalize();
     // this.vel.mult(random(0.5,2));
      
     
    }
    
    update(){
      
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
      
      this.rotation += random(0,5)
      
     
    }
    
    
    
    show(){
    
      push();
        stroke(255);
      fill(0);
      beginShape();
     translate(this.pos.x,this.pos.y);
      rotate(this.rotation);
      //scale(random(0.5,3))
      vertex(-10.66*this.size,11.85*this.size);
      vertex(-17.32*this.size,7.54*this.size);
      vertex(-12.27*this.size,-1.82*this.size);
      vertex(-6.23*this.size, -6.87*this.size);
      vertex(3.13*this.size, -6.01*this.size);
      vertex(10*this.size, -10*this.size);
      vertex(18.16*this.size, -7*this.size);
      vertex(15.7*this.size, 2.73*this.size);
      vertex(15.82*this.size, 12.1*this.size);
      vertex(8.18*this.size, 13.08*this.size);
      vertex(2.52*this.size, 16.9*this.size);
      vertex(-4.26*this.size, 15.55*this.size);
      vertex(-10.66*this.size,11.85*this.size);
      
      endShape();
      pop();
      
    }
    
  }