var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

//Tree
    c.beginPath(); 
    c.moveTo(500, 200); 
    c.lineTo(450, 300); 
    c.lineTo(550, 300); 

    c.moveTo(500, 250); 
    c.lineTo(430, 400); 
    c.lineTo(570, 400); 
    c.fillStyle="green";
    c.fill();

    c.beginPath(); 
    c.fillStyle="brown";
    c.fillRect(485,400,30,180);
    c.fill();
	c.closePath();

	//Tree
    c.beginPath(); 
    c.moveTo(700, 200); 
    c.lineTo(650, 300); 
    c.lineTo(750, 300); 

    c.moveTo(700, 250); 
    c.lineTo(630, 400); 
    c.lineTo(770, 400); 
    c.fillStyle="green";
    c.fill();

    c.beginPath(); 
    c.fillStyle="brown";
    c.fillRect(685,400,30,200);
    c.fill();
	c.closePath();

	//tree3
	c.beginPath(); 
    c.moveTo(900, 200); 
    c.lineTo(850, 300); 
    c.lineTo(950, 300); 

    c.moveTo(900, 250); 
    c.lineTo(830, 400); 
    c.lineTo(970, 400); 
    c.fillStyle="green";
    c.fill();

    c.beginPath(); 
    c.fillStyle="brown";
    c.fillRect(885,400,30,200);
    c.fill();
	c.closePath();

	//mountain
	c.beginPath(); 
    c.moveTo(1250, 100); 
    c.lineTo(1025, 680); 
    c.lineTo(1480, 680); 
    c.fillStyle="gray";
    c.fill(); 

		//cloud
		c.beginPath();
		c.arc(200, 100, 40, 0, Math.PI * 2, true);
		c.arc(160, 120, 40, 0, Math.PI * 2, true);
		c.arc(200, 130, 40, 0, Math.PI * 2, true);
		c.arc(240, 120, 40, 0, Math.PI * 2, true);
		c.fillStyle="white";
		c.fill();
		c.closePath();

		c.beginPath();
		c.arc(200, 100, 40, 0, Math.PI * 2, true);
		c.arc(160, 120, 40, 0, Math.PI * 2, true);
		c.arc(200, 130, 40, 0, Math.PI * 2, true);
		c.arc(240, 120, 40, 0, Math.PI * 2, true);
		c.fillStyle="white";
		c.fill();
		c.closePath();

		c.beginPath();
		c.arc(300, 100, 40, 0, Math.PI * 2, true);
		c.arc(260, 120, 40, 0, Math.PI * 2, true);
		c.arc(300, 130, 40, 0, Math.PI * 2, true);
		c.arc(340, 120, 40, 0, Math.PI * 2, true);
		c.fillStyle="white";
		c.fill();
		c.closePath();

		c.beginPath();
		c.arc(500, 100, 40, 0, Math.PI * 2, true);
		c.arc(460, 120, 40, 0, Math.PI * 2, true);
		c.arc(500, 130, 40, 0, Math.PI * 2, true);
		c.arc(540, 120, 40, 0, Math.PI * 2, true);
		c.fillStyle="white";
		c.fill();
		c.closePath();

		c.beginPath();
		c.arc(800, 100, 40, 0, Math.PI * 2, true);
		c.arc(760, 120, 40, 0, Math.PI * 2, true);
		c.arc(800, 130, 40, 0, Math.PI * 2, true);
		c.arc(840, 120, 40, 0, Math.PI * 2, true);
		c.fillStyle="white";
		c.fill();
		c.closePath();

		c.beginPath();
		c.arc(1100, 100, 40, 0, Math.PI * 2, true);
		c.arc(1060, 120, 40, 0, Math.PI * 2, true);
		c.arc(1100, 130, 40, 0, Math.PI * 2, true);
		c.arc(1140, 120, 40, 0, Math.PI * 2, true);
		c.fillStyle="white";
		c.fill();
		c.closePath();
