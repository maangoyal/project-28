class Launcher {
    constructor(bodyA , pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.pointB = pointB;
        this.paper = Constraint.create(options);
        World.add(world, this.paper);
    }

    fly(){
 
    this.paper.bodyA = null;
    
    }

    display(){
        if(this.paper.bodyA){
            var pointA = this.paper.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
        
    }
    
}