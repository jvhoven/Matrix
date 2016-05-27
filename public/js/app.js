const Menu = require('./menu');
const Squircle = require('./shapes/squircle');
const Debug = require('./debug');
const PointHelper = require('./helpers/point');

class App {
	constructor() {	
		this.canvas = document.getElementById("drawable");
		this.context = this.canvas.getContext("2d");
		this.drawnElements = [];
		
		this.canvas.setAttribute("width", canvas.parentElement.clientWidth);
		this.canvas.setAttribute("height", canvas.parentElement.clientHeight);
		
		let self = this;
		this.canvas.addEventListener("click", (event) => self.delegateClickEvent.call(self, event), false);
		window.onresize = this.resizeCanvas();
	}
	
	resizeCanvas() {
		let measures = {
			oldWidth: this.canvas.clientWidth,
			oldHeight: this.canvas.clientHeight,
			newWidth: this.canvas.parentElement.clientWidth,
			newHeight: this.canvas.parentElement.clientHeight,
		};
		
		// Ratios for context scaling
		let widthRatio = measures.oldWidth / measures.newWidth;
		let heightRatio = measures.oldHeight / measures.newHeight;
		
		this.canvas.style.width = measures.newWidth;
		this.canvas.style.height = measures.newHeight;
		this.context.scale(widthRatio, heightRatio);
	}
	
	delegateClickEvent(event) {
		event.coords = PointHelper.normalize(this.canvas, event.clientX, event.clientY);
		
		if(Menu.active) {
			this.addElement(event);
		} else {
			this.selectElement(event);
		}
	}
	
	addElement(event) {
		let element = Menu.active;
		
		if(element != null){			
			let shape = null;
			switch(element.getAttribute('data-val')) {
				case 'class':
					shape = new Squircle(event.coords.x, event.coords.y, 140, 90, '#BDBDBD', 20);
					break;	
			}
			
			this.drawnElements.push(shape);
			shape.draw(this.context);			
			Menu.deactivate();
		}
	}
	
	selectElement(event) {
		let selectedElement = null;
		//console.log(this.drawnElements);
		
		this.drawnElements.map((element) => {
			if(element.intersects(event.coords.x, event.coords.y)) {
				//console.log(element);
				selectedElement = element;
			}
		});
		
		if(selectedElement != null) {
			selectedElement.onSelect(this.context);
			this.redraw();	
		}
	}
	
	redraw() {
		this.context.save();
		this.context.clearRect(0, 0, canvas.width, canvas.height);
		this.context.restore();
	}
}

module.exports = new App();
