 function InitLocPuz(code){
	 
	  if(typeof stagecode === "undefined"){
		 code=CurCode();
	 }
	 SetStage(code);
	 //FillMarkMenu();
	 DialogueOpen();
	 var locpuz = BuildLocPuz(code)+BuildLocPuzConfirm();
	 
	 $("#dPuzzles").html(locpuz).fadeIn();
	 $(".celllocation").each(function(){
		var x = $(this).attr("data-picx");
		var y = $(this).attr("data-picy");
		var imageid = $(this).attr("data-imageid");
		var style = "background-image:url('images/locations/l-name"+imageid+".png')";
		$(this).css({
			"background-image":"url('images/locations/l-name"+imageid+".png'",
			"background-position":"-"+x+"px -"+y +"px",
		});
	 });
	 
	 $("#dPuzzles").fadeIn();
	 //$("#dPuzzles").html(BuildLocPuzConfirm
	 $(".celllocpuz").on("click",PromptLocPuz);
	 $(".celllocation").on("click",PromptLocPuz);
	 $("#dLocPuzConfirm").on("click",LocPuzConfirmed);
	 $("#dLocPuzConfirm").fadeOut(1);
 }
 
 function BuildLocPuz(code){
	 
	var strTable ="<div id='dInfoLocPuz'>Select a number to play a puzzle, or a location name to see the intro story.<br> (It's really best to start at the beginning!!)</div>";
	strTable+= "<table id='tblLocPuz'>";
	//var locnames = arrLocationNames[stagecode.substring(0,5)];
	var code = GetCodeStage(code);
	var count =0;
	 //for each location
	/*for (var key in arrLocationNames) {
		if(key.substring(0,2) == code){  //give some int here to increment celllocationnae header belowm
		 	strTable += "<tr class='rowlocpuz'>"+LocNamePic(key)+PuzList(key)+"</tr>"; 
		} 
	} 
	*/
	var istage = GetIntStage(code);
	var maxloc = GetHighestLocForStage(istage)
	for (var i =1;i<maxloc; i++) {
		var codesl = pad(istage)+"-"+pad(i);
		if(codesl in arrLocationNames){
			strTable += "<tr class='rowlocpuz'>"+LocNamePic(codesl)+PuzList(codesl)+"</tr>"; 
		} 
	} 
	
	strTable += "</table>";
	return strTable;	
 } 
 function PuzList(locationcode){
	 var res = ""; 
	 //for each location
	 var p = 1;
	 var foundpuzzles = false;
	 for (var key in arrPuzzles) {
		if(key.substring(0,5) == locationcode){
			foundpuzzles = true;
			var pic = p;
			var style="style='background-image:url(images/extras/p"+p+".png)'";
			if(isPuzzleComplete(key)){
				style="style='background-image:url(images/puzzles/"+key+".bmp)'";
			}
			
			res += "<td class='celllocpuz' data-puz='"+key+"' "+style+"></td>";
			p++;
		} 
	} 
	if(!foundpuzzles){
//		res += "<td class='celllocnopuz' >No Puzzles, Just Story</td>";
	}
 
	 return res;
 }
 function BuildLocPuzConfirm(){
	 var res = "<div id='dLocPuzConfirm' class='btnBig'>confirm</div>";
	 return res;
 }
 function PromptLocPuz(){
	 
	 //alert($(this).attr("data-puz"));
	 var code = $(this).attr("data-puz");
	 if(GetIntPuzzle(code)!=0){//load puz}
		$("#dLocPuzConfirm").html("Load Puzzle?");
	 }
	 else{//load intro
		$("#dLocPuzConfirm").html("Start Story?");
	 }
			
	 $("#dLocPuzConfirm").attr( "data-puztoload",code );
	Blink($("#dLocPuzConfirm"));
 }
 function LocPuzConfirmed(){
	 var code = $(this).attr("data-puztoload");
	SetCode(code);
	
	var unsolvedpart = 0;
	if(GetIntPuzzle>0){
		 GetUnsolvedPart(code);
		 if(unsolvedpart <0){
				unsolvedpart = 0;
		 }
		 
	}
	 Init(code,unsolvedpart);
	 DialogueClose();
	  $(".dialoguechild").fadeOut("slow",function(){$(this).html("")})
	  ConfirmPlayScreenVisible();
	LocImageAndTitle();
 }
 function ConfirmPlayScreenVisible(){
	 StageBackground(); 
	  $(".hideonload").fadeIn();
	 
 }
 function LocNamePic(codesl){
 	var key = codesl;
	//var key = CurCodeStageLoc(CurCode());
	key+= "-00";
	var locStage = parseInt(codesl.split("-")[0]);
	locStage-=1;//loc numbers are zero based in filenames;
	locStage = pad(locStage);
	var locNameIndex = parseInt(codesl.split("-")[1]);
	locNameIndex-=1;//to make zero based
	var locnamex = locNameIndex % constLocNamePerRow;
	var locnamey = Math.floor(locNameIndex/constLocNamePerRow);
	locnamex*= constLocNameWid;
	locnamey*= constLocNameHgt;
	var lnameimageid="data-imageid='"+locStage+"'";
	var lnamepicx="data-picx='"+locnamex+"'";
	var lnamepicy="data-picy='"+locnamey+"'";
	var picdata = lnameimageid + " " +lnamepicx +" " + lnamepicy;
	 var celllocation = "<td class='celllocationtd'><div class='celllocation' "+picdata+" data-puz='"+key+"'></div></td>";
	return celllocation;
}
	 
	 