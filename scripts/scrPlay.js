function ManageMark(cel,event){
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
		if(cel.attr("data-mark")=="in"){
			gMark="out";
		}
		else{  
			if(cel.attr("data-mark")=="out"){
				gMark="not";
			}
		}
	} 
	DoMark(cel); 
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
}