 function InitMap(){
	 

	 
	 
	 $("#dPuzzles").css("background-image","url('images/map.jpg')").fadeIn(); 
	 $("#dPuzzles").on("click", HideMap);
 }
 function HideMap(){
	 $("#dPuzzles").fadeOut().off("click", HideMap);
 }
 