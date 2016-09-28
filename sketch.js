var randomWord = [];
var colors=[];
var i=0;

function setup() {
  
  createCanvas(300,300);
  
  randomWord.push("Red");
  randomWord.push("Blue");
  randomWord.push("Grey");
  randomWord.push("Yellow");
  randomWord.push("Black");
  colors.push("orange");
  colors.push("green");
  colors.push("skyblue");
  colors.push("pink");
  colors.push("purple");
  
  
}

function draw() {
  while (i<randomWord.length){
  var currentWord= randomWord[i];
  fill(colors[i]);
  text(currentWord, random(width), random(height));
   i=i+1;
   
  
}
}