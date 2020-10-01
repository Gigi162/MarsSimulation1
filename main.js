canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width = 100;
rover_x = 10;
rover_y = 10;

background_img = "mars.jpg";
rover_img = "rover.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBG;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadR;
    rover_imgTag.src = rover_img;
}

function uploadBG() {
    ctx.drawImage(background_imgTag, 0,0,canvas.width, canvas.height);
}

function uploadR() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPress = e.keyCode;
    console.log(keyPress)

     if (keyPress == "38") {
          //up();
          console.log("up");
     }

     if (keyPress == "40") {
         //down();
         console.log("down");
     }

     if (keyPress == "39") {
         //right();
         console.log("right");
     }

     if (keyPress == "37") {
         //left();
         console.log("left")
     }
}