 function InitSplashTitle(){
	 
	  
	 DialogueOpen();  
	 $("#dPuzzles").html("<div id='dTitle'> </div><div id='dLogo'> </div>"); 
	 setTimeout(FadeOutLogo,1 );
	 setTimeout(FadeInTitle,1 );
	 $("#dTitle").on("click",FadeOutTitle);
	 
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