function InitGlyphlets(code){
	
	var puz = LoadPuz(code);
	if(puz.includes(",")){
		var arrPuz = puz.split(",");
		var count =arrPuz.length;
		 $("#dPuzzles").html(BuildGlyphlets(count)+BuildGlyphletConfirm());
		 //$("#dPuzzles").html(BuildLocPuzConfirm());
		 $(".glyphlet").on("click",PromptGlyphletConfirm);
		 $("#dGlyphletConfirm").on("click",GlyphletConfirmed);
		
	}
	
}

 
 function BuildGlyphlets(count){
	var strTable = "<table id='tblGlyphlets'>";
	
	 var dim = Math.sqrt(count);
	 for(var y = 0;y<dim;y++){
		 strTable += "<tr>";
		 for(var x = 0;x<dim;x++){
		 
		 strTable += "<td>"+x+","+y+"</td>";
		} 
		 strTable += "</tr>";
	 }
	
	
	strTable += "</table>";
	return strTable;	
 }
 function BuildGlyphletConfirm(){
	 var res = "<div id='dGlyphletConfirm'>CONFPf3333fIMM</div>";
	 return res;
 }
 function PromptGlyphletConfirm(){ 
	 //alert($(this).attr("data-puz"));
	 var code = $(this).attr("data-part");
	 $("#dGlyphletConfirm").html("Load " + code + "?");
	 $("#dGlyphletConfirm").attr( "data-parttoload",code );
 }
 function GlyphletConfirmed(){
	 var code = $(this).attr("data-parttoload");
	 Init(code);
	 DialogueClose();
 }

/* 
 
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
 */