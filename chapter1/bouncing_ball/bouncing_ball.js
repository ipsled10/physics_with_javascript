var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radius = 20;
var color = "#0000ff";
var g = 0.1;//accelartion due to gravity
var x = 50;//initial horizontal position
var y = 50;//initial vertical position
var vx= 2;//initial horizontal speed
var vy = 0;//initial vertical speed

window.onload = init;
function init(){
  setInterval(on_each_step,1000/60);//60 frequency per second
}
function on_each_step(){
  vy +=g;//gravity increases the vertical speed
  x +=vx; // horizontal speed increases horizontal position
  y +=vy; //vertical speed increases vertical position
  if(y > canvas.height - radius){// if the ball hits the ground
    y = canvas.height - radius;//reposition it at the ground
    vy *= -0.8;// then reverse and reduce its vertical speed
  }
  if(x > canvas.width + radius){//if ball goes beyond canvas
    x = -radius;//warp it around
  }
  draw_ball();//draw the ball
}

function draw_ball(){
  with(context){
    clearRect(0,0,canvas.width,canvas.height);
    fillStyle = color;
    beginPath();
    arc(x,y,radius,0,2*Math.PI,true);
    closePath();
    fill();
  }
}