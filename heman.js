var mainCharacter;
var gravity = 9.8/30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage;
var groundOffset = 100;
var monsterArray = [];
var health = 100;
var score = 0;


class Character {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width + 70;
    this.color = "blue";
    this.isMonster = false;
    this.isDead = false;
    this.targetX = random()*width;
  }
  
  update(){
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0) 
    {
      this.ySpeed = this.ySpeed*(-0.4);
      this.y = height-this.width*0.5-groundOffset;
    }
   this.ySpeed += gravity;
   this.y += this.ySpeed;
    
   this.xSpeed *= 0.8;
   this.x += this.xSpeed;
  }
  
  moveBadGuy(){
    var differenceX = this.targetX-this.x;
    this.xSpeed += differenceX*0.002;
    
    if(random() >= 0.98){
      this.targetX = random()*width;
      this.ySpeed -= 5;
    }
    
    
    this.isTouchingMainCharacter()
  }
  
  isTouchingMainCharacter(){
    if(mainCharacter.x + mainCharacter.width >= this.x && mainCharacter.x <= this.x+this.width && mainCharacter.y + mainCharacter.width >= this.y && mainCharacter.y <= this.y+this.width) {
      
      if(mainCharacter.y - this.y < -30){
        this.isDead = true;
        mainCharacter.ySpeed = -10;
        score++;
      } else {
        health -= 0.3;
      }
    }
  }
  
  
  draw(){
    if(this.isMonster){
      image(monsterImage, this.x, this.y, this.width, this.width + 20);
    } else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width + 20);
    }
  }
}
  

function setup() {
  createCanvas(800, 400);
  mainCharacter = new Character(200, 200, 60);
  backgroundImage = loadImage("https://i.pinimg.com/originals/30/d2/dd/30d2ddd6edb2ae5f890469360b449dd7.jpg");
  mainCharacterImage = loadImage("https://i.ya-webdesign.com/images/he-man-png.png");
  monsterImage = loadImage("https://seeklogo.com/images/M/Master_of_the_Universe_-_skeletor-logo-391AB08908-seeklogo.com.png");
  gameOverImage = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a114c1a-32d8-4564-bc0d-86c023758304/d9cl9qe-ba952676-d42b-455f-8e34-74fe96186dc6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83YTExNGMxYS0zMmQ4LTQ1NjQtYmMwZC04NmMwMjM3NTgzMDQvZDljbDlxZS1iYTk1MjY3Ni1kNDJiLTQ1NWYtOGUzNC03NGZlOTYxODZkYzYucG5nIn1dXX0.NYvpG_iovTY6mXF3_rVaU8QlUFJTpnQhnrQWSPA8ctw");
  
  for(var i = 0;i<5;i++){
    var newMonster = new Character(500+20*i, 100, 60);
    newMonster.isMonster = true;
    monsterArray.push(newMonster);
  }

}

function draw() {
  if(health <= 0){
    background(0);
    image(gameOverImage, 180, 110, 420, 100);
    fill("red");
    text("\nSCORE: " + score, 350, 180, 200, 50);
    return 
  }
  
  
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height);
  
  if(keyIsDown(LEFT_ARROW)){
    //move left
    mainCharacter.xSpeed -= 1.0;
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    //move right
    mainCharacter.xSpeed += 1.0;
  }
  
  mainCharacter.update();
  mainCharacter.draw()
  
  //draw health bar
  fill("red");
  stroke("black");
  rect(10, 10, health*2, 20);
  
  fill("white");
  textSize(20);
  text(score, width-40, 10, 40, 20);
  
  
  var anyCatAlive = false;
  
  for(var i = 0;i<monsterArray.length;i++)
  {
    if(monsterArray[i].isDead){
      //do nothing! (because monster is dead)
    } else { 
      anyCatAlive = true;
      monsterArray[i].update();
      monsterArray[i].moveBadGuy();
      monsterArray[i].draw() ;
    }
  }
  
  if(anyCatAlive === false){
    for(i = 0;i<3;i++){
      var newMonster = new Character(500+20*i, 100, 60);
      newMonster.isMonster = true;
      monsterArray.push(newMonster);
    }
  }
  
}

function keyPressed(){
   //&& mainCharacter.y >= 260
  if(key === " "){
    //JUMP!
    mainCharacter.ySpeed -= 10.0;
  }
}
