 function InitLocPuz(stagecode){
	 
	  if(typeof stagecode === "undefined"){
		 stagecode=CurCode();
	 }
	 SetStage(stagecode);
	 FillMarkMenu();
	 DialogueOpen();
	 var locpuz = BuildLocPuz(stagecode)+BuildLocPuzConfirm();
	 
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
 
 function BuildLocPuz(stagecode){
	 
	var strTable = "<table id='tblLocPuz'>";
	//var locnames = arrLocationNames[stagecode.substring(0,5)];
	var stagecode = GetCodeStage(stagecode);
	var count =0;
	 //for each location
	for (var key in arrLocationNames) {
		if(key.substring(0,2) == stagecode){  //give some int here to increment celllocationnae header belowm
		 	strTable += "<tr class='rowlocpuz'>"+LocNamePic(key)+PuzList(key)+"</tr>"; 
		} 
	} 
	
	
	strTable += "</table>";
	return strTable;	
 }
 function LocNameOLD(name){
	 return "<td  class='celllocation'>"+name+"</td>";
 }
 function PuzList(locationcode){
	 var res = ""; 
	 //for each location
	 var p = 1;
	 for (var key in arrPuzzles) {
		if(key.substring(0,5) == locationcode){
			var pic = p;
			var style="style='background-image:url(images/extras/p"+p+".png)'";
			if(isPuzzleComplete(key)){
				style="style='background-image:url(images/puzzles/"+key+".bmp)'";
			}
			
			res += "<td class='celllocpuz' data-puz='"+key+"' "+style+"></td>";
			p++;
		} 
	} 
 
	 return res;
 }
 function BuildLocPuzConfirm(){
	 var res = "<div id='dLocPuzConfirm'>CONFPf3333fIMM</div>";
	 return res;
 }
 function PromptLocPuz(){
	 
	 //alert($(this).attr("data-puz"));
	 var code = $(this).attr("data-puz");
	 if(GetIntPuzzle(code)!=0){//load puz}
		$("#dLocPuzConfirm").html("Load " + code + "?");
	 }
	 else{//load intro
		$("#dLocPuzConfirm").html("Load Location Intro ?");
	 }
			
	 $("#dLocPuzConfirm").attr( "data-puztoload",code );
	Blink($("#dLocPuzConfirm"));
 }
 function LocPuzConfirmed(){
	 var code = $(this).attr("data-puztoload");
	 SetCode(code);
	 Init(code);
	 DialogueClose();
	  $(".dialoguechild").fadeOut("slow",function(){$(this).html("")})
	  ConfirmPlayScreenVisible();
 }
 function ConfirmPlayScreenVisible(){
	 StageBackground(); 
	  $(".hideonload").fadeIn();
	 
 }
 function LocNamePic(code){
 	var key = code;
	//var key = CurCodeStageLoc(CurCode());
	key+= "-00";
	var locStage = parseInt(code.split("-")[0]);
	locStage-=1;//loc numbers are zero based in filenames;
	locStage = pad(locStage);
	var locNameIndex = parseInt(code.split("-")[1]);
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
	 
	 