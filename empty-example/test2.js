function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  stroke(255, 0, 0);
  stroke(0);
  for (let i = 0; i < height / 2; i = i + 10) {
    line(0, height / 2 + i, width, height / 2 + i);
  }
  for (let i = 10; i < width; i = i + 10) {
    line(i, height / 2, i, height);
  }
  for (let i = 0; i <= width * 2; i += 10) {
    line(i, height / 2, 0, height / 2 + i);
  }
  let test = 0;
  for (let i = 0; i <= height * 2; i += 10) {
    if (height - i < height / 2) {
      test += 1;
    }
    line(width / 2 + test * 10, height - i + test * 10, width / 2 + i, height);
  }
}
