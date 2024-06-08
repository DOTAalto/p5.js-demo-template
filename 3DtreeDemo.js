
let trees = [];

let speed = 2;
let angle = 0;
let radius = 500;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i = 0; i < 100; i++) {
    let x = random(-2000, 2000);
    let z = random(-5000, 0);
    trees.push(new Tree( x, 0, z))
  }
}

function draw() {
  background(20, 20, 40); // Sky blue
  noStroke();
  
  // Ground
  push();
  fill(34, 139, 34); // Forest green
  translate(0, 100, 0);
  rotateX(HALF_PI);
  plane(4000, 10000);
  pop();
  
  // Update angle for circular motion
  angle += speed * 0.01;

  // Calculate camera position
  let camX = radius * cos(angle);
  let camZ = radius * sin(angle) - frameCount * speed;

  // Set camera position and target
  camera(camX, 0, camZ, 0, 0, camZ - 500, 0, 1, 0);

  for (const tree of trees) {
    tree.draw()
  }
}
