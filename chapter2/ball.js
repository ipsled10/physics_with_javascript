function Ball(radius, color){
  this.radius = radius;
  this.color = color;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

Ball.prototype.draw = function(context){
  context.fillStyle = this.color;
  context.beginPath();
  context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
  context.closePath();
  context.fill();
}
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var num_balls = 3;
var g = 1;
var radius = 10;
window.onload = init();


function init(){
  var color = ["green","red","yellow"];
  balls = new Array();
  for(var i=0;i < num_balls;i++){
    var ball = new Ball(radius,color[Math.random()*4]);
    ball.x = 50;
    ball.y = 50;
    ball.vx = Math.random()*5;
    ball.vy = (Math.random()-0.5)*4;
    ball.draw(context);
    balls.push(ball);
}
setInterval(on_each_step,1000/60);
}
function on_each_step(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  for(var i=0;i<num_balls;i++){
    var ball = balls[i];
    ball.vy +=g;
    ball.x += ball.vx;
    ball.y += ball.vy;
    if(ball.y > canvas.height - radius){
      ball.y = canvas.height -radius;
      ball.vy *= -0.8;
    }
    if(ball.x > canvas.width + radius){
      ball.x = -ra
    }
    ball.draw(context);
  }
}
