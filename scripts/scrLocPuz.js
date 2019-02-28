 function InitLocPuz(code){
	 
	  if(typeof code === "undefined"){
		 stagecode=CurCode();
	 }
	 DialogueOpen();
	 var locpuz = BuildLocPuz(stagecode)+BuildLocPuzConfirm();
	 $("#dPuzzles").html(locpuz).fadeIn();
	 //$("#dPuzzles").html(BuildLocPuzConfirm());
	 $(".celllocpuz").on("click",PromptLocPuz);
	 $("#dLocPuzConfirm").on("click",LocPuzConfirmed);
 }
 
 function BuildLocPuz(stagecode){
	 
	var strTable = "<table id='tblLocPuz'>";
	var locnames = arrLocationNames[stagecode.substring(0,5)];
	var stagecode = GetCodeStage(stagecode);
	var count =0;
	 //for each location
	for (var key in arrLocationNames) {
		if(key.substring(0,2) == stagecode){ 
		 	strTable += "<tr class='rowlocpuz'>"+LocName(arrLocationNames[key])+PuzList(key)+"</tr>"; 
		} 
	} 
	
	
	strTable += "</table>";
	return strTable;	
 }
 function LocName(name){
	 return "<td  class='celllocation'>"+name+"</td>";
 }
 function PuzList(locationcode){
	 var res = ""; 
	 //for each location
	 var p = 1;
	 for (var key in arrPuzzles) {
		if(key.substring(0,5) == locationcode){
			res += "<td class='celllocpuz' data-puz='"+key+"'>P"+p+"</td>";
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
	 $("#dLocPuzConfirm").html("Load " + code + "?");
	 $("#dLocPuzConfirm").attr( "data-puztoload",code );
 }
 function LocPuzConfirmed(){
	 var code = $(this).attr("data-puztoload");
	 SetCode(code);
	 Init(code);
	 DialogueClose();
	  $(".dialoguechild").fadeOut("slow",function(){$(this).html("")})
 }
 