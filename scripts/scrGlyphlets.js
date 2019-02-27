function InitGlyphlets(code){
	
	var puzdata = GetPuzData(code);
	if(puzdata.includes(",")){
		var arrPuz = puzdata.split(",");
		var count =arrPuz.length;
		 $("#dGlyphlets").html(BuildGlyphlets(count)+BuildGlyphletConfirm()).fadeIn();
		 //$("#dPuzzles").html(BuildLocPuzConfirm());
		 $(".glyphlet").on("click",PromptGlyphletConfirm);
		 $("#dGlyphletConfirm").on("click",GlyphletConfirmed); 
		 $(".glyphlet").css("background-image","url('images/extras/glyphlet"+count+".png')");
		 $("#tblGlyphlets").css("background-image","url('images/puzzles/"+code+".bmp')");
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
			 var display =   "background-position:111px 111px"
			 if(!isPuzzlePartComplete(CurCode(),i)){
				display = PuzzlePartUndone(count,i)
			 }
			 strTable += "<td class='glyphlet' data-gid='"+i+"' style='"+display+"'></td>";
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
	  $(".dialoguechild").fadeOut("slow",function(){$(this).html("")})
 }
 
 function PuzzlePartUndone(count, part){
	 var res = "";
	 var dim= Math.sqrt(count)
	 var x= part % dim;
	 var y= Math.floor(part/dim);
	 var pixcount = 96/dim;
	 var px = "-"+(x*pixcount);
	 var py = "-"+(y*pixcount);
//	 res = "background-image:url(images/extra/glyphlet"+count+".png),";
	
	 res += "background-position:" +px+"px " +py+ "px"
	 return res;
 }
 