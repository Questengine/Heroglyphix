 function InitSplashTitle(){
	 
	  
	 DialogueOpen();  
	 $("#dPuzzles").html("<div id='dTitle'> </div><div id='dLogo'> </div>"); 
	 setTimeout(FadeOutLogo,1000);
	 setTimeout(FadeInTitle,1000);
	 $("#dTitle").on("click",FadeOutTitle);
	 
 } 
 function FadeOutLogo(){
	 $("#dLogo").fadeOut(2000);
 }
 function FadeInTitle(){
	 $("#dTitle").fadeIn(2000,function(){
		 $("dLogo").remove();
		 });
 }
 function FadeOutTitle(){
	 $("#dTitle").fadeOut(2000,function(){ 
		 InitStageSelect();
		 });
 }