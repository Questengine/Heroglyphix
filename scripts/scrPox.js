var gPoxSize = 80;
var gPoxRow = 10;
var gPoxInterval;
var gPoxItr;
var gCurAnim;
var gPoxHpMax=4;
var gPoxTimeHurt = 1;
var gPoxHp;
var gPoxArrivalInterval;
var gPoxAppearFreq =10;//how oftten do we check to see if pox should appear;
var gPoxAppearPercBase =40;//percentage.  1-100 lower than this number and Pox DOES appear
var gPoxAppearPerc ;//percentage.  1-100 lower than this number and Pox DOES appear
var gPoxActive;
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
function PoxMove(a){
		
	var x = a.split(":")[0];
	if(x != "x"){
		var y = a.split(":")[1];
		$("#dPox").css("top",y+"px");
		$("#dPox").css("left",x+"px");
	}
	
		
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
	gPoxInterval = setInterval(PoxLoop,20) 
	gCurAnim = arrPoxDie;
	$("#dPox").css("display","block");
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