var gPoxSize = 80;
var gPoxRow = 10;
var gPoxInterval;
var gPoxItr;
var gCurAnim;
var gPoxHpMax=6;
var gPoxHp;

var gPoxAll = [arrPoxRefRoll];//,arrPoxBite,arrPoxScratch,arrPoxShake,arrPoxHop,arrPoxStampHop,arrPoxSideLeap];

function PoxStart(){
		
	Info("POX ARRIVES!!");
	clearInterval(gPoxInterval);
	gPoxHp = gPoxHpMax;
	gPoxItr = 0;
	
	$("#dPoxHp").html("");	
	gPoxInterval = setInterval(PoxLoop,20)
	var count = gPoxAll.length;
	var rand= Math.floor(Math.random() * count);  
	
	gCurAnim = gPoxAll[rand];
	$("#dPox").css("display","block");
	$("#dPox").fadeIn();
}

function PoxLoop(){
		
	gPoxItr++;
	if(gPoxItr < gCurAnim.length){
			
		var action = gCurAnim[gPoxItr];
		if(action.substring(0,1)=="f"){
			PoxFrame(action.substring(1));
		}
		else{
			if(action.substring(0,1)=="a"){
				PoxAttack(action.substring(1));
			}
				else{ 
					PoxMove(action);
				}
		}	
	}
	else{
		clearInterval(gPoxInterval);
		gPoxItr = 0;
		$("#dPox").fadeOut();
		
		
	Info("Pox has fled... for now.");
	}	
	
		
}
function PoxMove(a){
		
	var x = a.split(":")[0];
	var y = a.split(":")[1];
	$("#dPox").css("top",y+"px");
	$("#dPox").css("left",x+"px");
		
}
function PoxFrame(i){
		
/*	gClassCellSize = "cel"+gCurMarkSize;
	markposnot = "0px -" +gCurMarkSize*3 + "px";
	markposout = "-"+gCurMarkSize*9+"px -" +gCurMarkSize*3 + "px";
	
	*/	
	var ix = i%gPoxRow;
	var iy = Math.floor(i/gPoxRow);
	var cx = (-1)*ix*gPoxSize;
	var cy = (-1)*iy*gPoxSize;
	
	var coords = cx+"px "+ cy+ "px";
	$("#dPox").css("background-position",coords);
}
function PoxAttack(coords){
		var x = coords.split(",")[0];
		var y = coords.split(",")[1];
		var poxedcel = $(".cel[data-x='"+x+"'][data-y='"+y+"']");
		poxedcel.attr("data-mark", "pox");
		DoMark(poxedcel);
		
}
function PoxHit(){
		
	
	$("#dPoxHp").html(gPoxHp);			
	gPoxHp--;
	 
}