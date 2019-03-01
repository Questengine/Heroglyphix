function GameScript(){
	
	var stagename = arrStages[gStage];
	var arrlocations = arrLocationNames[stagename].split(",");
	var locationname = arrlocations[gLocation];
	var loccode = CurCode();
	var curpuz = arrPuzzles[loccode];
}

function StartPuz(code ){
	
	 if(typeof code === "undefined"){
		 code=CurCode();
	 }
	 StageBackground( );
	var puzdata = GetPuzData(code);
	if(puzdata.includes(",")){
		InitGlyphlets(code);
	}
	else{
		
	}
}
function AdvanceLevel(){	
	var code = CurCode();
	if(isPuzzleComplete(code)){
		gPuzzle++; 
		if(gPuzzle>PuzCount(gStage,gLocation)){
			//and all puzzles done in this location
			gPuzzle=0;gLocation++;
		}
		if(gLocation>LocCount(arrStages[gStage])){gLocation=0;gStage++;}
	}
	else{
		InitGlyphlets(code);
	}
} 
function Init(code, part){
	 if(typeof code === "undefined"){
		 code=CurCode();
	 }
	 if(typeof part === "undefined"){
		 part=0;
	 }
	 gPart = part;
	var puz = LoadPuz(code, part);
	BuildGrid(Math.sqrt(puz.length));
	LoadLocationText();
	gPuzTime = gPuzTimeMax;
	clearInterval(gTimerInterval);
	gTimerInterval=setInterval(TimerTick,1000);
	
	gTextItr=-1;
	
}
function StoryNext(){
	if(gNextText){
		SpeechNext();
	}
	else{
		
	}
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
		gNextText = false;
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
	
	$("#dPortrait").css("background-image","url('images/portraits/charportraits" +imgid +".png')");
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
function StartDialogue(){
	gNextText=true;
	ShowHideProgressButton(true);
	SpeechNext();
}
function Intermission(){
	gNextText= false;
	RedrawSpeechBubble(4);
	RedrawText("Intermission:  4 of 89 pieces remain");
	ShowHideProgressButton(true);	
}
function PuzzleDone(){
	
	MarkPuzzlePartDone(CurCode(),gPart);
	if(isPuzzleComplete()){
		if(isLargePuzzle()){
			PuzzleDoneLarge(); }
		else{
			PuzzleDoneSmall(); } 
		StartDialogue();
		clearInterval(gTimerInterval); 
		setTimeout(function(){ BlinkMark($("#dClock")); }, 1111);
	}
	else{
		
		$(".cel").off( );
		$(".cel").each(function(){
			SetFadeTimeout($(this)); });
		Intermission();
	}
	
}

function PuzzleDoneSmall(){
	
	$(".cel").off( );
	$(".cel").each(function(){
		SetBlinkTimeout($(this)); });
	$(".vc, .hc").each(function(){
		SetFadeTimeout($(this)); }); 
}
function PuzzleDoneLarge(){
	
	$(".cel").off( );
	$(".cel").each(function(){
		SetFadeTimeout($(this)); });
	$(".vc, .hc").each(function(){
		SetFadeTimeout($(this)); }); 
	$("#dGrid").css("background-image","url('images/puzzles/"+CurCode()+".bmp')");
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
