var y = 400;

function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  if(!keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)){
    background(255);
    y = 400;
  }
  
  if( keyIsDown(UP_ARROW)){
    for( var i = 0; i < allCircles.length; i++){
      var eachCircle = allCircles[ i ]
      eachCircle.moveUp();
    }
  }
  else if( keyIsDown(DOWN_ARROW)){
    for( var i = 0; i < allCircles.length; i++){
      var eachCircle = allCircles[ i ]
      eachCircle.moveDown();
    }
  }
  else{
    allCircles = rainbow();
  }
  
}

function Circle(d, colors, x, y){
  //d, x, y = number
  //color = color object
  this.y = y
  this.x = x
  this.d = d
  this.colors = colors
  fill(colors);
  ellipse(x, y, d, d);
  
}

Circle.prototype.moveUp = function(){
  this.y = this.y - 3
  this.update(this.d, this.x, this.y, this.colors);
}

Circle.prototype.moveDown = function(){
  this.y = this.y + 3
  this.update(this.d, this.x, this.y, this.colors);
}

Circle.prototype.update = function(d, x, y, colors){
  fill(colors);
  ellipse(x, y, d, d);
}

function rainbow(){

  var allColors = [ [255, 0, 0], [255, 165, 0], [255, 255, 0], [0, 255, 0], [0, 0, 255], [0, 0, 128], [160, 32, 240] ];
  
  var circles = []
  for( var x = 50, i = 0; x < 800; x += 115, i++){
    
    var newCircle = new Circle( 90, allColors[i], x, y);
    circles.push(newCircle)
  }
  return circles
}