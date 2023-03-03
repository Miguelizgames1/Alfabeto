canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
        {
            aplhabetkey();
            document.getElementById("d1").innerHTML="vc  pressionou um tecla alfabeto"
        }
		
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
@@ -36,7 +36,7 @@ function my_keydown(e)

function aplhabetkey()
{
	

}
function numberkey()