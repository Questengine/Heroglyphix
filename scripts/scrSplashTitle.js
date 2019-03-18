 var gSplashTime = 2;
 
 function InitSplashTitle(){
	 
	  
	 DialogueOpen();  
	 $("#dPuzzles").html("<div id='dTitle'> <div id='btnOptions' class='btnTitle'></div> <div id='btnLoad' class='btnTitle'> </div><div id='btnNew' class='btnTitle'>  </div> <div id='dInfoTitle'>Welcome!</div> </div><div id='dLogo'> </div>"); 
	 setTimeout(FadeOutLogo,gSplashTime);
	 setTimeout(FadeInTitle,gSplashTime );
	 $("#btnNew").html("New").on("click",FadeOutTitle);
	 $("#btnNew").attr("data-info","Start New Game");
	 $("#btnLoad").html("Load").on("click",GameLoad);
	 $("#btnLoad").attr("data-info","Load from previously saved browser cookie");
	 $("#btnOptions").html("CHEAT").on("click",UnlockAll);
	 $("#btnOptions").attr("data-info","CHEAT: Open/Unlock all stages, locations and puzzles");
	 
	 $("#btnNew, #btnOptions, #btnLoad").on("mouseover", function(){
			TitleInfo($(this))
	 });
	 
 } 
 function TitleInfo(jq){
	var txt = jq.attr("data-info");
	$("#dInfoTitle").html(txt);
 }
 function FadeOutLogo(){
	 $("#dLogo").fadeOut(gSplashTime );
 }
 function FadeInTitle(){
	 $("#dTitle").fadeIn(gSplashTime ,function(){
		 $("dLogo").remove();
		 });
 }
 function GameLoad(){
	 getCookie();
	 HighestAchieved()
	 FadeOutTitle();
 }
 function UnlockAll(){
	 //getCookie();
	ADMINCompleteThrough("08-01-01");
	 HighestAchieved()
	 FadeOutTitle();
 }
 
 function GameNew(){
	 FadeOutTitle();
	 
 }
 function FadeOutTitle(){
	 $("#dTitle").fadeOut(gSplashTime ,function(){ 
		 InitStageSelect();
		 });
 }