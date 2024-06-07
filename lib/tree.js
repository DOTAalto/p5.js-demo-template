
class Tree {
  constructor(height, x, y, z = 0) {
    //Topc to later to figure the scaling
    this.height = height;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  draw() {
    //Trunk
    stroke('brown');
    strokeWeight(10);
    line(this.x, this.y, this.x, this.y + this.height);

    //Leaves
    noStroke()
    fill('green')
    circle(this.x, this.y, 50);
  }
} 