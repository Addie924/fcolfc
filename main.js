canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var last_position_of_mouse_x, last_position_of_mouse_y;
var width = 1; 
var color = "black";

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.rect(150, 143, 430,200);
    ctx.stroke();
    ctx.beginPath();
  //bluering
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
//blackring
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
//redring
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
//greenring
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 255, 40, 0, 2* Math.PI);
ctx.stroke();
 //yellowring
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(300, 255, 40, 0, 2* Math.PI);
ctx.stroke();

    
   


    



