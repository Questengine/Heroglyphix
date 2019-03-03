var arrIntermission ={
"02":"More glyphlets?!?; Multiple glyphlets for the one cursed tablet?;Oh, there's still more to do?;Must. Keep. At. It!",
"03":"HowardsTrail"   ,
"04":"HallofVisions"   ,
"05":"What is a curse?  A miserable little pile of glyphlets.  But enough talk!  Have at you!; It's a terrible night for a cursed glyph;Mankind ill needs a curse glyphlet such as this;I despise these glyphlets. They are to be my prey"   ,
"06":"ShadowSteppes"   ,
"07":"KaraStage" ,
"08":"EdizonsRevenge" 
}

function IntermissionText(){
		
	var stage = GetCodeStage(CurCode());
	var arrtext = arrIntermission[stage].split(";");
	var count = arrtext.length;
	var rand= Math.floor(Math.random() * count);  
	
	var res = arrtext[rand];
	return res;
}