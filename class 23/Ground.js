//class is a blue print of a object.
//A class consits of functions and properties.
// what is the use of creating a class?
// answer : a class is used to create  one or more objects of same kind
class Ground {
    //parameters are inputs to a function .
    constructor(x, y, width, height) {
      var options = {
          isStatic : true
          //isStatic means not moving.

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };