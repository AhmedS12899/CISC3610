var fruit = [
    {name:"Apple", quantity:20, color:"red"},
    {name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:3, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:8, color:"purple"},
];


var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

c.fillText("Fruit", 250, 300);
//creating x and y axis of bar chart and labeling it

var xStart = 80;
var yStart = 729;

c.beginPath();
c.moveTo(xStart, yStart);
c.lineTo(xStart+420, yStart);
c.strokeStyle = "black";
c.moveTo(xStart, yStart);
c.lineTo(xStart, yStart-420)

for(let i = 0;i<6;i++){
    if(i<1){
        c.fillText(fruit[i].name, 89+70*i, yStart+20);
    }
    else{
        c.moveTo(xStart+i*70, yStart+10);
        c.lineTo(xStart+i*70, yStart-10);
        c.fillText(fruit[i].name, 89+70*i, yStart+20);
    }
}

for(let i = 0;i<6;i++){
    if(i<1){
    c.fillText(0, 50, yStart);
    }
    else{
        c.moveTo(xStart, yStart-i*70);
        c.lineTo(xStart-20, yStart-i*70);
        c.fillText(5*i, 47, yStart-i*70);
    }
}
c.stroke();

var fillOne = 70/5; //value of one bar

//drawing bar chart
for(var i = 0 ;i<6;i++){
    c.fillStyle = fruit[i].color;
    c.fillRect(xStart+i*70, yStart-fillOne*fruit[i].quantity, 70, fillOne*fruit[i].quantity);
}
