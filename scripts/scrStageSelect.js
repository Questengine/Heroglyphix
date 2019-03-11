 function InitStageSelect(){
	 
	  
	 DialogueOpen();
	 var stageselect = BuildStageSelect();
	 $("#dPuzzles").html(stageselect).before(BuildInfoText()).fadeIn(); 
	 /*$(".oneStage").css("background-image","url(images/locations/temp-jo"+$(".oneStage").attr("data-stageid")+".png");
	 
	 */
	  $(".stagecel").each(function(){FillImages($(this));})
	 $(".stagecel"). on("click",GoToInitLocPuz);
//	 $(".stagecel"). on("mouseover",GoToInitLocPuz);
	 
	 
 }
 function GoToInitLocPuz(){
	 var stagecode = $(this).attr("data-stageid");
	 if(stagecode >0){
		 
	 gHighestStage = parseInt(stagecode);
	 InitLocPuz(pad(stagecode));
	 $("#dInfoStage").remove();
	 }
	 else{
		 $("#dInfoStage").html("You haven't unlocked this stage yet. Keep playing!");
	 }
 }
 function BuildStageSelect(){
	 var res = "<table>";
	 res +="<tr>";
	 res +="<td class='oneStage' stagecel><div  data-stageid='1' class='stagecel stageLeft'  ></td>"
	 res +="<td class='oneStage' stagecel><div  data-stageid='2' class='stagecel stageLeft'  ></td>"
	 res +="<td class='oneStage' stagecel><div  data-stageid='3' class='stagecel stageLeft'  ></td>"
	 res +="<td class='oneStage' stagecel><div  data-stageid='4' class='stagecel stageLeft'  ></td>"
	 res +="</tr>";                                
	 res +="<tr>";                             
	 res +="<td class='oneStage' stagecel><div  data-stageid='5' class='stagecel stageRight' ></td>"
	 res +="<td class='oneStage' stagecel><div  data-stageid='6' class='stagecel stageRight' ></td>"
	 res +="<td class='oneStage' stagecel><div  data-stageid='7' class='stagecel stageRight' ></td>"
	 res +="<td class='oneStage' stagecel><div  data-stageid='8' class='stagecel stageRight' ></td>"
	 res +="</tr>";
	 res += "</table>"
	 return res;
 }
 
 function FillImages(pic){
	 var id =pic.attr("data-stageid");
	 var intstage = GetIntStage(gHighestCode);
	 if(id<=intstage || id== 1){
		 
		pic.css("background-image","url(images/locations/temp-jo"+id+".png");
		
	 }
	 else{
		pic.attr("data-stageid","0");
	 }
	 
 }
 function BuildInfoText(){
	 var res = "";
	 res = "<div id='dInfoStage'>Select a Stage</div>";
	 return res;
 }
  