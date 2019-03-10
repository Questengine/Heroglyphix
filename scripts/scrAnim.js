
function DiagTimeout(cell){
	
	var x = parseInt(cell.attr("data-x"))+0;
	var y = parseInt(cell.attr("data-y"))+0;
	return x+y;
}

function SetSolidRemoveTimeout(cell){ 
	var waittime=DiagTimeout(cell)
	waittime*=20;
	setTimeout(function(){ SolidMark(cell); }, waittime)
	
	setTimeout(function(){ RemoveMark(cell); }, waittime*3);
}
function SolidMark(cell){
	cell.css("background-position",markposin);
}

function SetRemoveTimeout(cell){ 
	var waittime=DiagTimeout(cell)
	waittime*=60;
	setTimeout(function(){ RemoveMark(cell); }, waittime);
}
function RemoveMark(cell){
	cell.fadeOut(550,function(){$(this).remove()});
}
function SetBlinkTimeout(cell){ 
	var waittime=DiagTimeout(cell)
	waittime*=50;
	setTimeout(function(){ BlinkMark(cell); }, waittime);
}
function SetMapBlink(cell, wait){
	setTimeout(function(){Blink(cell)},wait);
}
function BlinkMark(cell){
	Blink(cell);
}

function Blink(jq){
	jq.fadeOut(200).fadeIn(666);

}
function SetFadeTimeout(cell){
	var waittime=DiagTimeout(cell)
	waittime*=50;
	setTimeout(function(){ FadeClue(cell); }, waittime);
}
function FadeClue(cell){
	cell.css("opacity","0.5");
}
function HourGlass(){

		TickHourGlass();
		TickSpeechNext();
		TickSand();
}
function TickHourGlass(){
	var cFrames=14;
	gHourGlassFrame++;
	gHourGlassFrame = gHourGlassFrame % cFrames;
	var cWid=61;
	var cHgt=93;
	var cRowCount;
	var offset = "-"+cWid*gHourGlassFrame+"px 0px";
	$("#dHourGlass").css("background-position",offset); 
		
}
function TickSand(){
	
	
	var frame = Math.floor(gPuzTime*10/gPuzTimeMax);
	
	frame = 10-frame;
	
	var cFrames=11;
	//gSandFrame++;
	//gSandFrame = gSandFrame % cFrames;
	var cWid =35;
	var cHgt=54;
	var offset = "-"+cWid*frame+"px 0px";
	$("#dSand").css("background-position",offset);
} 
function TickSpeechNext(){
	var cFrames=6;
	gTextAdvanceFrame++;
	gTextAdvanceFrame = gTextAdvanceFrame % cFrames;
	var cWid=17;
	var cHgt=17;
	var cRowCount;
	var offset = "-"+cWid*gTextAdvanceFrame+"px 0px";
	$("#dSpeechNext").css("background-position",offset); 
		
}
function Reveal(){
	if(gRevealActive){
		if(!gGlow){
			RevealStart();
		}
		else{
			RevealCancel();
			Info("Reveal Spell canceled.  Charges unused.");
		}
			
	}
	else{
		Info("Reveal Spell unavailable during story");
	}
}
/*
function RevealStart(){
	if(gGlow){ 
		DoGlow();
	}
}
function DoGlow(){
	$("#dGrid, #dReveal").css("border","solid 1px yellow");
	if(gGlow){ 
		$("#dGrid, #dReveal").animate({
			borderWidth:"20px"
			},
			900,"swing",function(){
				DoGlow();
			});
	}
	else{
		RevealEnd();
	}
}
function RevealEnd(){
	
}
function StartGlow(i){
	var glower = "<div id='glow"+i+"' class='glowdrop' data-i='"+i+"'>.</div>";
	$("#dFullScreen").append(glower);
	$("#glow"+i).css("top",78*i+"px");
	//$("#glow"+i).animate({top:"-100px"},2000,"linear",function(){NewGlow($(this).attr("data-i"))});
}*/
 
function RevealStart(){
	if(parseInt(GetRevealID())>0){
	
		gGlow=true;
		gReveal = arrReveal[gStage-1].split(";");
		$(".cel").on("mouseenter",RevealFootprint);
		Info("Reveal spell active. Click 'Reveal' again to cancel.");
		//$("#dGrid").on("mouseover",SaveMouseCoords);
		//gGlowInterval = setInterval(DoGlow,200);
		var count = 3;
		for(var i=0;i<count;i++){
			var time = i*300 +parseInt(Math.random()*222);;
			setTimeout(NewGlow,time);
		}		
	}
	else{
			
		Info("No charges of the Reveal Spell remain :-(");
	}
}
 
function NewGlow(){
	i = parseInt(Math.random()*122);
	if(gGlow){
		var glower = "<div id='glow"+i+"' class='glowdrop revealcolor"+GetIntStage()+"'></div>";
		$("#dReveal").append(glower); 
		var cssy = $("#dReveal").css("top"); 
		var cssx = $("#dReveal").css("left"); 
		//var left =parseInt( gMousex +i/10);
		$("#glow"+i).animate({
			width:"+=60px",
			height:"+=60px",
			top:"-=30px",
			left:"-=30px"
			
			},
			1600+2*i,"swing",function(){
				NewGlow(Math.floor());
				$(this).remove();
			});
	}
}
 function DoGlow(){
	$(".glowdrop").each(function(){
		
	});
}
function RevealEnd(){
	
	var id = GetRevealID();
	$("[data-revealid='"+id+"']").attr("data-spent","1").fadeOut(1111);
	var remaining = parseInt(GetRevealID());
	if(remaining > 0){ 
		Info("Only " +remaining+" Reveal Charges remain!");
	}
	else{ 	
		Info("No more Reveal Charges remain!");
	}
	RevealCancel();
} 
function RevealCancel(){
	clearInterval(gGlowInterval);
	
	gGlow= false;
	$(".cel").off("mouseenter",RevealFootprint);
	$(".cel").removeClass("revealfootprint"+GetIntStage());
		 
	$(".glowdrop").each(function(){
		var i = $(this).attr("data-i");
		var time = parseInt(i)*400;
		$(this).fadeOut(time, function(){$(this).remove()});
		
	});
}	 
		 
		 
	 