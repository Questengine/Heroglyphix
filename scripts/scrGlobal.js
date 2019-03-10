var constPortraitWid = 100;
var constPortraitHgt = 134;
var constPortraitPerRow = 8;
var gTextClass="";

var constLocNameWid = 101;
var constLocNameHgt = 23;
var constLocNamePerRow = 7;

var gLocation = 1;
var gStage = 1;
var gPuzzle = 1;
var gPart = 0;

var gPaused = false;

var gHighestStage=1;
var gRevealActive = true;
var gGlow = false;
var gGlowInterval;

var gText="";
var gMark="none";
var arrText=[];
var gTextItr=-1;
var gLocationItr=0;

var gPuzCorrect="";
var gPuzPlayer="";
var gUPP={};

var markpox =  "-128px -48px";
var markfeather =  "-40px -120px";
var markposin = "0px 0px";
var markposnot = "0px -120px";
var markposout = "-360px -120px";
var gPalletMarkSize=20;
var gCurMarkSize=40;
var gClassCellSize="cel20";

var gHourGlassFrame=0;
var gTextAdvanceFrame=0;
//var gSandFrame =0;

var gPathInterval;
var gTimerInterval;
var gHourGlassInterval;
var gPuzTimeMax = 360;
var gPuzTime = 360;

var gNextText = true;//true if "next" advances to more text		
					// false if "next" advances to next puz
var gMousex = 0;
var gMousey = 0;

function SaveMouseCoords(event){
	gMousex = event.pageX;
	gMousey = event.pageY;
}
