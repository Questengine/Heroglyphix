 var gCookieName = "hgsave";
 
 function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "," + expires + ",path=/";
}

function getCookie() {
  var name = gCookieName + "=";
  var uppdata = document.cookie.split('=')[1];//game data
  var arrsavedata = uppdata.split(",");
  
  for(var datakkey in arrsavedata){
      
      var pair  = arrsavedata[datakkey]
      var key  = pair.split(":")[0];
      if( key in gUPP){
          gUPP[key ]= pair.split(":")[1];
      }
      
      
	}
  
   
}

function checkCookie() {
  var cdata = getCookie(gCookieName);
  if (cdata != "") {
    //alert("Welcome again " + cdata);
  } else {
    //cdata = prompt("Please enter your name:", "");
    //if (cdata != "" && cdata != null) {
      //setCookie(gCookieName, cdata, 365);
    //}
  }
}

function CookieSave(){
	var cdata = "";
	for(var code in gUPP){
		cdata+=code+":"+gUPP[code]+","; 
	} 
	setCookie(gCookieName, cdata,3);
}