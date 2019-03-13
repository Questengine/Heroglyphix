 function InitMap(){
	 
	 
	 PauseTimer(true);
	 PoxPause(true);
	 //$("#dPuzzles").css("background-image","url('images/map.jpg')").fadeIn();  
	 $("#dPuzzles").html("<img src='images/map.jpg'/>   <div id='btnReturn' class='btnTitle'>Resume</div><div id='btnCredits' class='btnTitle'>Credits</div>  ").fadeIn(); 
	PlaceMapMarkers();
	 $("#btnReturn").on("click", HideMap);
	 $("#btnReturnTitle").on("click", TitleScreen);
	 $("#btnCredits").on("click", Credits);
	 DialogueOpen();
	 
 }
 function HideMap(){
	 $("#dPuzzles").fadeOut().off("click", HideMap);
	 $(".mapicon").remove();
	 clearInterval(gPathInterval);
	 PauseTimer(false);
	 PoxPause(false);
	 DialogueClose();
 }
 function TitleScreen(){
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
	 credbubble += "<span class='ctitle'>Curly Braces and Semicolons</span><br>";
	 credbubble += "<span class='cname'>Brandon Wood</span><br>";
	 credbubble += "<span class='cinfo'>www.vrgamesbybrandon.com</span><br><br>";
	 credbubble += "<span class='ctitle'>Pictures and Words</span><br>";
	 credbubble += "<span class='cname'>Matt Anonymous</span><br>";
	 credbubble += "<span class='cinfo'>@spiritgreen</span><br><br>";
	 credbubble += "<span class='ctitle'>Thanks For Playing!</span><br>";
	 credbubble += "</div>";
	 $("#dPuzzles").append(credbubble);
	 $("#btnCredits").off("click", Credits);
	 $("#btnCredits").on("click", CloseCredits);
 }
 
 function PlaceMapMarkers(){
	var mapicondim = 40;
	var locs = GetIntLocationTotal();
	for(var i = 1;i<locs;i++){
		var z = i-1;
		var bgx = z%10;
		var bgy = Math.floor(z/10);
		bgx*=mapicondim;
		bgy*=mapicondim;
		var strclass = "m"+i + " mapicon";
		var maploc = "<div class='"+strclass+"'></div>";
		$("#dPuzzles").append(maploc);
		var bgpos = "-"+bgx+"px -"+bgy+"px";
		$(".m"+i).css("background-position",bgpos);
	}
	AnimatePath();
	gPathInterval = setInterval(AnimatePath,4444);
 }
 
 function AnimatePath(){
	var locs = GetIntLocationTotal();
	 
	 for(var i = 1;i<locs;i++){
		
		if($(".m"+i).length>0){
			SetMapBlink($(".m"+i),i*93);
		} 
	}
		
 }













