class launcher {

constructor(body,anchor){
    var options= {
        bodyA:body,
        pointB:anchor,
        stiffness :0.004,
        length:1
        }

        this.bodyA = body;
        this.pointB = anchor;
        this.launcherObject = Constraint.create(options);
        World.add(world.this.launcherObject)

}

   attach(body){
       this.launcherObject.bodyA = body

   }

   fly(){
     this.launcherObject.bodyA = null;
   }

   display(){
       if(this.launcherObject.bodyA){
           var pointA = this.bodyA .position ;
           var pointB = this.pointB          ;

           strokeWeight(2);
           line(pointA.x , pointA.y , pointB.x , pointB.y)
       }
   }


}

