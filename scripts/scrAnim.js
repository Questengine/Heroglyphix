function Blink(jq){
	jq.fadeOut(200).fadeIn(666);

}
function HourGlass(){
		
		TickHourGlass();
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
	var cFrames=11;
	gSandFrame++;
	gSandFrame = gSandFrame % cFrames;
	var cWid =35;
	var cHgt=54;
	var offset = "-"+cWid*gSandFrame+"px 0px";
	$("#dSand").css("background-position",offset);
} 