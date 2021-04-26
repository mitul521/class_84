canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var pic ="racing.jpg";
car_width=70;
car_height=70;
background_img=pic;
car_img1="download.png";
car1_x=10;
car1_y=10;
car_img2="car1.png";
car_x=10;
car_y=100;
function add()
 {
      background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src =car_img1;
    rover1_imgTag = new Image();
    rover1_imgTag.onload = uploadrover1;
    rover1_imgTag.src =car_img2;
 }
 function uploadBackground(){
     ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
 }
 function uploadrover(){
     ctx.drawImage(rover_imgTag,car_x,car_y,car_width,car_height);
 }
 function uploadrover1(){
    ctx.drawImage(rover1_imgTag,car1_x,car1_y,car_width,car_height);
 }
 window.addEventListener("keydown",my_keydown);
 function my_keydown(e) {
      keyPressed = e.keyCode;
       console.log(keyPressed);
        if(keyPressed == '38') {
             up();
              console.log("up");
             }
              if(keyPressed == '40') {
                   down();
                    console.log("down"); 
                } if(keyPressed == '37') {
                      left();
                       console.log("left");}
                      if(keyPressed == '39') {
                           right();
                            console.log("right");
                         }
                        
                         }
   function up(){
       if(car1_y>0){
           car1_y=car1_y-10;
           console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
            uploadBackground(); uploadrover1();
         
       }
   }
   function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
         uploadBackground(); uploadrover1();
      
    }
}
function left(){
    if(car1_x>0){
        car1_x=car1_x-10;
        console.log("When left arrow is pressed, x = " + car1_x  + " | y = " +car1_y);
         uploadBackground(); uploadrover1();
      
    }
}
function right(){
    if(car1_x <=700){
        car1_x =car1_x +10;
        console.log("When right arrow is pressed, x = " + car1_x  + " | y = " +car1_y);
         uploadBackground(); uploadrover1();
      
    }
}
    if(keyPressed=='68'){
        right();
        console.log("right");
    }
    if(keyPressed=='87'){
        up();
        console.log('up');
    }
    if(keyPressed=='83'){
        down();
        console.log('down');
    }
    if(keyPressed=='65'){
        left();
        console.log("left");
    }  
    function up(){
        if(car_y>0){
            car_y=car_y-10;
            console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y);
             uploadBackground(); uploadrover(); 
        }
    }
    function down(){
        if(car_y<=500){
            car_y=car_y+10;
            console.log("When down arrow is pressed, x = " + car_x + " | y = " +car_y);
             uploadBackground(); uploadrover();
          
        }
    }
    function left(){
        if(car_x>0){
            car_x=car_x-10;
            console.log("When left arrow is pressed, x = " + car_x  + " | y = " +car_y);
             uploadBackground(); uploadrover();
          
        }
    }
    function right(){
        if(car_x <=700){
            car_x =car_x +10;
            console.log("When right arrow is pressed, x = " + car_x  + " | y = " +car_y);
             uploadBackground(); uploadrover();
          
        }
    }