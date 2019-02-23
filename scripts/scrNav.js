function GameScript(){
	
	var stagename = arrStages[gStage];
	var arrlocations = arrLocationNames[stagename].split(",");
	var locationname = arrlocations[gLocation];
	var loccode = CurCode();
	var curpuz = arrPuzzles[loccode];
	LoadLocationText();
}

function SpeechNext(){
	gTextItr++;
	if(gTextItr == arrText.length){ gTextItr=0;}
	var textline = arrText[gTextItr];
	if(textline.startsWith("pic")){
		var imgid = textline.split(" ")[1];
		var picid = textline.split(" ")[2];
		RedrawPortrait(imgid, picid)
		gTextItr++;
		textline = arrText[gTextItr];
	}
	if(textline.startsWith("bub")){
		var buby = textline.split(" ")[1];
		RedrawSpeechBubble(buby);
		gTextItr++;
		textline = arrText[gTextItr];
	}
	if(textline.startsWith("txt")){
		var texttodraw = textline.substring(4);
		RedrawText(texttodraw);
	}
	
}
function RedrawSpeechBubble(imgy){
	imgy++;
	$("#dSpeech").css("background-image", "url('images/bubble"+imgy+".png')");
}
function RedrawPortrait(imgid, picid){
	var picx = picid % constPortraitPerRow;
	var picy = Math.floor(picid / constPortraitPerRow);
	picx*=constPortraitWid;
	picy*=constPortraitHgt;
	
	$("#dPortrait").css("background-image","url('images/charportraits" +imgid +".png')");
	$("#dPortrait").css("background-position-x",picx +"px");
	$("#dPortrait").css("background-position-y",picy+"px" );
}
function RedrawText(texttodraw){
	$("#pSpeech").text(texttodraw);
}
function DialogueOpen(){
	$("#dDialogue").slideDown();
}
function DialogueClose(){
	$("#dDialogue").slideUp();
}