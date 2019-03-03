function BuildGrid(dim){
	
	 
	$("#tblGrid").fadeOut(2222,function(){ BuildGridDelayed(dim) });
	//RemoveOldGrid();
	
	//setTimeout(function(){ BuildGridDelayed(dim); }, 3111);
}
function BuildGridDelayed(dim){
	var x = dim;
	var y = dim;

	var strTable = "<table id='tblGrid'>";
	strTable += "<tr ><td style='font-size:xx-large,font-weight:bold,font-style:italic'>HG</td><td>VCLUES</td></tr>";
	strTable += "<tr><td>HCLUES</td><td>CELLS</td></tr>";
	strTable += "</table>";
	
	var vClues = BuildTable(x,y/2,"vc");
	var hClues = BuildTable(x/2,y,"hc"); 
	var grid = BuildTable(x,y,"cel");
	strTable = strTable.replace("VCLUES",vClues);
	strTable = strTable.replace("HCLUES",hClues);
	strTable = strTable.replace("CELLS",grid);
	$("#dGrid").html(strTable);
	
	$(".cel").on("mousedown",function(event){
		ManageMark($(this),event);
	});
	
	
	$(".cel").attr("data-mark","not");
	$(".cel").on("mouseover",MousedOver);
	$(".cel").on("mouseup",MarkNone);
	$(".cel, .vc, .hc").addClass("squarecel");
	$(".cel, .vc, .hc").addClass(gClassCellSize);
	$(".cel").css("background-image", "url('images/marks/marks"+gCurMarkSize+".png')");
	$(".cel").each(function(){
		$(this).css("background-position",markposnot); 
	});
	$(".squarecel").each(function(){ 
		SetBlinkTimeout($(this));
	});
	BuildPuzzle(gPuzCorrect);
	FillCluesH( gPuzCorrect);
	FillCluesV( gPuzCorrect);
	 
} 
function RemoveOldGrid(){
	
	$(".squarecel").slideUp(900,function(){$("#tblGrid").remove()});
}
function BuildTable(totalcols, totalrows,classname){
	var strTable = "<table id='tblPlay'>";
	for(var row=0;row<totalrows;row++){
		strTable += BuildTableRow(totalcols,row,classname);
	}
	strTable += "</table>";
	return strTable;
	
}
function BuildShowPuzzle(puz){
	var dim = Math.sqrt(puz.length);
	SizeGrid(dim);
	var size = gCurMarkSize;
	var totalrows = dim;
	var totalcols = dim;	
	var strGrid = "<div id='dShow'>";

	for(y = 0;y<dim;y++){
		for(x = 0;x<dim;x++){
			var left = x*size;
			var top = y*size;
			var index= x+y*dim;
			var thischar = puz.substring(index, index+1);
			if(thischar=="0"){mark = "out";}
			else{mark = "in";}
			//$(".cel[data-x='"+x+"'][data-y='"+y+"']").attr("data-mark",mark);
			var onecel  = "<div class='dCell cel"+size+"' data-mark='"+mark+"' style='left:"+left+"px; top:"+top+"px'  data-x='"+x+"' data-y='"+y+"'></div>";
			//$(".cel[data-x='"+x+"'][data-y='"+y+"']").attr("data-mark",mark);
			strGrid += onecel;
		}	
	}
	strGrid += "</div>";
	$("#dGrid").html(strGrid);
	$(".dCell").fadeIn(0).addClass("squarecel");
	//$("[data-mark='in']").css("visibility","hidden");
	//$(".dCell").css("background-image", "url('images/marks/marks"+gCurMarkSize+".png')");
	ReDrawGrid();

	
}
function BuildTableRow(totalcols, thisrow,classname){
	var strRow = "<tr class='onerow'>";
	for(var col=0;col<totalcols;col++){
			strRow += BuildTableCell(col,thisrow,classname);
	}
	strRow+= "</tr>";	
	return strRow;
}
function BuildTableCell(cellx,celly,classname){
	return "<td class='"+classname+"' style='display:none' data-x='"+cellx+"' data-y='"+celly+"'>_</td>";
}

function BuildPuzzle(puz){
	
	FillInGrid(puz);
}
function FillInGrid(puz){
	var dim = Math.sqrt(puz.length);
	var x = 0;
	var y = 0;
	for(y = 0;y<dim;y++){
		for(x = 0;x<dim;x++){
			var mark = "X";
			var index= x+y*dim;
			var thischar = puz.substring(index, index+1);
			if(thischar=="0"){
				mark = "_";
			}
//			$(".cel[data-x='"+x+"'][data-y='"+y+"']").html(mark);
		}	
	}	
}

