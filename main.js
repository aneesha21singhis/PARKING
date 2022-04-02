canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
console.log("h");


greencar_width = 75;
greencar_height = 160;
console.log("g");


background_image = "parkingLot.jpg";
greencar_image = "car2.png";
console.log("r");


greencar_x = 54;
greencar_y = 130;
console.log("s");

function add() {
	console.log("enter add");
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
	console.log(" exit add");
}



console.log("fedora")
function uploadBackground() {
	console.log("enter upload Background");
	ctx.drawImage(background_imgTag, 0 ,0, canvas.width, canvas.height);
	console.log("Exit uploadBackground()");
}
console.log("r");

function uploadgreencar(){
	console.log("Enter uploadgreencar")
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_x,greencar_y, greencar_width,greencar_height);
	console.log(" exit uploadgreencar");
}


console.log("as");
function uploadgreencar() {
	console.log("enter uploadgreencar");
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	console.log(" exit uploadgreencar");
}
console.log("l");
	



window.addEventListener("keydown", my_keydown);
console.log("aneesha")




function my_keydown(e)
{
	console.log("enter my_keydown function");
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			console.log("up");
			up();
			
		}
	
		if(keyPressed == '40')
		{
			console.log("down");
			down();
			
		}
		
		if(keyPressed == '37')
		{
			console.log("left");
			left();
			
		}
	
		if(keyPressed == '39')
		{
			console.log("right");
			right();
			
		}
		console.log("exit my_keydown function");
		
		
}
console.log("Ab")

function up()
{
	console.log(greencar_y);
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is pressed, x =" + greencar_x +"| y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
} 

function down()
{
	console.log(greencar_y);
	if(greencar_y <= 440){
		greencar_y = greencar_y + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x >= 0){
			greencar_x = greencar_x - 10;
			uploadBackground();
			uploadgreencar();
		}
		console.log("area");
}
	
function right()
{
	console.log(greencar_x)
		if(greencar_x <= 725){
			greencar_x = greencar_x + 10;
			uploadBackground();
			uploadgreencar();
		}
}
	console.log("are");
	