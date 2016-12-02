// **********************************************************************************
// *********************************  SLATE CLASS ***********************************
// **********************************************************************************



// Construction of my Class Slate :
var Slate = function (pen)
{
	// 5 proprieties :
	this.canvas     = document.getElementById("ewen");
	this.currentPos = null;
	this.isDrawing  = false;
	this.context    = this.canvas.getContext("2d");
	this.pen        = pen;

	// Adding event listeners to my canvas
	this.canvas.addEventListener('mousemove', this.onMouseMoveEventHandler.bind(this));
	this.canvas.addEventListener('mousedown', this.onMouseDownEventHandler.bind(this));
	this.canvas.addEventListener('mouseout', this.onMouseOutEventHandler.bind(this));
	this.canvas.addEventListener('mouseup', this.onMouseUpEventHandler.bind(this));
};
// Method used to get the position of the mouse pointer on the canvas :
Slate.prototype.getMousePos = function(event) 
{
 	var	position =
 	{  // Creating a new object  with two parameters :
 		x : event.offsetX, // Using event.offsetX to get X 
 		y : event.offsetY // Using event.offsetY to get Y
 	};
 	return position; // The method return a new object that has the actual position of the mouse 
};
// Method used when the mousemove event is activated
Slate.prototype.onMouseMoveEventHandler = function(event) 
{
	if (this.isDrawing == true) // If the user has clicked on the canvas befor we can draw
	{	// Getting the initial position ( set when the user clicked on the canvas, check onMouseDown()) :
		var x = this.currentPos.x; 
	 	var y = this.currentPos.y;
	 	// Getting the position of the mouse when it moved 
	 	var newPos = this.getMousePos(event);
	 	this.context.save(); // Saving context
		this.context.lineCap='round'; // lineCap to smooth the line
		this.pen.configure(this.context); // Configuration of the context with the good color and size of my actual pen 
		this.context.beginPath(); // Start to draw
		this.context.moveTo(newPos.x,newPos.y); 
		this.context.lineTo(x,y);
		this.context.stroke(); // Filling with the good color
		var currentPos = this.getMousePos(event); // Getting the new position of the mouse in my Object prop
		this.currentPos = currentPos; // Putting it inside my object for the next move
		
	}
	else // No one is drawing
	{
		this.context.closePath(); // Closing the path 
		this.context.restore(); 
	}
};
Slate.prototype.onMouseDownEventHandler = function(event) 
{

	this.isDrawing = true; // Someone starts to draw so im setting 'isDrawing' to true
	var currentPos = this.getMousePos(event); // Getting the position of the mouse when the user starts to draw
	this.currentPos = currentPos; // Putting it in my object
	
	
	
	
};
Slate.prototype.onMouseUpEventHandler = function(event) 
{

	this.isDrawing = false; // mouseUp so users stoped drawing, setting 'isDrawing' to false
	var currentPos = this.getMousePos(event); // getting the mouse pos 
	this.currentPos = currentPos; // Putting it in my object
	
};
Slate.prototype.onMouseOutEventHandler = function() 
{
	this.isDrawing = false; // Mouse Out so stop drawing

};
Slate.prototype.onClickEraseAll = function() 
{	// This method is clearing all the canvas/ all the slate 
	var width = this.canvas.width;
	var height = this.canvas.height;
	this.context.clearRect(0,0,width,height);
};