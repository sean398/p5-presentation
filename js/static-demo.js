var angle = 0;
let rot = 0;

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
}

function draw() {
  if (rot > 360) {
    rot = 0;
  } else {
    rot += 0.1; // rotate speed
  }

  //first
  angleMode(DEGREES);
  background(0);
  fill(241, 97, 30);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(firstPos.x, firstPos.y);
    rotate(i + rot);
    rect(10, 10, 20, 20);
    triangle(10, 10, 30, 40, 60, 60);
    pop();
  }

  //second
  fill(116, 175, 16);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(secoondPos.x, secoondPos.y);
    rotate(i - rot);
    ellipse(47, 43, 30, 5);
    pop();
    push();
    translate(secoondPos.x, secoondPos.y);
    rotate(i);
    ellipse(35, 35, 35, 5);
    pop();
    push();
    translate(secoondPos.x, secoondPos.y);
    rotate(i);
    ellipse(20, 20, 40, 5);
    pop();
  }

  //third
  strokeWeight(5);
  noFill();
  stroke(33, 93, 152);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(thirdPos.x, thirdPos.y);
    rotate(i + rot);
    line(5, 10, 65, 45);
    circle(35, 45, 50);
    pop();
  }

  //fourth
  noFill();
  strokeWeight(2);
  stroke(241, 97, 30);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(fourthPos.x, fourthPos.y);
    rotate(i + rot);
    rect(15, 15, 15, 15);
    triangle(35, 15, 40, 45, 55, 55);
    pop();
  }

  //fifth
  noFill();
  strokeWeight(2);
  stroke(71, 184, 185);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(fifthPos.x, fifthPos.y);
    rotate(i - rot);
    ellipse(0, 0, 150, 10);
    pop();
  }

  //sixth
  noFill();
  strokeWeight(2);
  stroke(253, 176, 44);
  for (let i = 0; i < 360; i += 10) {
    push();
    translate(sixthPos.x, sixthPos.y);
    rotate(i + rot);
    circle(40, 25, 50);
    pop();
  }
}
