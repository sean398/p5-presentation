function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(150);
  stroke(0);
  noFill();
  beginShape();
  vertex(30, 70); // first point
  ellipse(25, 25, 10, 10);
  ellipse(100, 50, 10, 10);
  point(100, 50);
  bezierVertex(25, 25, 100, 50, 50, 100);
  bezierVertex(50, 140, 75, 140, 120, 120); // if first 2 numbers are changed to 20, 130 it becomes continuous
  endShape();
}

function sayHello(name) {
  console.log("hahaha" + name);
}

console.log("hehehe");
