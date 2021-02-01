var hr,mn,sc;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
  mn = minute();
  sc = second();

  
  
  angleMode(DEGREES);
  
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc, 0, 60, 0, 360);

  stroke(0,0,0);
  strokeWeight(2);
  line(280,220,400,200);

  let h = hour();
  text('Current hour:\n' +h, 5, 90);
  

  let m = minute();
  text('Current minute:\n' +m, 5, 130);
  

  let s = second();
  text('Current second:\n' +s, 5, 50);
  

  angleMode(DEGREES);

  arc(200, 200, 100, 100, 60, PI + QUARTER_PI);

  

  drawSprites();
}