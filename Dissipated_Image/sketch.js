let img; //The image object
let particles = []; //The array to store the particles



let mic; //Microphone input object
let gameMode = 0; //Initialize the game Mode to 0


let x_rotation = 0; //Define x rotation
let y_rotation = 0; //Define y rotation
let pX = 0; //Previous x rotation
let pY = 0; //Previous y rotation

let settings;

let alpha = 255; //Background alpha value

function preload(){
  img = loadImage('woman.jpg'); //Load the image
}

function setup() {
  createCanvas(718, 950, WEBGL); //Declare WEBGL Mode
  background(0); 
  pixelDensity(1); //Set up pixel density to 1
  loadImagePixels(); //Scan the pixels of image and store it in particles array
  
  //Set up the audio input object
  mic = new p5.AudioIn();
  mic.start();
  
  //Set up the user interface - GUI
  settings = {
    Fall: fall, //Particles fall 
    Explosure: explosure, //Particles flow up
    Trajectory: trajectory, //Keep the moving particles' trajectory
    X: 0, //X rotation
    Y: 0, //Y rotation
    Redraw: restart //Refresh the particles array and the canvas
  }
  
  //GUI Element setup
  let gui = new dat.GUI(); 
  gui.add(settings, "Fall");
  gui.add(settings, "Explosure");
  gui.add(settings, "Trajectory");
  gui.add(settings, "X",-360,360,2); //From -360 to 360 degree, step 2
  gui.add(settings, "Y",-360,360,2); //From -360 to 360 degree, step 2
  gui.add(settings, "Redraw"); 
}

function draw() {
  rotateX(x_rotation); //Rotate the X 
  rotateY(y_rotation); //Rotate the Y
  fill(0,alpha); //Update the background color
  rect(-width/2,-height/2,width,height); //Background canvas
  let vol = mic.getLevel(); //Get the volume of the audio input
  
  //Update and draw each particles in array
  for(let i = 0; i < particles.length; i++){
    particles[i].update(); //Update the position of the particle
    particles[i].render(); //Draw the particle
  }
  //If the audio input volume is smaller than 0.1
  //Trigger the random part of image to dissipated
  if(vol > 0.1){
    let index = int(random(0,particles.length));
    let x = particles[index].x+width/2;
    let y = particles[index].y+height/2;
    for(let i = 0; i < particles.length; i++){
      particles[i].dissipated(x,y,gameMode);
    }
  }
  
  y_rotation += (pY-settings.Y)*0.01; //Update y rotation
  x_rotation += (pX-settings.X)*0.01; //Update x rotation
  pY = settings.Y; //Update the previous Y value
  pX = settings.X; //Update the previous X value
}
      

function loadImagePixels(){
  for(let x = 0; x < img.width; x += 3){
    for(let y = 0; y < img.height; y += 3){
      let c = img.get(x,y); //Get the pixel color at x y position 
      
      //If the pixels is not the background, generate a particle based on this pixels information
      if(((red(c)+green(c)+blue(c))/3) != 0){
        let p = new Particle(x-img.width/2,y-img.height/2,img.get(x,y),5);
        particles.push(p); //Add the particle into array
      } 
    }
  }
}

//Dissipated the area of image around the mouse position
function mousePressed(){
  for(let i = 0; i < particles.length; i++){
    particles[i].dissipated(mouseX,mouseY,gameMode);
  }
}

//Change the game mode to 0
function fall(){
  gameMode = 0;
}

//Change the game mode to 1
function explosure(){
  gameMode = 1;
}

//Change the background's alpha channel
function trajectory(){
  if(alpha == 255) alpha = 0;
  else alpha = 255;
}

//Refresh the particles and reload the image to particles array
function restart(){
  particles = []; //Remove all element in array
  loadImagePixels(); //Reload the particles array
}



//The class of the particle
class Particle {
  constructor(x, y, color, size) {
    this.x = x; // x position of particle
    this.y = y; // y position of particle
    this.z = 0; // z position of particle
    this.color = color; //color of the particle
    this.size = size; //particle's size
    this.yspeed = 0; //particle's speed in y direction
    this.xspeed = 0; //particle's speed in x direction
    this.upSpeed = 0; //particle's speed in z direction
    this.height = (red(color)+blue(color)+green(color))/6; //The predefined depth of this particle based on the britness of the pixel
    this.mode = 0; //particle mode
  }

  update() {
    //If mode is 0, fall down the particle
    if(this.mode == 0)
    {
      this.x += this.xspeed;
      this.y += this.yspeed;
    }
    //If mode is 1, up the particle out of the screen in 3D space
    else if(this.mode == 1)
    { 
      if(this.z <= this.height)
        this.z += this.upSpeed;
    }
  }
  render() {
    if(this.mode == 1){
      push(); //push matrix
      noStroke();
      fill(this.color); //Fill the color of the ellipse
      translate(this.x,this.y,this.z); //Translate the position of the ellipse
      ellipse(0,0,this.size,this.size); //Draw the ellipse
      pop();  //Pop matrix
    }else if(this.mode == 0){
      noStroke();
      fill(this.color); //Fill the color of the ellipse
      ellipse(this.x,this.y,this.size,this.size); //Draw the ellipse at x y position
    }
  }
  dissipated(_x,_y,_m){
    //Calculate the distance between the _x,_y and this particle's pisiton
    //If is close enough, trigger the movement of the particle
    if(abs(dist(_x-width/2,_y-height/2,this.x,this.y)) <= random(10,40)){
      this.mode = _m; //Update this particle's mode to _m
      this.setSpeed(random(2,4)); //Update the speeds of this particle
    }
  }
  setSpeed(s){
    //set a random speed to the particle
    if(this.mode == 0){
      this.yspeed = random(0.1,10*s); //Update Y speed
      this.xspeed = random(-2*s,2*s); //Update X speed
    }else if(this.mode == 1){
      this.upSpeed = random(3,6); //Update Z speed
    }
  }
}

