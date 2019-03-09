 function InitSplashTitle(){
	 
	  
	 DialogueOpen();  
	 $("#dPuzzles").html("<div id='dTitle'> <div id='btnOptions' class='btnTitle'></div> <div id='btnLoad' class='btnTitle'> </div><div id='btnNew' class='btnTitle'>   </div> </div><div id='dLogo'> </div>"); 
	 setTimeout(FadeOutLogo,1 );
	 setTimeout(FadeInTitle,1 );
	 $("#btnNew").html("New").on("click",FadeOutTitle);
	 $("#btnLoad").html("Load").on("click",getCookie);
	 $("#btnOptions").html("Options").on("click",getCookie);
	 
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