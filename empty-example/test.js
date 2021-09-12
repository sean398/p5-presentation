function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}
// // basic
// const a = 1+1 //a = 2
// const a = 1-1 //a = 0
// const a = 2/1 //a = 2
// const a = 2*2 //a = 4
// const a = 2%2 //a = 0

// // = , (== , ===)
// const a = (2 == '2')// true
// const a = (2 === '2')// false

// // || , &&
// const b = (1+1 === 2) || (1+1 == 3) //true
// const a = (1+1 === 2) && (1+1 == 3) //false

// //   > , < , >= , <=

// const a = 1 < 2 // true
// const a = 1 > 2 // false
// const a = 2 >= 2 && 2 >= 1 // true
// const a = 1<=1 || 1 <= 2 // true

// // !
// const a = !((1+1 === 2) && (1+1 == 3)) //true

function draw() {
  stroke(255, 0, 0);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  stroke(0);
  noFill();
  if (
    (mouseX < width / 2 && mouseY < height / 2) ||
    (mouseX > width / 2 && mouseY > height / 2)
  ) {
    ellipse(mouseX, mouseY, 125, 125);
  } else if (mouseX > width / 2 && mouseY > height / 2) {
    ellipse(mouseX, mouseY, 125, 125);
  } else {
    rect(mouseX, mouseY, 125, 125);
  }
}

// Summary
// Use arc() when you need a segment of a circle or an ellipse. You can’t make continuous arcs or use them as part of a shape.
// Use curve() when you need a small curve between two points. Use curveVertex() to make a continuous series of curves as part of a shape.
// Use bezier() when you need long, smooth curves. Use bezierVertex() to make a continuous series of Bézier curves as part of a shape.
