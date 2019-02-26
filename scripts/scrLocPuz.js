 function InitLocPuz(locname){
	 $("#dPuzzles").html(BuildLocPuz(locname)+BuildLocPuzConfirm());
	 //$("#dPuzzles").html(BuildLocPuzConfirm());
	 $(".celllocpuz").on("click",PromptLocPuz);
	 $("#dLocPuzConfirm").on("click",LocPuzConfirmed);
 }
 
 function BuildLocPuz(stgname){
	 
	var strTable = "<table id='tblLocPuz'>";
	var locnames = arrLocationNames[stgname];
	var loccount = LocCount(stgname);
	for(var loc=0;loc<loccount;loc++){
		strTable += "<tr class='rowlocpuz'>"+LocName(locnames.split(",")[loc])+PuzList(loc)+"</tr>";
	} 
	strTable += "</table>";
	return strTable;	
 }
 function LocName(name){
	 return "<td  class='celllocation'>"+name+"</td>";
 }
 function PuzList(loc){
	 var res = "";
	 loc+=1;
	 var pcount = PuzCount(gStage,loc);
	 for(var p = 1;p<=pcount;p++){
		var code = BuildCode(gStage,loc,p);
		if(code in arrPuzzles){
			res += "<td class='celllocpuz' data-puz='"+code+"'>P"+code+"</td>";
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
 }
 