var pos = {
  x: Math.floor((Math.random() * 600)),
  y: Math.floor((Math.random() * 400))
};
var dir = {
  y: 1,
  x: 1
};

var color1 = 0
var color2 = 0
var color3 = 0


function setup() {
  createCanvas(600, 400);
}

function draw() { 
  
  background(0);
  
  ellipse(pos.x, pos.y, 50,50)
  
  pos.x += 1 * dir.x;
  pos.y += 2 * dir.y;  
  
  if (pos.x >= 575) {
    pos.x -= 1;
    pos.y -= 2;
    dir.x *= -1
    fill (color1, color2, color3);   
    color1 = color1 + 20;
    color2 = color2 + 30;
    color3 = color3 + 40;
  }  
  
  else if (pos.y >= 375) {   //bottom
    pos.y -= 2;
    pos.x -= 1;
    dir.y *= -1
    fill (color1, color2, color3);  
    color1 = color1 + 20;
    color2 = color2 + 30;
    color3 = color3 + 40;
  }
  
  else if (pos.x <= 25) {
    pos.x += 1;
    pos.y += 2;
    dir.x *= -1
    fill (color1, color2, color3);  
    color1 = color1 + 5;
    color2 = color2 + 35;
    color3 = color3 + 60;
  }
  
  else if (pos.y  <= 25) {
    pos.y += 2;
    pos.x += 1;
    dir.y *= -1 
    fill (color1, color2, color3);
   
    color1 = color1 + 10;
    color2 = color2 + 50;
    color3 = color3 + 60;
  }
  
  if (mouseIsPressed) {
    var pos2 = {
      x: Math.floor((Math.random() * 600)),
      y: Math.floor((Math.random() * 400))
    };
    var dir2 = {
      y: 1,
      x: 1
    };
    
    ellipse(pos2.x, pos2.y, 50,50);
  }
}
