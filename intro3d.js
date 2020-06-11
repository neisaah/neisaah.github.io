function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  orbitControl()
  background(150, 200, 250);
  
  smooth()
  noFill()
  stroke(0)
  box(50, 50, 50);
  translate(150, 0, 100);
  stroke(0)
  sphere();
  translate(-300, -150, 0);
  stroke('red');
  cylinder(50);
  translate(100, 150, -100)
  rotateY(radians(90));
  stroke(0)
  box(50, 50, 50);
}
