var gToonItr;
var gToonInterval;
var gToonArr;
var toonpng;
var gToonIntervalDuration =188;

function InitToon(arr){
	
	gToonItr = 0;
	gToonArr = arr;
	gToonInterval = setInterval(OneToonInstruction, gToonIntervalDuration);
}

function OneToonInstruction(){
	if(gToonItr < gToonArr.length){
		var inst = gToonArr[gToonItr];
		AnimateToon(inst)
		gToonItr++;
	}
	else{
		clearInterval(gToonInterval);
	}
}
function AnimateToon(action){
		if(action.substring(0,4)=="draw"){
			 var dx = parseInt(action.split(" ")[1]);
			 var dy = parseInt(action.split(" ")[2]) ;
		     var sx = parseInt(action.split(" ")[3]) ;
			 var sy = parseInt(action.split(" ")[4]) ;
			 var sw = parseInt(action.split(" ")[5]) ;
			 var sh = parseInt(action.split(" ")[6]) ;
			Blit(dx, dy, sx, sy, sw, sh);
		}
		if(action.substring(0,4)=="load"){
			 var imagename = (action.split(" ")[1]);
			 $("#imgToon").attr("src","images/Intro/"+imagename+".png");
			
		}
		if(action == "clear"){
			ToonClear();
		}
}
function Blit(dx, dy, sx, sy, sw, sh){
	
  var c = document.getElementById("bwCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("imgToon");
  ctx.drawImage(img,sx, sy, sw, sh, dx, dy, sw, sh);
}
function ToonClear(){
		
	  var c = document.getElementById("bwCanvas");
	  var ctx = c.getContext("2d");
	ctx.fillRect(0, 0, 800, 600);
}