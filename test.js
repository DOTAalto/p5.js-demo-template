let angle1 = 0;
let angle2 = 0;
let scalar = 70;
let diameter;
let angle = 0;

function setup() {
  const app = createCanvas(1920, 1080)
  app.canvas.style = '' // Remove default scaling
  app.parent(document.body)

  background(0)
  noLoop()
}

function setup() {
  createCanvas(1980, 1080);
  noStroke();
  rectMode(CENTER);
  
  diameter = height - 10;
  // noStroke();
  // fill(255, 204, 0);
}

function draw() {
  background(0);

  let ang1 = radians(angle1);
  let ang2 = radians(angle2);

  let x1 = width / 2 + scalar * cos(ang1);
  let x2 = width / 2 + scalar * cos(ang2);

  let y1 = height / 2 + scalar * sin(ang1);
  let y2 = height / 2 + scalar * sin(ang2);

  // fill(255);
  // rect(width * 0.5, height * 0.5, 140, 140);

  fill(0, 102, 153);
  ellipse(x1, height * 0.5 - 12, scalar, scalar);
  ellipse(x2, height * 0.5 + 120, scalar, scalar);
  
  let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;
  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;

  ellipse(0, height / 2, d1, d1);
  ellipse(width / 2, height / 2, d2, d2);
  // ellipse(width, height / 2, d3, d3);

  angle += 0.01;
  
  

  // fill(255, 204, 0);
  // ellipse(width * 0.5 - 120, y1, scalar, scalar);
  // ellipse(width * 0.5 + 120, y2, scalar, scalar);

  angle1 += 2;
  angle2 += 3;
}
