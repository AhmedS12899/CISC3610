var canvas = document.getElementById("cartoon");
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Drawing house
//draw pentagon
c.beginPath();
c.moveTo(300,500); 
c.lineTo(600,500);
c.lineTo(600,300);
c.lineTo(300*1.5,200);
c.lineTo(300,300);
c.lineTo(300,500);
c.strokeStyle = "black";
c.fillStyle = "#E5E7D9";
c.fill();
c.stroke();

//draw garage
c.lineTo(100,500);
c.lineTo(100,550*3/4);
c.lineTo(300,550*3/4);
c.fill();
c.stroke();