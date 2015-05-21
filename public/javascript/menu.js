var Menu = (function() {
	
	var items = null;
	var active = null;
	
	return{
		init: function() {
			items = document.querySelectorAll("#sidebar nav ul > li a");
			
			for(var i = 0; i < items.length; i++) {
				items[i].addEventListener("click", this.clickHandler);
			};
		},
		clickHandler: function(event) {
			var element = event.srcElement;
			if(active != null) {
				active.className = "";
			}
			element.className == "active" ? element.className = "" : element.className = "active";
			active = element;
		},
		getActive: function() {
			return active;
		},
		deactivate: function() {
			active.className = "";
			active = null;
		}
	};
});
	