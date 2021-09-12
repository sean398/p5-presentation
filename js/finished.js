var space = 0;
var offset = 0;

//set each chart's postiton
const firstPos = {
  x: 100,
  y: 100,
};
const secoondPos = {
  x: 300,
  y: 100,
};
const thirdPos = {
  x: 500,
  y: 100,
};
const fourthPos = {
  x: 100,
  y: 300,
};
const fifthPos = {
  x: 300,
  y: 300,
};
const sixthPos = {
  x: 500,
  y: 300,
};

function setup() {
  let cnv = createCanvas(615, 400);
  cnv.parent("p5_container-finished");
  // use degree angle mode
  angleMode(DEGREES);
}

function draw() {
  // clear before each render
  clear();
  background(0);
  // use mouseX and mouseY to contral the shapes
  space = (mouseX - 300) / 20;
  offset = (mouseY - 300) / 20;

  //first
  noStroke();
  fill(241, 97, 30);
  // use loop function to render a circle
  for (let i = 0; i < 360; i += 10) {
    push();
    // rotate cneter
    translate(firstPos.x, firstPos.y);
    rotate(i);
    //render rect and triangle
    console.log(space);
    rect(10 + space, 10 + space, 20 + offset, 20 + offset);
    triangle(
      10 + space,
      10 + space,
      30 + space,
      40 + offset,
      60 + offset,
      60 + offset
    );
    pop();
  }

  //second
  fill(116, 175, 16);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(600, 150);
    rotate(i);
    //render some ellipse
    ellipse(80 + space, 80 + space, 50 + offset, 10 + offset);
    pop();
    push();
    translate(600, 150);
    rotate(i);
    ellipse(50 + space, 50 + space, 50 + offset, 10 + offset);
    pop();
    push();
    translate(600, 150);
    rotate(i);
    ellipse(20 + space, 20 + space, 50 + offset, 10 + offset);
    pop();
  }

  //third
  strokeWeight(5);
  noFill();
  stroke(33, 93, 152);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(950, 150);
    rotate(i);
    //render some line and circle
    line(30 + space, 20 + space, 105 + offset, 95 + offset);
    circle(50 + space, 50 + space, 100 + offset);
    pop();
  }

  //render some rect and triangle without fill
  noFill();
  strokeWeight(2);
  stroke(241, 97, 30);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(200, 450);
    rotate(i);
    rect(30 + space, 30 + space, 30 + offset, 30 + offset);
    triangle(
      70 + space,
      30 + space,
      80 + space,
      90 + offset,
      110 + offset,
      110 + offset
    );
    pop();
  }

  noFill();
  strokeWeight(2);
  stroke(71, 184, 185);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(600, 450);
    rotate(i);
    ellipse(0 + space, 0 + space, 300 + offset, 10 + offset);
    pop();
  }

  noFill();
  strokeWeight(2);
  stroke(253, 176, 44);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(950, 450);
    rotate(i);
    circle(80 + space, 50 + space, 100 + offset);
    pop();
  }

  fill(241, 97, 30);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(200, 800);
    rotate(i);
    rect(50 + space, 50 + space, 30 + offset, 30 + offset);
    triangle(
      50 + space,
      50 + space,
      80 + space,
      90 + offset,
      110 + offset,
      110 + offset
    );
    pop();
  }

  fill(116, 175, 16);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(600, 800);
    rotate(i);
    ellipse(80 + space, 80 + space, 50 + offset, 10 + offset);
    pop();
    push();
    translate(600, 800);
    rotate(i);
    ellipse(50 + space, 50 + space, 50 + offset, 10 + offset);
    pop();
    push();
    translate(600, 800);
    rotate(i);
    ellipse(20 + space, 20 + space, 50 + offset, 10 + offset);
    pop();
  }

  strokeWeight(5);
  noFill();
  stroke("#00FFFF");
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(950, 800);
    rotate(i);
    line(30 + space, 20 + space, 105 + offset, 95 + offset);
    circle(50 + space, 50 + space, 100 + offset);
    pop();
  }
}
