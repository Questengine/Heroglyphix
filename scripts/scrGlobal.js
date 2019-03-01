var constPortraitWid = 100;
var constPortraitHgt = 134;
var constPortraitPerRow = 8;

var gLocation = 1;
var gStage = 1;
var gPuzzle = 1;
var gPart = 0;

var gText="";
var gMark="none";
var arrText=[];
var gTextItr=-1;
var gLocationItr=0;

var gPuzCorrect="";
var gPuzPlayer="";
var gUPP={};

var markposin = "0px 0px";
var markposnot = "0px -120px";
var markposout = "-360px -120px";
var gPalletMarkSize=20;
var gCurMarkSize=40;
var gClassCellSize="cel20";


var gTimerInterval;
var gPuzTimeMax = 360;
var gPuzTime = 360;

var gNextText = true;//true if "next" advances to more text		
					// false if "next" advances to next puz
