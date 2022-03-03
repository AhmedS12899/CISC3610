var canvas = document.getElementById("cartoon");
var c = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;


//Drawing house
//draw pentagon
c.beginPath();
c.moveTo(0,450);
c.lineTo(100,450);
c.moveTo(600,450);
c.lineTo(700,450);
c.moveTo(300,480); 
c.lineTo(600,480);
c.lineTo(600,240);
c.lineTo(300*1.5,140);
c.lineTo(300,240);
c.lineTo(300,480);
c.strokeStyle = "black";
c.fillStyle = "#E5E7D9";
c.fill();
c.stroke();
//draw garage
c.lineTo(100,480);
c.lineTo(100,480*3/4);
c.lineTo(300,480*3/4);
c.fill();
c.stroke();