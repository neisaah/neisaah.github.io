function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(random(255));
  noStroke();
  
  for (var x = 0; x <= width; x += random(10)) {
    for (var y = 0; y <= height; y += random(10)) {
      fill(random(255), random(255), random(255), random(255));
      ellipse(x, y, random(20), random(20));
    }
  }
}
