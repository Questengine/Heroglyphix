function ManageMark(){
	if($(this).attr("data-mark")=="in"){
		gMark="out";
	}
	else{
		gMark="in";
	}
	DoMark($(this));
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
			thiscel.html("O");
		}
		else{
			thiscel.html(".");
		}
	}
}