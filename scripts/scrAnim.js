function Blink(jq){
	jq.fadeOut(200).fadeIn(666);

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
	if(!gGlow){
		gGlow=true;
		RevealStart();
		gReveal = arrReveal[0].split(";");
		$(".cel").on("mouseenter",RevealFootprint);
	}
	else{
		RevealEnd();
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
	$("#dGrid").on("mouseover",SaveMouseCoords);
	//gGlowInterval = setInterval(DoGlow,200);
	var count = 6;
	for(var i=0;i<count;i++){
		var time = i*300 +parseInt(Math.random()*222);;
		setTimeout(NewGlow,time);
	}
}
 
function NewGlow(){
	i = parseInt(Math.random()*122);
	if(gGlow){
		var glower = "<div id='glow"+i+"' class='glowdrop'></div>";
		$("#dFullScreen").append(glower); 
		//var left =parseInt( gMousex +i/10);
		$("#glow"+i).css({left:gMousex-20+"px",top:gMousey-20+"px",width:"50px",height:"50px"})
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
	clearInterval(gGlowInterval);
	
	gGlow= false;
	$(".cel").off("mouseenter",RevealFootprint);
	$(".cel").removeClass("revealfootprint");
		
	$("#dGrid").off("mouseover",SaveMouseCoords);
	$(".glowdrop").each(function(){
		var i = $(this).attr("data-i");
		var time = parseInt(i)*400;
		$(this).fadeOut(time, function(){$(this).remove()});
		
	});
} 