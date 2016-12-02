// **********************************************************************************
// ********************************* PAINT CLASS ***********************************
// **********************************************************************************



// Construction of my Paint class that refer to the all program  : 
var Paint = function ()
{	// This class has two props : 
	this.pen   = new Pen(); // A pen
	this.slate = new Slate(this.pen); // A Slate that takes in param the same pen created above
	this.gradient = new Gradient();
};
/////////////// Methods  ///////////////
Paint.prototype.onClickChangeColor = function(event) 
{	// This methode is changing the current color of the Pen Object
	var a = event.currentTarget;
	var currentColor = a.dataset.color;
	this.pen.setColor(currentColor); // .setColor() is a method of Pen class 
};
Paint.prototype.onClickChangeSize = function(event) 
{	// This method is changing the current size of the Pen Object
	var button = event.currentTarget;
	var currentSize = button.dataset.size;
	this.pen.setSize(currentSize); // .setSize() is a method of Pen class
};
Paint.prototype.onClickErase = function() 
{ // This method is changing the current color to white 
	this.pen.setColor('white'); // The backGround of the canvas is white so im just setting the color of the pen as white so it can erase
};

Paint.prototype.onClickShowGradient = function() 
{	// When you click on the 'all color' button it make the gradient apear
	$('#gradient').toggleClass('hidden');
	//this.gradient.setGradient();

};
Paint.prototype.onPickColor = function(event) 
{
	var color = this.gradient.getCurrentColor();
	this.pen.setColorAsRgb(color.red, color.green, color.blue);
};
Paint.prototype.start = function() 
{	// Init event listeners 
	$('#color').on('click','a',this.onClickChangeColor.bind(this));
	$('#size').on('click','button', this.onClickChangeSize.bind(this));
	$('#erase').on('click', this.onClickErase.bind(this));
	$('#eraseall').on('click', this.slate.onClickEraseAll.bind(this.slate));
	$('#allcolors').on('click', this.onClickShowGradient.bind(this));
	$(document).on('magical-slate:pick-color', this.onPickColor.bind(this));

};