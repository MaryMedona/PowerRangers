var canvas =new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_image_width=400;
block_image_height=400;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img) 
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set
        ({
top:player_y,
left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img) 
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set
        ({
top:player_y,
left:player_x
        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)

 {
     keyPressed = e.keyCode; console.log(keyPressed);
      if(keyPressed == '82') 
       {player_x = 10; 
        new_image('rr1.png');
        console.log("r") } 

        if(keyPressed == '71')
         { player_x = 200; 
            new_image('gr.png'); 
         console.log("g") } 

        if(keyPressed == '89')
         { player_x =300;
             new_image('yr.png'); 
         console.log("y") } 

        if(keyPressed == '80') 
        { player_x = 500; 
            new_image('pr.png'); 
        console.log("p") } 

        if(keyPressed == '66')
        { player_x = 550;
             new_image('br.png'); 
        console.log("b") } }
