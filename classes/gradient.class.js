

// **********************************************************************************
// ********************************* GRADIENT CLASS ***********************************
// **********************************************************************************



var Gradient = function()
{

	this.canvas  = document.getElementById("ewen2");
	this.context = this.canvas.getContext("2d");
	this.setGradient();
	this.canvas.addEventListener('click', this.onClickChangeGradientColor.bind(this));
	this.currentColor ={
		red : 0,
		green : 0,
		blue : 0
	};
};
Gradient.prototype.getCurrentColor = function()
{
    return this.currentColor;
};
Gradient.prototype.setGradient  = function() 
{
	var gradient = this.context.createLinearGradient(0,0,this.canvas.width,0);
	gradient.addColorStop(0,"rgb(255,0,0)");
	gradient.addColorStop(0.16,"rgb(255,255,0)");
	gradient.addColorStop(0.33,"rgb(0,255,0)");
	gradient.addColorStop(0.5,"rgb(0,255,255)");
	gradient.addColorStop(0.66,"rgb(0,0,255)");
	gradient.addColorStop(0.83,"rgb(255,0,255)");
	gradient.addColorStop(1,"rgb(255,0,0)");
	this.context.fillStyle = gradient;
	this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

	var gradient2 = this.context.createLinearGradient(256,0,256,256);
	gradient2.addColorStop(0,"white");
	gradient2.addColorStop(0.5,"rgba(255,255,255,0)");
	gradient2.addColorStop(0.5,"rgba(0,0,0,0)");
	gradient2.addColorStop(1,"black");
	this.context.fillStyle = gradient2;
	this.context.fillRect(0,0,this.canvas.width,this.canvas.height);


};
Gradient.prototype.onClickChangeGradientColor = function(event) 
{
	
 	  // Creating two var 
 		var x = event.offsetX; // Using event.offsetX to get X 
 		var y = event.offsetY; // Using event.offsetY to get Y
 	
 	var currentColor = this.context.getImageData(x,y,1,1);
 	
 	var data = currentColor.data;
 	this.currentColor.red   = data[0];
 	this.currentColor.green = data[1];
 	this.currentColor.blue  = data[2];

 	$.event.trigger('magical-slate:pick-color');

};