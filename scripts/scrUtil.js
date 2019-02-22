function LoadText(id){
	gText =arrIntro[arrLocationNames[id]];
	arrText = gText.split("newline,");
}

function FillMarkMenu(){
	var max =30;
	var dim = 20;
	var menux = 5;
	var menuy = 6;
	//mark png is 10x3 of individual marks
	var markimagedim = 20;
	var markimagecols=10;
	var markimagerows=3;
	for(var y =0;y<menuy;y++){
		for(var x =0;x<menux;x++){
			var markid = x+ y*menux;	
			var posx= markid % markimagecols;
			var posy= Math.floor(markid / markimagecols);
			posx*=markimagedim;
			posy*=markimagedim;
			$("#mk"+markid).css("background-position-x", "-"+posx+"px").css("background-position-y", "-"+posy+"px");
			//.html(markid);
		}
	}
}