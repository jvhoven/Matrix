const Menu = require('./menu');
const Squircle = require('./shapes/squircle');

class App {
	constructor() {	
		this.canvas = document.getElementById("drawable");
		this.context = this.canvas.getContext("2d");
		this.drawnElements = [];
		
		// We need the menu for interactions
		this.menu = new Menu();
		
		this.canvas.setAttribute("width", canvas.parentElement.clientWidth);
		this.canvas.setAttribute("height", canvas.parentElement.clientHeight);
		
		let self = this;
		this.canvas.addEventListener("click", (event) => self.addElement.call(self, event), false);
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
	
	addElement(event) {
		let element = this.menu.active;
		let rect = this.canvas.getBoundingClientRect();
		let coords = {
			x: Math.round((event.clientX-rect.left)/(rect.right-rect.left)*this.canvas.width),
			y: Math.round((event.clientY-rect.top)/(rect.bottom-rect.top)*this.canvas.height)
		};

		if(element != null){			
			let shape = null;
			switch(element.getAttribute('data-val')) {
				case 'class':
					shape = new Squircle(coords.x - (140 / 8), coords.y - (90 / 8), 140, 90, '#BDBDBD', 20);
					break;	
			}
			
			this.drawnElements.push(shape);
			shape.draw(this.context);
			this.menu.deactivate();
		} else {
			this.selectElement(coords);
		}
	}
	
	selectElement(coords) {
		let selected = this.drawnElements.map((element) => {
			if(element.intersects(coords.x, coords.y)) {
				return element;
			}
		});
		
		if(selected) {
			console.log(selected);
			let el = selected[0];
			this.context.strokeStyle = "#FFF";
			this.context.lineWidth = 1;
			el.draw(this.context, true);
		}
		
		this.redraw();
	}
	
	redraw() {
		this.context.save();
		this.context.clearRect(0, 0, canvas.width, canvas.height);
		this.context.restore();
	}
}

module.exports = App;
