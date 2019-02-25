function GameScript(){
	
	var stagename = arrStages[gStage];
	var arrlocations = arrLocationNames[stagename].split(",");
	var locationname = arrlocations[gLocation];
	var loccode = CurCode();
	var curpuz = arrPuzzles[loccode];
}
function AdvanceLevel(){
	gPuzzle++; 
}
function Init1232(){
	 
	var puz = LoadPuz();
	BuildGrid(Math.sqrt(puz.length));
	LoadLocationText();
	gTextItr=-1;
	
}
function Init(code){
	 if(typeof code === "undefined"){
		 code=CurCode();
	 }
	var puz = LoadPuzCode(code);
	BuildGrid(Math.sqrt(puz.length));
	LoadLocationText();
	gTextItr=-1;
	
}
function SpeechNext(){
	gTextItr++;
	if(gTextItr != arrText.length){
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
	else{//done with text, advance level
		AdvanceLevel();
		Init();
		ShowHideProgressButton(false);
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
function ShowHideProgressButton(tf){
	if(tf){
		$("#dSpeechNext").slideDown();
	}
	else{
		$("#dSpeechNext").slideUp();
	}
}
function PuzzleDone(){
	$(".cel").off( );
	ShowHideProgressButton(true);
	$(".cel").each(function(){
		SetBlinkTimeout($(this));
	});
	$(".vc, .hc").each(function(){
		SetFadeTimeout($(this));
	}); 
}
function SetBlinkTimeout(cell){
	var x = parseInt(cell.attr("data-x"))+0;
	var y = parseInt(cell.attr("data-y"))+0;
	var waittime=x+y;
	waittime*=50;
	setTimeout(function(){ BlinkMark(cell); }, waittime);
}
function SetFadeTimeout(cell){
	var x = parseInt(cell.attr("data-x"))+0;
	var y = parseInt(cell.attr("data-y"))+0;
	var waittime=x+y;
	waittime*=50;
	setTimeout(function(){ FadeClue(cell); }, waittime);
}
function FadeClue(cell){
	cell.css("opacity","0.5");
}
function BlinkMark(cell){
	cell.fadeOut(200).fadeIn(666);
}
