 function InitMap(){
	 

	 
	 
	 //$("#dPuzzles").css("background-image","url('images/map.jpg')").fadeIn(); 
	 $("#dPuzzles").html("<img src='images/map.jpg'/>").fadeIn(); 
	 $("#dPuzzles").on("click", HideMap);
	  
	 DialogueOpen();
 }
 function HideMap(){
	 $("#dPuzzles").fadeOut().off("click", HideMap);
	 DialogueClose();
 }
 