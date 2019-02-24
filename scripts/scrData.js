
var arrStages = ["Library", "Skimlet", "Howard"]

var arrLocationNames = {
	"Library":"Library,ReadingRoomII",
	"Skimlet":"Blacksmith,TownSquare,Pasticceria,ShadeStreet,AxeAndStump,Farm,WizlabHoward",
	"Howard":"EoForrest,DeeperForest,Lanternsbane,TRexValley,Shoreline,Steamer,WizlabJudith"
};
function LocCount(locname){
	return arrLocationNames[locname].split(",").length;
}
var arrPuzzles={
	
	"01-01-01":"1111111110111001100010000",
	"01-02-01":"1111110001100010111011111",
	"01-02-02":"1000101110101011111101110",
	"02-01-01":"0111111111111111011111110011110000011100000111000111111001111111",
	"02-01-02":"0001110001110111101111111011111101111111000101000001010000011100",
	"02-01-03":"0111110010100011100001010111111111101010101111111000000101111110",
	"02-01-04":"0110011010100101110000111100001111000011101001010111111000111100",
	"02-01-05":"0111111010000011111111011011001111001101101100010100001000111100",
	"03-01-01":"0111110010100011100001010111111111101010101111111000000101111110",
	"03-01-02":"0110011010100101110000111100001111000011101001010111111000111100",
	"04-01-01":"0111111010000011111111011011001111001101101100010100001000111100"
	 
}    ;
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
var arrTextFiles ={

	"01-01-01":"txt 01-01-01 text for this puzzle first",
	"01-01-02":"txt 01-01-02 text second puzle",
	"01-01-03":"txt 01-01-03 text third buzzle text",
	"02-01-01":"txt 02-01-01 text stage 2 text 1 ",
	"02-01-02":"txt 02-01-02 text state 2 text second",
	"02-01-03":"txt 02-01-03 text stag 2 thirg text",
	"02-01-04":"txt 02-01-04 text stage 2 fortn forth forth ",
	"02-01-05":"txt 02-01-05 text state 2 pext 5 5 5 5 5"
	 
};
	
var arrGameScript={
	//stagenum,locname, puzcount,
	"AxeAndStump":"2,5,8"
};


/*
var arrIntro =[];
arrIntro["AxeAndStump"] = "
	pic 01 00
	newline,bub 0
	newline,txt \"Ha ha, yes. Rather an easy one, even for you my humble student.\"
	newline,txt \"Every row and column required that 5 marks be made.\"
	newline,pic 00 01
	newline,txt \"No problem!\"
	newline,pic 01 01
	newline,txt \"But it does illustrate a most important point: every glyph has an element of certainty.\"
	newline,txt \"Always look for that certainty and you will have found your place to begin!\"
	newline,txt \"Now let\'s see how you fare with the next!...\"
	";
	
	*/
	
	
	/*
	
	
	
//STG 3 STG 3 STG 3 STG 3 STG 3 STG 3 STG 3 STG 3 STG 3 STG 3 STG 3
//
stg 002 Howard'sTrail
//
//
loc 000 EoForest
puz 03-01-01.tbt 3600
puz 03-01-02.tbt 3600
puz 03-01-03.tbt 3600
puz 03-01-04.tbt 3600
puz 03-01-05.tbt 3600
puz 03-01-06.tbt 3600
puz 03-01-07.tbt 3600
//
loc 001 DeeperForest
puz 03-02-01.tbt 3600
puz 03-02-02.tbt 3600
puz 03-02-03.tbt 3600
	
	*/