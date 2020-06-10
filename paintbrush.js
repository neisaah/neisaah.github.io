function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // magenta pen
  noStroke();
  fill(255, 0, 255, 160);
  ellipse(mouseX, mouseY, 20, 20);
  print("drawing...")
  // eraser
  if(mouseIsPressed) {
    stroke(1);
    fill(0)
    ellipse(mouseX, mouseY, 20, 20);
    
    // this prints "drawing..." and "erasing..." because this loop is inside the draw loop
    print("erasing...")
  }
}
