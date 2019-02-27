function SizeGrid(dim){
	if(dim ==5){
		gCurMarkSize=48;
	}
	if(dim ==8){
		gCurMarkSize=30;
	}
	if(dim ==12){
		gCurMarkSize=24;
	}
	if(dim ==15){
		gCurMarkSize=16;
	}
	if(dim ==20){
		gCurMarkSize=16;
	}
	  
	gClassCellSize = "cel"+gCurMarkSize;
	markposnot = "0px -" +gCurMarkSize*3 + "px";
	markposout = "-"+gCurMarkSize*9+"px -" +gCurMarkSize*3 + "px";
}

function LoadLocationText(){
	gText =arrTextFiles[CurCode()];
	arrText = gText.split("newline,");
}

function LoadPuz43123Code(code){ 
	var puz = arrPuzzles[code];
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
function SetCode(code){
	gStage = parseInt(code.split("-")[0]);
	gLocation = parseInt(code.split("-")[1]);
	gPuzzle = parseInt(code.split("-")[2]);
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
	var xpx = ($(this).css("background-position-x"));
	var ypx = ($(this).css("background-position-y"));
	var x = bwpx(xpx);
	var y = bwpx(ypx);
	x=x/20;
	y=y/20;
	x*=gCurMarkSize;
	y*=gCurMarkSize;
	markposin = x +  "px " + y+"px";
	
	ReDrawGrid();
	
}
function ReDrawGrid(){
	$(".squarecel[data-mark='in']").each(function(){
		SetMarkTimeout($(this));
	});
}
function ClearGrid(){
	$(".cel").each(function(){
		$(this).css("background-position",markposout);
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
function AutoSolve(){
	$("#dPortrait").html("AUTOSOLVING");
	var puz = gPuzCorrect;
	var dim = Math.sqrt(puz.length);
	var x = 0;
	var y = 0;
	for(y = 0;y<dim;y++){
		for(x = 0;x<dim;x++){
			var index= x+y*dim;
			var thischar = puz.substring(index, index+1);
			if(thischar=="0"){mark = "out";}
			else{mark = "in";}
			$(".cel[data-x='"+x+"'][data-y='"+y+"']").attr("data-mark",mark);
		}	
	}	 
	ClearGrid();
	ReDrawGrid();
	CheckCompletion();
}
function StageBackground( ){
	
	$("#dFullScreen").css("background-image","url('images/locations/gp"+pad(gStage)+".png')") ;
}
function bwpx(s){
	var res = s.replace("px","");
	var ires = parseInt(res);
	return ires;
	
}
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};