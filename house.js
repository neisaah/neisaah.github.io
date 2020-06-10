var wally = 300;

function setup() {
  createCanvas(800, 700);
}

function house(wallx, doorx, doory, bushdiam) {
  noStroke();
  
  //walls
  fill('cornsilk');
  rect(wallx, wally, 200, 150);
  
  //roof
  fill('saddlebrown');
  triangle(wallx + 100, wally - 100, wallx - 30, wally, wallx + 230,wally);
  
  //left window
  fill('lightblue');
  rect(wallx + 15, wally + 30, 30, 30);
  noFill();
  strokeWeight(5);
  stroke(255);
  rect(wallx + 15, wally + 30, 30, 30);
  
  //right window
  fill('lightblue');
  rect(wallx + 155, wally + 30, 30, 30);
  noFill();
  strokeWeight(5);
  stroke(255);
  rect(wallx + 155, wally + 30, 30, 30);
  
  //door
  noStroke();
  fill('peru');
  rect(doorx, doory, 40, 75);
  
  //doorknob
  fill('saddlebrown');
  ellipse(doorx + 5, doory + 30, 5, 5);
  
  //left bush
  fill('green');
  ellipse(wallx, wally + 120, bushdiam, bushdiam);
  
  //right bush
  fill('green');
  ellipse(wallx + 200, wally + 120, bushdiam, bushdiam);
}

function draw() {
  background('lightskyblue');
  house(400, 450, 350, 80);
  house(100, 175, 375, 100);
  fill(220);
  rect(0, 450, 800, 50);
  fill(35);
  rect(0, 500, 800, 200);
}
