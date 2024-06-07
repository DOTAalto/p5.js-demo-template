
class Tree {
  constructor(height, x, y, z = 0) {
    //Topc to later to figure the scaling
    this.height = height;
    this.x = x;
    this.y = y;
    this.z = z;

    //create trunk lines
    this.trunkLines = []
    for (let i = 0; i < 8; i++) {
      this.trunkLines.push( new TrunkLine(this, 4 - i - 1 ) )
    }

    //create leaves
    this.leaves = []
    for (let i = 0; i < 60; i++) {
      this.leaves.push( new Leaf(this ) )
    }
  }

  //Remember that these needs 
  draw() {
    for (const trunkLine of this.trunkLines ) {
      trunkLine.draw()
    }

    //Leaves
    for (const leaf of this.leaves ) {
      leaf.draw()
    }
  }
} 

const trunkLineWitdh = 10
const colorVar = 20 //eq. 20 means + or - 10

class TrunkLine {
  constructor(parent, offset ) {
    this.hue = 270 
    this.sat = 70 
    this.light = 50 + ( 0.5 - Math.random() ) * colorVar
    
    this.offset = offset;
    this.parent = parent;
  }
  
  draw() {
    //Trunk
    stroke(this.hue, this.sat, this.light);
    //stroke('green')
    strokeWeight(trunkLineWitdh);

    const draw_x = this.parent.x + this.offset * trunkLineWitdh
    line( draw_x, this.parent.y, draw_x, this.parent.y + this.parent.height);

  }
}

class Leaf {
  constructor(parent, maxdist=400) {
    this.hue = 160 
    this.sat = 70 
    this.light = 50 + ( 0.5 - Math.random() ) * colorVar
    
    this.xoffset = ( 0.5 - Math.random() ) * maxdist;
    this.yoffset = ( 0.5 - Math.random() ) * maxdist;

    this.parent = parent;
  }

  draw() {
    //Leaves
    noStroke()
    fill(this.hue, this.sat, this.light)

    const x = this.parent.x + this.xoffset
    const y = this.parent.y + this.yoffset

    circle( x, y, 100);

  }
}