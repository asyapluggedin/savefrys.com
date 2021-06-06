var mozilla=document.getElementById && !document.all
var ie=document.all

var score=0;
var imageBoxesX=new Array();
var imageBoxesY=new Array();
var imageNamesX=new Array();
var imageNamesY=new Array();
var OccupiedBox=new Array();
var CorrectBox=new Array();
var cowX = 0;
var cowMoving = 0;

var sessionid = Math.floor(Math.random()*100000); // random number for the sesion

function getBoxAndNameCoords()
{
// loop on images and read coordinates of each box
    
  for (i=0; i<12; i++){
      imageBoxesX[i] = parseInt(document.getElementById('image'+(i+1)).style.left);
      imageBoxesY[i] = parseInt(document.getElementById('image'+(i+1)).style.top)+46;
      imageNamesX[i] = parseInt(document.getElementById('name'+(i+1)).style.left);
      imageNamesY[i] = parseInt(document.getElementById('name'+(i+1)).style.top);
  }
}

function colorBoxes()
{
  for (i=0; i<12; i++){
     if (OccupiedBox[i]==1){document.getElementById('drop'+(i+1)).style.backgroundColor='#6eF';}
      else if (CorrectBox[i]==1){document.getElementById('drop'+(i+1)).style.backgroundColor='#1fe';}
     else{document.getElementById('drop'+(i+1)).style.backgroundColor='#FF3';}
  }
}

function computeScore()
{
getBoxAndNameCoords();

// loop on images
  for (i=0; i<12; i++){
     OccupiedBox[i] = 0; 
     CorrectBox[i]=0;
     for (j=0; j<12; j++){
        dx = imageNamesX[j] - imageBoxesX[i];
        dy = imageNamesY[j] - imageBoxesY[i];
	// document.getElementById('score'). innerHTML = 'dx'+ imageNamesX[j] + 'dx' + imageBoxesX[i];
        if (dx>0 && dx<100 && dy>0 && dy<20){
		OccupiedBox[i] = 1;
		if (i==j){CorrectBox[i]=1;}
	}
     }
  }

colorBoxes();
showScore();
}

function showScore(){
score = 0;
done = 0;
  for (i=0; i<12; i++){
    if (CorrectBox[i]==1){score = score+1};
    if (OccupiedBox[i]==1){done = done+1};
 }
 if (done == 12)
 {
	 document.getElementById('score'). innerHTML = 'Your score is: '+score+ '/12';
	 saveScore(score);
	 if (score==12 && cowMoving==0){
		 cowMoving = 1; 
		 document.getElementById('cow1').style.visibility = 'visible';
		 document.getElementById('cow2').style.visibility = 'hidden';
		 moviePerfectScore(-250);
	 }
 }
}

function moviePerfectScore(cowX)
{
	// update cow location
	cowX = cowX+20;

	// render cow
	document.getElementById('cow1').style.left = cowX;
	document.getElementById('cow2').style.left = cowX;

	// if not arrived to end, call again the same function
	if (cowX<1500){
		setTimeout('moviePerfectScore('+cowX+')', 400);
		if (cowMoving==1){
			document.getElementById('cow1').style.visibility = 'visible';
			document.getElementById('cow2').style.visibility = 'hidden';

			//document.getElementById('cow').innerHTML = '<img src="images/cow1.png">';
			cowMoving = 2;
		}else{
			document.getElementById('cow2').style.visibility = 'visible';
			document.getElementById('cow1').style.visibility = 'hidden';
			//document.getElementById('cow').innerHTML = '<img src="images/cow2.png">';
			cowMoving = 1;
		}
	}else{
		cowMoving = 0;
		document.getElementById('cow1').style.visibility = 'hidden';
		document.getElementById('cow1').style.left = -500;		
		document.getElementById('cow2').style.visibility = 'hidden';
		document.getElementById('cow2').style.left = -500;
	}

}


function saveScore(score){
   var req;
   if (mozilla){
        req = new XMLHttpRequest();
        req.open("POST", 'savescore.cgi', true);
    }
    if (ie){
        req = new ActiveXObject("Microsoft.XMLHTTP");
        req.open("POST", 'savescore.cgi', true);
    }
    req.send(sessionid +',' + score);
}