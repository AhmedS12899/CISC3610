var LuffySpriteSheet = {
    "frames": [
        { //frame 1/12
            "frame": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 2/12
            "frame": {
                "x": 480,
                "y": 1,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 3/12
            "frame": {
                "x": 960,
                "y": 1,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 4/12
            "frame": {
                "x": 1440,
                "y": 1,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 5/12
            "frame": {
                "x": 1920,
                "y": 1,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 6/12
            "frame": {
                "x": 1,
                "y": 360,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 7/12
            "frame": {
                "x": 480,
                "y": 360,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 8/12
            "frame": {
                "x": 960,
                "y": 360,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 9/12
            "frame": {
                "x": 1440,
                "y": 360,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 10/12
            "frame": {
                "x": 1920,
                "y": 360,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 11/12
            "frame": {
                "x": 1,
                "y": 720,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        },
        {//frame 12/12
            "frame": {
                "x": 480,
                "y": 720,
                "w": 480,
                "h": 360
            },
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {
                "x": 0,
                "y": 0,
                "w": 480,
                "h": 360
            },
            "sourceSize": {
                "w": 480,
                "h": 360
            }
        }
    ]
}


var luffy_img = new Image();
luffy_img.src = './LuffySpriteSheet.png';

var speechBubble_image = new Image();
speechBubble_image.src = './speechbubble.png';

var canvas_count = document.getElementById('canvas');
var ctx = canvas_count.getContext('2d');

let button = document.querySelector("button");

button.onclick = function () {
    drawImg();
    button.style.visibility = "hidden";
}

function drawNum(i) {
    ctx.drawImage(luffy_img, LuffySpriteSheet.frames[i].frame.x, LuffySpriteSheet.frames[i].frame.y, LuffySpriteSheet.frames[i].frame.w, LuffySpriteSheet.frames[i].frame.h, 0, 0, LuffySpriteSheet.frames[i].sourceSize.w, LuffySpriteSheet.frames[i].sourceSize.h);
}

function drawBubble() {
    ctx.drawImage(speechBubble_image, 350, 20, 150, 150);
}

function drawText() {
    ctx.font = "13px Century Gothic";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    if(currentLoop<=6){
        ctx.fillText("I'M ON MY WAY!", 425, 85);
    }
    else if(currentLoop>6){
        ctx.fillText("WAIT FOR ME!", 425, 85);
    }
}
var currentLoop = 0;

function drawImg() {
    ctx.clearRect(300, 200, 480, 360);
    drawNum(currentLoop);
    currentLoop++;
    if (currentLoop == 12) {
        currentLoop = 0;
    }
    drawBubble();
    drawText();
    setTimeout(drawImg, 200);

}