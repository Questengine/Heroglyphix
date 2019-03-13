var arrIntermission ={
"02":"More glyphlets?!?; Multiple glyphlets for the one cursed tablet?;Oh, there's still more to do?;Must. Keep. At. It!",
"03":"Every tree has many leaves;One small step toward ending this curse, one giant leap toward catching that gremlin."   ,
"04":"Optimism is the faith that leads to achievement;Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement;Knowing what must be done does away with fear;If you don’t like the road you’re walking, start paving another one."   ,
"05":"What is a curse?  A miserable little pile of glyphlets.  But enough talk!  Have at you!; It's a terrible night for a cursed glyph;Mankind ill needs a cursed glyphlet such as this;I despise these glyphlets. They are to be my prey"   ,
"06":"If you don’t risk anything, you risk even more.;You can imprison a man, but not an idea. You can exile a man, but not an idea. You can kill a man, but not an idea;The question isn’t who is going to let me, it’s who is going to stop me;Learn from the mistakes of others. You can’t live long enough to make them all yourself;Learn from the mistakes of others. You can’t live long enough to make them all yourself;Learn from the mistakes of others. You can’t live long enough to make them all yourself"   ,
"07":"More glpyhlets. Party on!;  More glyphlets?  NO WAY!; Something strange is afoot in Magus Magna;Only a few more glyphlets.  EXCELLENT!;More glyphlets remain?  Bogus.;  Best 2 out of 3?;All these stone tablets remind me of ancient Greece" ,
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