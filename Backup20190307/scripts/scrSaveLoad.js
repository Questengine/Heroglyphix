 var gCookieName = "hgsave";
 
 function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "," + expires + ",path=/";
}

function getCookie() {
  var name = gCookieName + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
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