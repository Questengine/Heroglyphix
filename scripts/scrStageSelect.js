 function InitStageSelect(){
	 
	  
	 DialogueOpen();
	 var stageselect = BuildStageSelect();
	 $("#dPuzzles").html(stageselect).fadeIn(); 
	 /*$(".oneStage").css("background-image","url(images/locations/temp-jo"+$(".oneStage").attr("data-stageid")+".png");
	 
	 */
	  $(".stagecel").each(function(){FillImages($(this));})
	 $(".stagecel"). on("click",GoToInitLocPuz);
	 
	 
 }
 function GoToInitLocPuz(){
	 var stagecode = $(this).attr("data-stageid");
	 InitLocPuz(pad(stagecode));
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
	 pic.css("background-image","url(images/locations/temp-jo"+id+".png");
	 
 }
  