function CurrentPuzzleState(){
	var res = "";
	var dim = Math.sqrt(gPuzCorrect.length);
	var x = 0;
	var y = 0;
	for(y = 0;y<dim;y++){
		for(x = 0;x<dim;x++){
			if($(".cel[data-x='"+x+"'][data-y='"+y+"']").attr("data-mark")== "in"){
				res += "1";
			}
			else{
				res += "0";
			}
		}	
	}	
	return res;
}
function FillCluesV(puz){
	var dim = Math.sqrt(puz.length);
    var clueDepth = Math.ceil(dim/2);
	 
	for (c=0;c<dim;c++){// c for column

		var clues = new Array(); 
		var cluecount=0;
		var charindex=0;
		for(i=0;i<clueDepth;i++){clues[i]=0;}//init clue array to size of clueDepth, elements all = 0
		for(charindex=0;charindex<dim;charindex++){
			if (puz.charAt(c+dim*charindex) =="1"){
				 cluecount++;
			}
			else{ //we have found a zero
				if (cluecount>0){ 
					for(e=0;e<clueDepth-1;e++){clues[e]=clues[e+1];}
					clues[clueDepth-1]=cluecount; 
					cluecount=0; 
				}
			}
		}//after the row is over, make sure we push the last cluecount
		if (cluecount>0){ 
			for(e=0;e<clueDepth-1;e++){clues[e]=clues[e+1];}
			clues[clueDepth-1]=cluecount; 
			cluecount=0; 
		}
		//document.write(clues);	
		
		
		for(y=0;y<clueDepth;y++){//use the clues array to mark the hclue tiles  
			   if(clues[y]>0){//do not load the 0 or blank clue graphics 
					$(".vc[data-x='"+c+"'][data-y='"+y+"']").html(clues[y]); 
			  } 
			}
		 
		
	}
}
function FillCluesH(puz){
	
	var dim = Math.sqrt(puz.length);
    var clueDepth = Math.ceil(dim/2);
	 
		for(var r=0;r<dim;r++){ // r for ROW
			var clues = new Array(); 
			for(i=0;i<clueDepth;i++){clues[i]=0;}//init clue array to size of clueDepth, elements all = 0
			//document.write("new row");
			var cluecount=0;
			var charindex=0;
			for(charindex=0;charindex<dim;charindex++){
				if (puz.charAt(r*dim+charindex) =="1"){
					 cluecount++;
				}
				else{ //we have found a zero
					if (cluecount>0){ 
						for(c=0;c<clueDepth-1;c++){clues[c]=clues[c+1];}
						clues[clueDepth-1]=cluecount; 
						cluecount=0;
					}
				}
			}//after the row is over, make sure we push the last cluecount
			if (cluecount>0){ 
				for(c=0;c<clueDepth-1;c++){clues[c]=clues[c+1];}
				clues[clueDepth-1]=cluecount; 
				cluecount=0;
			}			  	
			for(c=0;c<clueDepth;c++){//use the clues array to mark the hclue tiles  
			   if(clues[c]>0){//do not load the 0 or blank clue graphics 
					$(".hc[data-x='"+c+"'][data-y='"+r+"']").html(clues[c]); 
			  } 
			}
			
		}
}
 
function Translate(puz){
//	var puz = "0100010101000010010001001010011010100100111101111011010101011100,1100000000110000011000001010001000100101101010010110111101110110,0011110000000110000010010000100000010000000101010010101100011111,1100110011110000011000000011000010110000010110100110111011111100";
	var res = "";
	var px = 0;
	var py = 0;
	var parts = puz.split(",");	
	
	var pcount = parts.length;
	var fcount = parts[0].length*pcount;//all the cells in the whole thing
//	var fdim = Math.sqrt(fullcount)//dim of whole thing
	var pdim=Math.sqrt(pcount);///parts dimension, 3 on a 3x3 puzzle
	var tdim=Math.sqrt(parts[0].length);//how many cells per tablet/part
	var rowarray= [];; 
	for(yy=0;yy<pdim;yy++){
		for(y=0;y<tdim;y++){
			for(xx=0;xx<pdim;xx++){
				//for(x=0;x<pdim;x++){
					var ai =  xx+yy*pdim;
					res +=parts[ai].substring(0,tdim);
					parts[ai] = parts[ai].substring(tdim);
				//} 
			} 
		} 
	} 


 
	return res;
}


function ReDrawGrid(){
	$("[data-mark='in']").each(function(){
		SetMarkTimeout($(this));
	});
}
function ClearGrid(){
	$(".cel").each(function(){
		$(this).css("background-position",markposout);
	});
}	
      






