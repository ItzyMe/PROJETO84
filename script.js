canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 50;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploading;
	img_imgTag.src = img_image;   
}

function uploading() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if(keyPressed >=97 && keyPressed<=122)

		{ aplhabetkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla alfabeto"
            console.log("aplhabetkey");
		}
		if(keyPressed >=65 && keyPressed<=90){
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
			otherkey();
		  }
		  else{
		numberkey();	
		  }


}

function aplhabetkey()
{
	img_image="alfabeto.png"
  add();
}
function numberkey()
{	img_image="número.png"
add();
	
}
function arrowkey()
{	img_image="direcional.png"
add();
}
function specialkey()
{
	img_image="especial.png"
	add();
}
function otherkey()
{
	img_image="outras.png";
	add();
}
	/* se( isto estivercerto =tue){
		 faça isto; } 
		 senão { faça isto aqui; }
		 */