// Sobald die Seite geöffnet wird,
// soll die Funktion init ausgeführt werden
window.addEventListener("load", init, false);

// Platz für die Variablen
var zeichenFläche = document.getElementById("leinwand");
var pinsel = zeichenFläche.getContext("2d");

var buddy = new Image();
buddy.src = "img/buddy.png";

var buddyX = 0;

var linksRechts = true;

// Zeichenfunktion
function draw(){
	pinsel.fillStyle = "black";
	pinsel.fillRect(0,0,800,600);

	//buddy malen
	
	pinsel.drawImage(buddy,buddyX,500);
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
	console.log(linksRechts);
}


// update aller 100ms aufrufen
setInterval(update,10);

// Diese Funktion wird aufgerufen,
// wenn die Seite geöffnet oder
// neugeladen ( F5 ) wird
function init(){
	draw();
	console.log(buddy);
}