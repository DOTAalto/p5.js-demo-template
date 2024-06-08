
class Tree {
  constructor(x, y, z = 0) {
    //Topc to later to figure the scaling
    this.height = 400;
    this.vec = createVector(x, y, z)

    this.x = x;
    this.y = y;
    this.z = z;

    //create trunk lines
    this.trunkLines = []
    for (let i = 0; i < 5; i++) {
      this.trunkLines.push( new TrunkLine(this) )
    }

    //create leaves
    this.leaves = []
    for (let i = 0; i < 40; i++) {
      this.leaves.push( new Leaf(this) )
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
  constructor(parent, maxdist=30 ) {
    this.hue = 270 
    this.sat = 70 
    this.light = 50 + ( 0.5 - Math.random() ) * colorVar
    
    let xoff = ( 0.5 - Math.random() ) * maxdist;
    let zoff = ( 0.5 - Math.random() ) * maxdist;

    this.offset = createVector(xoff, 0, zoff)

    this.parent = parent;
  }
  
  draw() {

    push();
    colorMode(HSL);

    stroke(this.hue, this.sat, this.light);
    strokeWeight(trunkLineWitdh);

    const trunkVec =  this.parent.vec.copy();
    trunkVec.add(this.offset)
    translate(trunkVec);

    cylinder( 10, this.parent.height);
    pop();

  }
}

class Leaf {
  constructor(parent, maxdist=200) {
    this.hue = 160 
    this.sat = 70 
    this.light = 50 + ( 0.5 - Math.random() ) * colorVar
    
    let xoff = ( 0.5 - Math.random() ) * maxdist;
    let yoff = ( 0.5 - Math.random() ) * maxdist;
    let zoff = ( 0.5 - Math.random() ) * maxdist;

    this.offset = createVector(xoff, yoff, zoff)

    this.parent = parent;
  }

  draw() {
    push();
    colorMode(HSL);
    noStroke();
    fill(this.hue, this.sat, this.light);

    const leafVec = this.parent.vec.copy();
    leafVec.add(this.offset);
    translate(leafVec);
    translate(0, -this.parent.height/2, 0);

    sphere(30);
    pop();
  }
}