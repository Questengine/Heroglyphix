var gPoxSize = 80;
var gPoxRow = 10;
var gPoxInterval;
var gPoxItr;
var gCurAnim;
var gPoxHpMax=1;
var gPoxTimeHurt = 1;
var gPoxSmokeFrames=9;
var gPoxSparkFrames = 8;
var gPoxSmokeItr=0;
var gPoxSparkItr=0;
var gPoxFXFrames=0;
var gPoxHp;
var gPoxArrivalInterval;
var gPoxAppearFreq =10;//how oftten do we check to see if pox should appear;
var gPoxAppearPercBase =40;//percentage.  1-100 lower than this number and Pox DOES appear
var gPoxAppearPerc ;//percentage.  1-100 lower than this number and Pox DOES appear
var gPoxActive;
var gPoxIntervalDuration=20 ;// milliseconds of delay befor updating pox, 20 = 50 frames/second
//var gPoxInitialDelay=20;//after the puzzle starts, 

var gPoxAll = [arrPoxRefRoll,arrPoxBite,arrPoxScratch,arrPoxShake,arrPoxHop,arrPoxStampHop,arrPoxSideLeap];
function PoxPrep(){
	gPoxAppearPerc = gPoxAppearPercBase; //reset to base for each puzzle1
	if(gPuzCorrect.length == 225){ 			
		gPoxActive = true;
		Info("The Gremlin is near ");
			gPoxArrivalInterval = setInterval(DoesPoxAppear,gPoxAppearFreq*1000);
	}
	else{
		gPoxActive = false;
	}
	
		
}
function DoesPoxAppear(){
		
		var perc= Math.floor(Math.random() * 100);  
		if(perc < gPoxAppearPerc){
			//Info("The Gremlin is near ("+ perc +" < "+ gPoxAppearPerc );
			PoxStart();
			gPoxAppearPerc = gPoxAppearPercBase; //reset to base after each appearance
		}
		else{
			gPoxAppearPerc+=2;//each time pox doesn't appear, incaerse the chance for next time sligtly
		}
		
}
function PoxStart(){
		
	Info("POX ARRIVES!!");
	clearInterval(gPoxInterval);
	gPoxHp = gPoxHpMax;
	gPoxItr = 0;
	gPoxSmokeItr=0;
	gPoxFXFrames = gPoxSmokeFrames;
	$("#dPoxHp").html("");	
	gPoxInterval = setInterval(PoxLoop,gPoxIntervalDuration)
	var count = gPoxAll.length;
	var rand= Math.floor(Math.random() * count);  
	
	gCurAnim = gPoxAll[rand];
	PoxInitPositionAndFrame();
	$("#dPox, #dPoxFx").css({display:"block"});
	$("#dPoxFx").css({"background-image":"url('images/poxsmoke.png')"});
	$("#dPox").fadeIn();
}
function PoxFX(itr){
	itr = Math.floor(itr/3)
	if(itr < gPoxFXFrames){
		PoxFrameFX(itr);
		if(itr<=2){
			$("#dPoxFx").css({zIndex:"30"});
		}
		else{				
			$("#dPoxFx").css({zIndex:"10"});
		}
	}
	else{
			$("#dPoxFx").css({display:"none"});
	}
}
function PoxLoop(){
	PoxFX(gPoxItr);
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
				if(action.substring(0,1)=="t"){
					PoxTime();
				}
				else{ 
					PoxMove(action);
				}
			}
		}	
	}
	else{
		clearInterval(gPoxInterval);
		gPoxItr = 0;
		$("#dPox").fadeOut();
		
		if(gPoxHp > 0){
			Info("Pox has fled... for now."); 
		}
		else{ 
			Info("POX DISPATCHED!!"); 
		}
	}	
	
		
}
function PoxTime(){
	TimerAttacked();
}

/*
walk far enough into the pox animation to find a starting coord, then move him there, otheriwse his first draw is the last pos of the previous script
*/
function PoxInitPositionAndFrame(){ 
	var foundcoord = false;
	var foundframe = false;
	var i = 0;
	var instruction =gCurAnim[i];
	var frame=gCurAnim[i];
	while(!foundcoord){
		instruction =gCurAnim[i];
		if(instruction.substring(0,1).toUpperCase() == "f".toUpperCase()){
			i++; 
		}
		else{foundcoord = true;}
	} 
	PoxMove(instruction);
	while(!foundframe){
		frame =gCurAnim[i];
		if(frame.substring(0,1).toUpperCase() != "f".toUpperCase()){
			i++; 
		}
		else{foundframe = true;}
	}
	PoxFrame(frame.substring(1));
	PoxFX(0);
}
function PoxMove(a){
		
	var x = a.split(":")[0];
	if(x != "x"){
		var y = a.split(":")[1];
		$("#dPox, #dPoxFx").css({
			top:y+"px",
			left:x+"px"
		});
		//$("#dPox").css("left",x+"px");
	}
	 	
}
function PoxFrameFX(i){
	var ix = i%gPoxFXFrames;
	var iy = Math.floor(i/gPoxFXFrames);
	var cx = (-1)*ix*gPoxSize;
	var cy = (-1)*iy*gPoxSize;
	
	var coords = cx+"px "+ cy+ "px";
	$("#dPoxFx").css("background-position",coords);
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
	var x ;	
	var y ;
	if(coords.includes(":")){
		x = coords.split(":")[0];
		y = coords.split(":")[1];
	}
	else{
		x = parseInt(coords)%15;
		y = Math.floor(parseInt(coords)/15)
	}
		
		
	var poxedcel = $(".cel[data-x='"+x+"'][data-y='"+y+"']");
	poxedcel.attr("data-mark", "pox");
	DoMark(poxedcel);
		
}
function PoxHit(){
		
	if(gPoxHp>0){ 
		$("#dPoxHp").html(gPoxHp);			
		gPoxHp--;
		if(gPoxHp<=0){
			RemovePox();
		}	
	}
	 
}
function RemovePox(){
	gPoxAppearPerc = parseInt(gPoxAppearPercBase/2);//if player strike pox, then he's less likely to appear for a while
	clearInterval(gPoxInterval); 
	
	gPoxItr = 0;
	$("#dPoxHp").html("");	
	gPoxInterval = setInterval(PoxLoop,gPoxIntervalDuration) 
	gCurAnim = arrPoxDie;
//	$("#dPox").css("display","block");
	$("#dPoxFx").css({
		"background-image":"url('images/poxspark.png')",
		"display":"block"
		});
	$("#dPox").fadeOut(2222);
}
function PoxDisable(){ 
	clearInterval(gPoxArrivalInterval);
}
function PoxPause(tf){//call from map init/cancel
	if(gPoxActive){ 
		if(tf){//true, pause pox
			PoxDisable()	;
		}
		else{//else, unpause pox
			gPoxArrivalInterval = setInterval(DoesPoxAppear,gPoxAppearFreq*1000);
		}
	}
		
}