 var gSplashTime = 2;
 
 function InitSplashTitle(){
	 
	  
	 DialogueOpen();  
	 $("#dPuzzles").html("<div id='dTitle'> <div id='btnOptions' class='btnTitle'></div> <div id='btnLoad' class='btnTitle'> </div><div id='btnNew' class='btnTitle'>   </div> </div><div id='dLogo'> </div>"); 
	 setTimeout(FadeOutLogo,gSplashTime);
	 setTimeout(FadeInTitle,gSplashTime );
	 $("#btnNew").html("New").on("click",FadeOutTitle);
	 $("#btnLoad").html("Load").on("click",GameLoad);
	 $("#btnOptions").html("Options").on("click",GameNew);
	 
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
	 //getCookie();
	 HigestAchieved()
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