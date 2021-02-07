class Paper{
    constructor(x,y,radius){
        var options={
            
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density: 1.2,
      }
      this.y=y;
      this.x=x;
      this.radius=radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      World.add(world,this.body);
      this.image= loadImage("images/paper.png");
      

    }
    display(){
        var pos = this.body.position;
         
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
   
     
           
      
    }
}
