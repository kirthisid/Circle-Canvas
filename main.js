canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width=3;
color="blue";
mouseEvent="empty";
lastx=0;
newx=0;
lasty=0
newy=0



canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mouseEvent="mousedown"
}

canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
newx=e.clientX-canvas.offsetLeft
newy=e.clientY-canvas.offsetTop
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(newx,newy,40,0,2 * Math.PI)
    ctx.stroke()
}
lastx=newx
lasty=newy}