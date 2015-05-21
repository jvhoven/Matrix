var App = (function() {
	
	var canvas = null;
	var context = null;
	var menu = null;
	
	return {
		init: function() {
			canvas = document.getElementById("drawable");
			context = canvas.getContext("2d");
			menu = new Menu();
			menu.init();
			
			canvas.setAttribute("width", canvas.parentElement.clientWidth);
			canvas.setAttribute("height", canvas.parentElement.clientHeight);
			
			canvas.addEventListener("click", this.addElement);
			window.onresize = this.resizeCanvas();
		},
		resizeCanvas: function() {
			
			var measures = {
				oldWidth: canvas.clientWidth,
				oldHeight: canvas.clientHeight,
				newWidth: canvas.parentElement.clientWidth,
				newHeight: canvas.parentElement.clientHeight,
			};
			
			// Ratios for context scaling
			var widthRatio = measures.oldWidth / measures.newWidth;
			var heightRatio = measures.oldHeight / measures.newHeight;
			
			canvas.style.width=measures.newWidth;
			canvas.style.height=measures.newHeight;
			context.scale(widthRatio, heightRatio);
		}, 
		addElement: function(event) {
			var element = menu.getActive();
			if(element != null){
				
				var coords = {
					x: event.offsetX,
					y: event.offsetY
				};
				
				switch(element.getAttribute("data-val")) {
					case "class":
						context.beginPath();
						context.rect(coords.x - 62.5, coords.y - 40, 125, 80);
						context.fillStyle = "#26A69A";
						context.fill();
						
						
				}
			}
		}
	};
});

var application = new App();
application.init();