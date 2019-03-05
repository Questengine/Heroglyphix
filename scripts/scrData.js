
var arrStages321 = ["Library", "Skimlet", "Howard","Judith","Matthius", "Kara","Edizon"]

var arrReveal = ["0,0;0,1;0,-1", "1,0;-1,0;0,1;0,-1","1,1;-1,-1;-1,1;1,-1;0,0","-1,1;0,-1;1,-1;1,0;-1,0;0,1","-1,1;0,-1;1,-1;1,0;-1,0;0,1","-1,1;0,-1;1,-1;1,0;-1,0;0,1"];
var gCurReveal;

function StageCount(){ return arrStages.length;}
function StageName(stagecode){
	 if(typeof stagecode === "undefined"){
		 stagecode=pad(gStage);
	 }
	 return arrStages[stagecode];
}

 
function LocCount(stagecode){
	if(typeof stagecode === "undefined"){
		 stagecode=pad(gStage);
	 }
	var count =0;
	for (var key in arrLocationNames) {
		if(key.substring(0,2) == stagecode){count++;} 
	} 
	return count;
} 
function PuzCount(s,l){
	var keyexists = true;
	var p = 0;
	while(keyexists){
	
		var code = BuildCode(s,l,p+1);
		if(code in arrPuzzles){ 
				p++;
		}
		else{keyexists = false;} 
	}
	return p;
}

     
var arrIntro ={
	"AxeAndStump":"pic 01 00newline,bub 0newline,txt \"Haha,yes. Rather an easy one, even for you my humblestudent.\"newline,txt \"Every row and columnrequired that 5 marks be made.\"newline,bub 2newline,pic 00 01,newlinebub 3newline,txt \"No problem!\"newline,pic 01 01newline,txt \"But it does illustrate a most importantpoint: every glyph has an element of certainty.\"newline,txt \"Always look for that certaintyand you will have found your place to begin!\"newline,bub 3newline,txt \"Now let\'s see how you fare withthe next!...\"",
	"AxeAndStumpo": "pic 03 04newline,bub 0newline,txt \"Would you look at that, you\'ve cleared up. The Axe and Stump is open for business!\"newline,pic 00 01newline,bub 3newline,txt \"Yes, I\'ve survived my first (and probably last) trip to a tavern!\"newline,pic 00 05newline,bub 0newline,txt \"Well, I\'d better be going before your clientelle returns, Wilf.\"newline,pic 03 04newline,txt \"One for the road, squire? I\'ve got to reward you somehow.\"newline,pic 00 01newline,txt \"Um, that\'s okay - I just need to know which way the gremlin went.\"newline,pic 03 04newline,txt \"Oh blimey yeah. When I popped my head up from behind the bar I did catch sight of it running off.\"newline,txt \"Straight down that road. Towards the farmsteads.\"newline,pic 00 18newline,txt \"North, out of town?\"newline,pic 00 01newline,txt \"Egads! I have to get moving! Thanks.\"newline,pic 03 05newline,bub 2newline,txt \"Hey, squire! Poke its eyes out for -me-!!!...\"newline,pic 03 06newline,bub 1newline,txt \"...awww...Happy days.\""
	
}; 
var arrGameScript={
	//stagenum,locname, puzcount,
	"AxeAndStump":"2,5,8"
};
function ADMINMarkPuzzleComplete(code){
	var puzparts = gUPP[code];
	var newdata =puzparts.replace(/0/g,"1"); 
	gUPP[code]= newdata;
}
function BuildUPP(){
	var i = 0;
	for(var code in arrPuzzles){
		var onepuz = arrPuzzles[code];
		var length = onepuz.split(",").length;
		var progress = "";
		for(var p=0;p<length;p++){progress+="0";}
		gUPP[code] = progress;
		i++;
	}
	ADMINMarkPuzzleComplete("03-05-01");
	ADMINMarkPuzzleComplete("02-02-08");
	ADMINMarkPuzzleComplete("05-02-01");
	ADMINMarkPuzzleComplete("04-05-03");
	ADMINMarkPuzzleComplete("05-04-01");
	ADMINMarkPuzzleComplete("05-05-01");
	ADMINMarkPuzzleComplete("05-05-02");
	ADMINMarkPuzzleComplete("05-05-03");
	ADMINMarkPuzzleComplete("05-05-04");
	ADMINMarkPuzzleComplete("05-05-05");
}
function isPuzzleComplete(code){
	//if UPP includes a zero, then part of this puzzle isn't done
	 if(typeof code === "undefined"){
		 code=CurCode();
	 }
	return !gUPP[code].includes("0");
}
function isPuzzlePartComplete(code,part){
	var ipart = parseInt(part);
	//if UPP includes a zero, then part of this puzzle isn't done
	return gUPP[code].slice(ipart,ipart+1)=="1";
}
function MarkPuzzlePartDone(code,part){
	var ipart = parseInt(part);
	var puzparts = gUPP[code];
	var newdata =puzparts.slice(0,ipart)+"1"+puzparts.slice(ipart+1); 
	gUPP[code]= newdata;
}

