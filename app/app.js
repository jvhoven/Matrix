const Debug = require('./debug');
const PointHelper = require('./helpers/point');
const Graphics = require('./graphics');

class App {
	constructor() {	
		// Init canvas
		let canvas = document.getElementById("drawable");			
		canvas.setAttribute("width", canvas.parentElement.clientWidth);
		canvas.setAttribute("height", canvas.parentElement.clientHeight);
		
		// Add graphics
		this.graphics = new Graphics(canvas);
		
		// Register handlers
		let self = this;
		canvas.addEventListener("click", (event) => self.delegateClickEvent.call(self, event), false);
		window.onresize = this.resize();
	}
	
	/**
	 * Resizes the canvas to fix the screen
	 * 
	 * TODO: Correctly zoom out
	 */
	resize() {
		let measures = {
			oldWidth: this.graphics.canvas.clientWidth,
			oldHeight: this.graphics.canvas.clientHeight,
			newWidth: this.graphics.canvas.parentElement.clientWidth,
			newHeight: this.graphics.canvas.parentElement.clientHeight,
		};
		
		// Ratios for context scaling
		let widthRatio = measures.oldWidth / measures.newWidth;
		let heightRatio = measures.oldHeight / measures.newHeight;
		
		this.graphics.canvas.style.width = measures.newWidth;
		this.graphics.canvas.style.height = measures.newHeight;
		this.graphics.context.scale(widthRatio, heightRatio);
	}
	
	/**
	 * Delegates the click event to the graphics module
	 * @param {event} The click event
	 */
	delegateClickEvent(event) {
		event.coords = PointHelper.normalize(this.graphics.canvas, event.clientX, event.clientY);
		
		if(this.graphics.menu.active) {
			this.graphics.addPolygon(event);
		} else {
			this.graphics.selectPolygon(event);
		}
	}
}

module.exports = new App();
