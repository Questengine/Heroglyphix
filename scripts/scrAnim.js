function Blink(jq){
	jq.fadeOut(200).fadeIn(666);

}
function HourGlass(){

		TickHourGlass();
		TickSpeechNext();
		TickSand();
}
function TickHourGlass(){
	var cFrames=14;
	gHourGlassFrame++;
	gHourGlassFrame = gHourGlassFrame % cFrames;
	var cWid=61;
	var cHgt=93;
	var cRowCount;
	var offset = "-"+cWid*gHourGlassFrame+"px 0px";
	$("#dHourGlass").css("background-position",offset); 
		
}
function TickSand(){
	
	
	var frame = Math.floor(gPuzTime*10/gPuzTimeMax);
	
	frame = 10-frame;
	
	var cFrames=11;
	//gSandFrame++;
	//gSandFrame = gSandFrame % cFrames;
	var cWid =35;
	var cHgt=54;
	var offset = "-"+cWid*frame+"px 0px";
	$("#dSand").css("background-position",offset);
} 
function TickSpeechNext(){
	var cFrames=4;
	gTextAdvanceFrame++;
	gTextAdvanceFrame = gTextAdvanceFrame % cFrames;
	var cWid=17;
	var cHgt=17;
	var cRowCount;
	var offset = "-"+cWid*gTextAdvanceFrame+"px 0px";
	$("#dSpeechNext").css("background-position",offset); 
		
}