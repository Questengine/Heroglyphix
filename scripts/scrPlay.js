function ManageMark(cel,event){
	if(gGlow){
		RevealAction();
	}
	else{
		if(event.which == "1"){
			if(cel.attr("data-mark")=="not"){
				gMark="in";
			}
			else{  
				if(cel.attr("data-mark")=="in"){
				gMark="out";
				}
				else{  
					gMark="not"; 
				}
			}
		}  
		if(event.which == "3"){ 
			if(cel.attr("data-mark")=="out"){
				gMark="not";
			}
			else{   
				gMark="out"; 
			}
		} 
		DoMark(cel); 
		
	}
}
function MarkNone(){
	gMark="none";
}
function MousedOver(){
	DoMark($(this));
}
function DoMark(thiscel){
	if(gMark != "none"){
		thiscel.attr("data-mark", gMark);
		if(thiscel.attr("data-mark")=="in"){
			//thiscel.html("O");
			thiscel.css("background-position",markposin);
		}
		if(thiscel.attr("data-mark")=="out"){
			//thiscel.html("O");
			thiscel.css("background-position",markposout);
		}
		if(thiscel.attr("data-mark")=="not"){
			//thiscel.html("O");
			thiscel.css("background-position",markposnot);
		}
	}
	CheckCompletion();
}
function CheckCompletion(){
	gPuzPlayer= CurrentPuzzleState();
	if(IsFinished()){
		//alert("done");
		$(".cel").off( );
		PuzzleDone();
	}
	
}
function IsFinished(){
	return gPuzPlayer == gPuzCorrect;
}
function TimerTick(){
	gPuzTime--;
	var strmin = parseInt(gPuzTime/60);
	var strsec = gPuzTime%60;;
	if(parseInt(strsec)<10){strsec = "0"+strsec;}
	var strTime = strmin+":"+strsec;
	if(gPuzTime < 1){
		strTime = "TIME!";
		clearInterval(gTimerInterval);
	}
	$("#dClock").html(strTime);
}

function RevealFootprint(){
	$(".cel").removeClass("revealfootprint");
	var count = gReveal.length;
	var cx = parseInt($(this).attr("data-x"));
	var cy = parseInt($(this).attr("data-y"));
 	for(var i = 0;i<count;i++){
		var x = parseInt(gReveal[i].split(",")[0]);
		var y = parseInt(gReveal[i].split(",")[1]);
		var dx = cx+x;
		var dy = cy + y;
		$(".cel[data-x='"+dx+"'][data-y='"+dy+"']").addClass("revealfootprint");
	}
	
}
function RevealAction(){
	var dim = Math.sqrt(gPuzCorrect.length);
	$(".cel.revealfootprint").each(function(){
		var x = parseInt($(this).attr("data-x"));
		var y = parseInt($(this).attr("data-y"));
		var i = x+y*dim;
		var correct = gPuzCorrect.substring(i,i+1);
		var mark = "out";
		var markpos = markposout;
		if(correct == "1"){ mark = "in"; markpos = markposin;}
		$(this).attr("data-mark",mark);
		
		$(this).css("background-position",markpos);
		
		
	});
	
	RevealEnd();
}
	