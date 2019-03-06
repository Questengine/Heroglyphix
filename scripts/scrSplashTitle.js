 function InitSplashTitle(){
	 
	  
	 DialogueOpen();  
	 $("#dPuzzles").html("<div id='dTitle'> <div id='btnLoad' class='btnTitle'>LOAD</div><div id='btnNew' class='btnTitle'>New Game</div> </div><div id='dLogo'> </div>"); 
	 setTimeout(FadeOutLogo,1 );
	 setTimeout(FadeInTitle,1 );
	 $("#btnNew").on("click",FadeOutTitle);
	 $("#btnLoad").on("click",getCookie);
	 
 } 
 function FadeOutLogo(){
	 $("#dLogo").fadeOut(2 );
 }
 function FadeInTitle(){
	 $("#dTitle").fadeIn(2 ,function(){
		 $("dLogo").remove();
		 });
 }
 function FadeOutTitle(){
	 $("#dTitle").fadeOut(2 ,function(){ 
		 InitStageSelect();
		 });
 }