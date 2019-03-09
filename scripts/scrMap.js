 function InitMap(){
	 
	 
	 //$("#dPuzzles").css("background-image","url('images/map.jpg')").fadeIn();  
	 $("#dPuzzles").html("<img src='images/map.jpg'/> <div id='btnReturn' class='btnTitle'>Return</div><div id='btnCredits' class='btnTitle'>Credits</div>  ").fadeIn(); 
	
	 $("#btnReturn").on("click", HideMap);
	 $("#btnCredits").on("click", Credits);
	 DialogueOpen();
 }
 function HideMap(){
	 $("#dPuzzles").fadeOut().off("click", HideMap);
	 DialogueClose();
 }
 function CloseCredits(){
	 $("#dCredits").remove();
	 $("#btnCredits").off("click", CloseCredits);
	 $("#btnCredits").on("click", Credits);
 }
 
 
 function Credits(){
	 var credbubble = "<div id='dCredits'>";
	 credbubble += "<span class='ctitle'>Curly Braces and Semi-colons</span><br>";
	 credbubble += "<span class='cname'>Brandon Wood</span><br>";
	 credbubble += "<span class='cinfo'>www.vrgamesbybrandon.com</span><br><br>";
	 credbubble += "<span class='ctitle'>Pictures and Words</span><br>";
	 credbubble += "<span class='cname'>Matt Anonymous</span><br>";
	 credbubble += "<span class='cinfo'>@spiritgreen</span><br>";
	 credbubble += "</div>";
	 $("#dPuzzles").append(credbubble);
	 $("#btnCredits").off("click", Credits);
	 $("#btnCredits").on("click", CloseCredits);
 }
 
 