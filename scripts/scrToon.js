var gToonItr;
var gToonInterval;
var gToonArr;
var toonpng;
var gToonIntervalDuration =18;
var gToonWait=0;

function InitToon(arr){
	
	gToonItr = 0;
	gToonArr = arr;
	gToonInterval = setInterval(OneToonInstruction, gToonIntervalDuration);
}

function OneToonInstruction(){
	if(gToonItr < gToonArr.length){
		if(gToonWait>0){
			gToonWait--;
		}
		else{ 
			var inst = gToonArr[gToonItr];
			AnimateToon(inst)
			gToonItr++;
		}
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
		if(action.substring(0,1)=="w"){
			 gToonWait = parseInt((action.split(" ")[1]));
		}
		
}
function Blit(dx, dy, sx, sy, sw, sh){
	
  var c = document.getElementById("bwCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("imgToon");
  if(sx ==0){sx =1;}
  if(sy ==0){sy =1;}
  ctx.drawImage(img,sx, sy, sw, sh, dx, dy, sw, sh);
}
function ToonClear(){
		
	  var c = document.getElementById("bwCanvas");
	  var ctx = c.getContext("2d");
	ctx.fillRect(0, 0, 800, 600);
}