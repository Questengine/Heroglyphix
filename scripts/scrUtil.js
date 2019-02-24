function LoadLocationText(){
	gText =arrTextFiles[CurCode()];
	arrText = gText.split("newline,");
}

function LoadPuz(){
	var curcode = CurCode();
	var puz = arrPuzzles[curcode];
	gPuzCorrect = puz;
	return puz;
}
function pad( i){
	var res ="";
	if(i<10){
		res = "0"+i;
	}
	return res;
}
function CurCode(){
	return pad(gStage)+"-"+pad(gLocation)+"-"+pad(gPuzzle);
}
function BuildCode(s,l,p){
	return pad(s)+"-"+pad(l)+"-"+pad(p);
}
function FillMarkMenu(){
	var max =30;
	var dim = 20;
	var menux = 5;
	var menuy = 6;
	//mark png is 10x3 of individual marks
	var markimagedim = 20;
	var markimagecols=10;
	var markimagerows=3;
	for(var y =0;y<menuy;y++){
		for(var x =0;x<menux;x++){
			var markid = x+ y*menux;	
			var posx= markid % markimagecols;
			var posy= Math.floor(markid / markimagecols);
			posx*=markimagedim;
			posy*=markimagedim;
			$("#mk"+markid).css("background-position-x", "-"+posx+"px").css("background-position-y", "-"+posy+"px");
			//.html(markid);
		}
	}
}
function MarkSelected(){
	var x = ($(this).css("background-position-x"));
	var y = ($(this).css("background-position-y"));
	markposin = x +  " " + y;
	$(".squarecel[data-mark='in']").each(function(){
		SetMarkTimeout($(this));
	});
	
	
	
	
}
function SetMarkTimeout(cell){
	var x = parseInt(cell.attr("data-x"))+0;
	var y = parseInt(cell.attr("data-y"))+0;
	var waittime=x+y;
	waittime*=50;
	setTimeout(function(){ ChangeMark(cell); }, waittime);
}
function ChangeMark(cell){
	cell.css("background-position",markposin);
}

function bwpx(s){
	var res = s.replace("px","");
	return res+0;
	
}