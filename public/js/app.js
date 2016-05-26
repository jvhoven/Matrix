const Menu = require('./menu');
const Squircle = require('./shapes/squircle');

class App {
	constructor() {	
		this.canvas = document.getElementById("drawable");
		this.context = this.canvas.getContext("2d");
		
		// We need the menu for interactions
		this.menu = new Menu();
		
		this.canvas.setAttribute("width", canvas.parentElement.clientWidth);
		this.canvas.setAttribute("height", canvas.parentElement.clientHeight);
		
		var self = this;
		this.canvas.addEventListener("click", (event) => self.addElement.call(self, event), false);
		window.onresize = this.resizeCanvas();
	}
	
	resizeCanvas() {
		var measures = {
			oldWidth: this.canvas.clientWidth,
			oldHeight: this.canvas.clientHeight,
			newWidth: this.canvas.parentElement.clientWidth,
			newHeight: this.canvas.parentElement.clientHeight,
		};
		
		// Ratios for context scaling
		var widthRatio = measures.oldWidth / measures.newWidth;
		var heightRatio = measures.oldHeight / measures.newHeight;
		
		this.canvas.style.width = measures.newWidth;
		this.canvas.style.height = measures.newHeight;
		this.context.scale(widthRatio, heightRatio);
	}
	
	addElement(event) {
		var element = this.menu.active;

		if(element != null){
			var coords = {
				x: event.offsetX,
				y: event.offsetY
			};		
			
			switch(element.getAttribute("data-val")) {
				case "class":
					var squircle = new Squircle(coords.x, coords.y, 140, 90, "#BDBDBD", 20);
					squircle.draw(this.context);
					this.menu.deactivate();
					break;	
			}
		}
	}
}

module.exports = App;
