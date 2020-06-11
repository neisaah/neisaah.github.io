let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(230, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
  bubble3 = new Bubble(100, 100, 10);
  bubble4 = new Bubble(500, 300, 50);
  bubble5 = new Bubble(50, 40, 5);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}



class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
  
  show() {
    stroke(200);
    strokeWeight(1);
    fill(15);
    ellipse(this.x, this.y, this.r*2);
  }
}
