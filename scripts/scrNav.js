 
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
//advance all global vars to next puzzle, location, stage as needed
function AdvanceLevel(){	
//autoadvance is simple-advance, without glyphlet selection
	var autoadvance = true;
	var code = CurCode();
	
	if(GetIntPuzzle(code)==0){//we're advancing FROM and intro, to puzzle 1 
		autoadvance = true;
		StgLocPuzIncrement();
	}
	else{
		if(isPuzzleComplete(code)){
			autoadvance = true;
			StgLocPuzIncrement();
		}
		else{
			autoadvance = false;
		}
			
	}
	return autoadvance;
} 

function StgLocPuzIncrement(){
	gPuzzle++; 
	if(gPuzzle>PuzCount(gStage,gLocation)){
		//and all puzzles done in this location
		//set gPuzzle = 0 so we know to get the intro text
		gPuzzle=0;gLocation++;
	}
	if(gLocation>LocCount(arrStages[gStage])){gLocation=1;gStage++;}
}
function Init(code, part){
	if(typeof code === "undefined"){ 	 code=CurCode();  }
	if(typeof part === "undefined"){ 	 part=0;  }
	
	/*
	If we're initing and ew're on puzzle #1,then we need to check for a location intro
	*/
	
	$("#dShow").fadeOut("fast",function(){
				$("#dShow").remove();
	});
	 
	gPart = part;
	LoadText();
	gTextItr=-1;	
	var puzint  = GetIntPuzzle(code);
	if(puzint>0){
		var puz = LoadPuz(code, part);
		BuildGrid(Math.sqrt(puz.length));
		//LoadLocationText();
		gPuzTime = gPuzTimeMax;
		clearInterval(gTimerInterval);
		clearInterval(gHourGlassInterval);
		gTimerInterval=setInterval(TimerTick,1000);
		gHourGlassInterval=setInterval(HourGlass,500);
	}
	else{
		StartDialogue();
	}
	
}
function StoryNext(){
	if(gNextText){
		SpeechNext();
	}
	else{
		if(AdvanceLevel()){
			//if auto advance, go ahead and init next level'
			//otherwise init will happen after glyphles selectin
			Init();
		}
		else{
			InitGlyphlets();
		}
		//ShowHideProgressButton(false);////////
	}
}
function SpeechNext(){ 
	gTextItr++;
	//iterate through the speech text with pics and bubs
	if(gTextItr < arrText.length){
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
	//if this was thelastt text bit, then done with text,
	if(gTextItr+1 == arrText.length){
		gNextText = false;
		//$("#dSpeechNext").html("PUZ")
		Info("Advance to next puzzle.");
	}
	
}
function RedrawPortrait(imgid, picid){
	var picx = picid % constPortraitPerRow;
	var picy = Math.floor(picid / constPortraitPerRow);
	gTextClass = GetTextClass(imgid,picid);
	picx*=constPortraitWid;
	picy*=constPortraitHgt;
	
	$("#dPortrait").css("background-image","url('images/portraits/charportraits" +imgid +".png')");
	$("#dPortrait").css("background-position-x",picx +"px");
	$("#dPortrait").css("background-position-y",picy+"px" );
}

function StartDialogue(){
	gNextText=true;   
	StopTimer();
	ShowHideProgressButton(true);
	SpeechNext();
}
function Intermission(){
	ShowHideProgressButton(true);	
	RedrawSpeechBubble(3);
	RedrawText(IntermissionText());
}
function PuzzleDone(){
	
	MarkPuzzlePartDone(CurCode(),gPart);
	if(isPuzzleComplete()){
		if(isLargePuzzle()){
			PuzzleDoneLarge(); }
		else{
			PuzzleDoneSmall(); }
		StartDialogue();
	}
	else{
		
		$(".cel").off( );
		$(".cel").each(function(){
			SetFadeTimeout($(this)); });
		gNextText= false;
		//$("#dSpeechNext").html("")
		Intermission();
	} 
}

function StopTimer(){ 
		clearInterval(gTimerInterval); 
		clearInterval(gHourGlassInterval); 
		setTimeout(function(){ BlinkMark($("#dClock")); }, 1111);
}
function PuzzleDoneSmall(){
	
	$(".cel").off( );
	$(".cel").each(function(){
		SetBlinkTimeout($(this)); });
	$(".vc, .hc").each(function(){
		SetFadeTimeout($(this)); }); 
/*
BuildShowPuzzle(LoadPuz(CurCode()));
	$(".cel").addClass("squarecel");
	$(".cel").css("background-image", "url('images/marks/marks"+gCurMarkSize+".png')");
ReDrawGrid();
*/
}
function PuzzleDoneLarge(){
	
	$(".cel").off( );
	$(".cel").each(function(){
		SetFadeTimeout($(this)); });
	$(".vc, .hc").each(function(){
		SetFadeTimeout($(this)); }); 
//	$("#dGrid").css("background-image","url('images/puzzles/"+CurCode()+".bmp')");//


	BuildShowPuzzle(Translate(GetPuzData(CurCode())));  
	ReDrawGrid();

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
	Blink(cell);
}

function ShowHideProgressButton(tf){
	if(tf){
		$("#dSpeechNext").slideDown();
	}
	else{
		$("#dSpeechNext").slideUp();
	}
}
function RedrawSpeechBubble(imgy){
	imgy++;
	$("#dSpeech").css("background-image", "url('images/bubble"+imgy+".png')");
}
function RedrawText(texttodraw){
	$("#pSpeech").removeClass().addClass(gTextClass).text(texttodraw);
}
function DialogueOpen(){ $("#dDialogue").slideDown(); }
function DialogueClose(){ $("#dDialogue").slideUp(); }