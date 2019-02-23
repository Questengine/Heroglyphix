function BuildGrid(x,y){
	
	var strTable = "<table id='tblGrid'>";
	strTable += "<tr><td>TL</td><td>VCLUES</td></tr>";
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
	
	
	$(".cel").attr("data-mark","in");
	$(".cel").on("mouseover",MousedOver);
	$(".cel").on("mouseup",MarkNone);
	$(".cel").addClass("squarecel");
	$(".vc").addClass("squarecel");
	$(".hc").addClass("squarecel");
	
} 

function BuildTable(totalcols, totalrows,classname){
	var strTable = "<table id='tblPlay'>";
	for(var row=0;row<totalrows;row++){
		strTable += BuildTableRow(totalcols,row,classname);
	}
	strTable += "</table>";
	return strTable;
	
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
	return "<td class='"+classname+"' data-x='"+cellx+"' data-y='"+celly+"'>_</td>";
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