//Sun
c.beginPath();
c.arc(30, 80, 90, 0, Math.PI * 2, false);
c.strokeStyle = "#f9d71c";
c.fillStyle = "#f9d71c";

//Edges of Sun
c.moveTo(195, 85);
c.lineTo(10, 150);
c.lineTo(10, 30);

c.moveTo(168, 2); //TOP SUN EDGE
c.lineTo(0, 168);
c.lineTo(10, 20);

c.moveTo(160, 170);
c.lineTo(10, 150);
c.lineTo(10, 20);

c.moveTo(90, 240);
c.lineTo(5, 160);
c.lineTo(20, 20);

c.fill();
c.stroke();

//High & Short Grass
for (let i = 0; i <= canvas.width; i++) {
//Grass
  c.strokeStyle = "#567d46";
  c.fillStyle = "#567d46";
  c.beginPath();
  c.moveTo(100 + i * 150, 606);
  c.lineTo(0 + i * 150, 606);
  c.lineTo(50 + i * 150, 550);

  c.moveTo(50 + i * 150, 605); //X must be changed
  c.lineTo(-50 + i * 150, 605); //X must be changed
  c.lineTo(0 + i * 150, 562);
  c.fill();
  c.stroke();
}

//Dirt
for (let i = 0; i <= canvas.width; i++) {
  c.strokeStyle = "#9b7653";
  c.fillStyle = "#9b7653";  
  c.fillRect(0 + (i * 100), 595, 200, 500);
  c.fill();
  c.stroke();
}




//House
c.moveTo(20, 550);
c.lineTo(400,550);
c.moveTo(20, 300);
c.lineTo(400,300);
c.moveTo(20, 300);
c.lineTo(20,550)
c.moveTo(400, 300);
c.lineTo(400,550);
c.moveTo(250, 450);
c.lineTo(250,550);
c.moveTo(175, 450);

c.lineTo(250,450);
c.moveTo(175,450);
c.lineTo(175,550);
c.moveTo(210,175);
c.lineTo(20,300);
c.moveTo(210,175);
c.lineTo(400,300);

c.lineWidth = 5;
c.strokeStyle = "black";
c.fillStyle = "red";
c.fillRect(20, 300, 380, 250);
c.fill();
c.stroke();

//Roof
c.beginPath();
c.fillStyle = "darkred";
c.strokeStyle = "black";
c.moveTo(210, 175);
c.lineTo(20, 300);
c.lineTo(400, 300);
c.closePath();
c.lineWidth = 5;
c.fill();
c.stroke();


//Doorknob
c.beginPath();
c.arc(184, 500, 3, 0, Math.PI * 2, false);
c.fillStyle = "black";
c.closePath();
c.stroke();
c.fill();

//Windows
c.beginPath(); 
c.fillStyle = "white";
c.fillRect(50, 325, 110, 85); //Left
c.fillRect(250, 325, 110, 85);//Right
c.closePath();
c.stroke();
c.fill();

c.strokeStyle = "red";
c.fillStyle = "red";
c.moveTo(105,410);
c.lineTo(105,325);
c.moveTo(159,365);
c.lineTo(50,365);

c.moveTo(305,410);
c.lineTo(305,325);
c.moveTo(250,365);
c.lineTo(360,365);

c.strokeStyle = "black";
c.fillStyle = "darkred";
c.fillRect(590, 495, 60, 30);
c.stroke();
c.fill();

//Concrete 
c.strokeStyle = "grey";
c.fillStyle = "grey";  
c.fillRect(0, 550, 600, 45);
c.stroke();
c.fill();

//Mailbox
c.strokeStyle = "black";
c.fillStyle = "#BA8C63";  
c.fillRect(610, 525, 15, 70);
c.stroke();
c.fill();

c.beginPath();
c.strokeStyle = "#DA291C";
c.fillStyle = "	#DA291C"; 
c.fillRect(605, 495, 5, 30);
c.moveTo(608, 492);
c.lineTo(608, 490);
c.lineTo(612, 492);
c.closePath();
c.lineWidth = 5;
c.fill();
c.stroke();