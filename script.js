/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

const KEY_LEFT = 37;
const KEY_UP =38;
const KEY_RIGHT =39; 
const KEY_DOWN =40;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 625;
var vijandY = 50;
var hp = 5
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
vijandY = vijandY + 20;
  // kogel

  // speler bewergen als toets ingedrukt
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 10;
  }
  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 10;
  }
  if (keyIsDown(KEY_UP)) {
    spelerY = spelerY - 10
  }
  if (keyIsDown(KEY_DOWN)) {
    spelerY = spelerY + 10
  }

  // speler bij rand stoppen
if (spelerX > 1280){spelerX=1280};
if (spelerX < 0){spelerX=0};
if (spelerY < 0){spelerY=0};
if (spelerY > 720){spelerY=720};
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  if (vijandY>720){
    vijandY = 0;
  }
  // botsing speler tegen vijand
if (vijandX - spelerX < 50 && 
vijandX - spelerX > -50){
   (vijandY - spelerY < 50 && 
vijandY - spelerY > -50)
  console. log("geraakt")
}
  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm*
 */


var tekenAlles = function () {
  // achtergrond
fill(20,75,200);
rect(0,0,1280,720);
  // vijand
fill("red");
ellipse(vijandX - 25, vijandY - 25,50,50);

  // kogel

  // speler
  fill("orange");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("red");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health
textSize(70);
text(hp,30,60)
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('olive ');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
