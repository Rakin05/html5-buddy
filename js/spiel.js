// Sobald die Seite geöffnet wird,
// soll die Funktion init ausgeführt werden
window.addEventListener("load", init, false);

// Platz für die Variablen
var zeichenFläche = document.getElementById("leinwand");
var pinsel = zeichenFläche.getContext("2d");

// Ein Array um alle Bilder in einem Datentyp zu vereinen
var buddy = new Array();
var buddyPicNumber = 0;

var buddyX = 0;

var linksRechts = true;

// Zeichenfunktion
function draw(){
	pinsel.fillStyle = "black";
	pinsel.fillRect(0,0,800,600);

	//buddy malen
	
	pinsel.drawImage(getBuddyImage(),buddyX,500);
}

// Updatefunktion
function update(){
	if(linksRechts == true){
		buddyX = buddyX + 1;
	}
	if(linksRechts == false){
		buddyX = buddyX - 1;
	}
	draw();

	if(buddyX >= 750){
		linksRechts = false;
	}
	if(buddyX<=0){
		linksRechts = true;
	}
	//	console.log(linksRechts);
}


// update aller 100ms aufrufen
setInterval(update,10);

// lade alle Buddy Bilder
function initBuddyPictures(){
	buddy[0] = new Image();
	buddy[0].src = "img/buddy.png";
	buddy[1] = new Image();
	buddy[1].src = "img/buddy2.png";
	buddy[2] = new Image();
	buddy[2].src = "img/buddy3.png";
	buddy[3] = new Image();
	buddy[3].src = "img/buddy2.png";
}

function getBuddyImage(){
	if(buddyPicNumber >= 3){
		buddyPicNumber = 0;
	}else {
		buddyPicNumber = buddyPicNumber + 1;
	}
	//console.log(buddyPicNumber);
	return buddy[buddyPicNumber];
}


// Diese Funktion wird aufgerufen,
// wenn die Seite geöffnet oder
// neugeladen ( F5 ) wird
function init(){
	initBuddyPictures();
	draw();
	//console.log(buddy);
}