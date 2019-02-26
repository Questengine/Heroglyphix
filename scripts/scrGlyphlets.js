function InitGlyphlets(code){
	
	var puzdata = GetPuzData(code);
	if(puzdata.includes(",")){
		var arrPuz = puzdata.split(",");
		var count =arrPuz.length;
		 $("#dGlyphlets").html(BuildGlyphlets(count)+BuildGlyphletConfirm());
		 //$("#dPuzzles").html(BuildLocPuzConfirm());
		 $(".glyphlet").on("click",PromptGlyphletConfirm);
		 $("#dGlyphletConfirm").on("click",GlyphletConfirmed);
		DialogueOpen();
		
	}
	
}

 
 function BuildGlyphlets(count){
	var strTable = "<table id='tblGlyphlets'>";
	
	 var dim = Math.sqrt(count);
	 for(var y = 0;y<dim;y++){
		 strTable += "<tr>";
		 for(var x = 0;x<dim;x++){
			 var i = 0;
			 i = x+y*dim;
			 var display = i;
			 if(isPuzzlePartComplete(CurCode(),i)){
				 display="X"
			 }
			 strTable += "<td class='glyphlet' data-gid='"+i+"'>"+display+"</td>";
		} 
		strTable += "</tr>";
	 }
	
	
	strTable += "</table>";
	return strTable;	
 }
 function BuildGlyphletConfirm(){
	 var res = "<div id='dGlyphletConfirm'  >CONFPf3333fIMM</div>";
	 return res;
 }
 function PromptGlyphletConfirm(){ 
	 //alert($(this).attr("data-puz"));
	 var code = $(this).attr("data-gid");
	 $("#dGlyphletConfirm").html("Load " + code + "?");
	 $("#dGlyphletConfirm").attr( "data-parttoload",code );
 }
 function GlyphletConfirmed(){
	 var part = $(this).attr("data-parttoload");
	 gPart = part;
	 Init(CurCode(), part);//glyphlet selected,send it AND code 
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