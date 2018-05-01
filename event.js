/**
 * Created by laplace_jordan on 25/02/17.
 */

/**
 * ICI ON s'occupe des fonctions onclick/eventBoutton/timer/victoire
 */

function setOnclickImage() {
    for(var i = 0 ; i < tailleDuJeu*tailleDuJeu ; i++){

        document.getElementById(String(i+1)).onclick = (function() {
            var monId = i+1;
            return function() {
                receptionDuclick(monId , tailleDuJeu);
            }
        })();
    }
}

function setOnKeyUp() {

    /**
     *
     KEY_DOWN	= 40; => deplacementPossible 2
     KEY_UP		= 38; => deplacementPossible 1
     KEY_LEFT	= 37; => deplacementPossible 3
     KEY_RIGHT	= 39; => deplacementPossible 4
     */

    document.onkeyup = function(e){
        if(e.which == 37 ) deplacementPossible(3 , tailleDuJeu) ;
        if(e.which == 38 ) deplacementPossible(1 , tailleDuJeu) ;
        if(e.which == 39 ) deplacementPossible(4 , tailleDuJeu) ;
        if(e.which == 40)  deplacementPossible(2 , tailleDuJeu) ;

        if (isVictoire(parseInt(tailleDuJeu))){
            actionVictoire() ;
        }
    }
}

function resetOnKeyUp() {
    document.onkeyup = function(e){}
}

function setTimerAvantJeu() {


     timerRandom = setInterval(random,10) ;
     timerTempsRandom = setInterval(lancementDuJeu , 2000) ;
}

function lancementDuJeu() {
    clearInterval(timerRandom);
    clearInterval(timerTempsRandom);
    setOnclickImage();
    setOnKeyUp();
    timerLancementDuJeu = setInterval(setTime , 10) ;

}

function setTime()
{
    ++count;
    centiemeSeconds.innerHTML = pad(count%100);
    secondsLabel.innerHTML = pad(parseInt((count/100)%60));
    minutesLabel.innerHTML = pad(parseInt((count/100)/60));
}

function pad(val)
{
    var valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}


/**
 * 1) arrete le timer
 * 2) remplace les bouts d'image dans la le div de jeu par l'image final //
 * 3) si c'est un new record demande a l'utilisateur d'incrire son nom pour enregistrer le record
 *
 */
function actionVictoire() {

    clearInterval(timerLancementDuJeu);

    //2.1)on arrete les actions avec les touches du clavier
    resetOnKeyUp()

    //2.2) on supprime toutes les partie d'image
    var divJeu = document.getElementById("zoneDeJeu");
    while (divJeu.firstChild) {
        divJeu.removeChild(divJeu.firstChild);
    }

    //2.3) on ajoute l'image du jeu
    var img = document.createElement('img');
    img.src = srcImageDeBase ;
    img.id = "Image"  ;
    divJeu.appendChild(img)


    //3.1)set les variables que l'on va inséré
    scoreFinal = calculScore() ;
    nomProvisoir = prompt("entrer votre nom ","");
    if(nomProvisoir === null  ) nomJoueur = "toto" ;
    else if (nomProvisoir === "") nomJoueur = "titi" ;
    else  nomJoueur = nomProvisoir ;

    //3.2) insertion
    insertScore();

    //3.3)reset les variable qui contienne le temps
    centiemeSeconds.innerHTML = "00";
    secondsLabel.innerHTML = "00";
    minutesLabel.innerHTML = "00";
    count = 0 ;

    ingame = false ;



}

function actionChangement3() {

    clearInterval(timerRandom);
    clearInterval(timerTempsRandom);
    clearInterval(timerLancementDuJeu);

    //2.1)on arrete les actions avec les touches du clavier
    resetOnKeyUp()

    //2.2) on supprime toutes les partie d'image
    var divJeu = document.getElementById("zoneDeJeu");
    while (divJeu.firstChild) {
        divJeu.removeChild(divJeu.firstChild);
    }

    //2.3) on ajoute l'image du jeu
    var img = document.createElement('img');
    img.src = srcImageDeBase ;
    img.id = "Image"  ;
    divJeu.appendChild(img)

    //3.3)reset les variable qui contienne le temps
    centiemeSeconds.innerHTML = "00";
    secondsLabel.innerHTML = "00";
    minutesLabel.innerHTML = "00";
    count = 0 ;

    tailleDuJeu = 3 ;

    nomTable = "TaquinCinq";


    document.getElementById("score").onclick = ouvrirScore3 ;
    document.getElementById("titre").innerHTML = " TAQUIN 3X3" ;

    ingame = false ;


}
function actionChangement4() {

    clearInterval(timerRandom);
    clearInterval(timerTempsRandom);
    clearInterval(timerLancementDuJeu);

    //2.1)on arrete les actions avec les touches du clavier
    resetOnKeyUp()

    //2.2) on supprime toutes les partie d'image
    var divJeu = document.getElementById("zoneDeJeu");
    while (divJeu.firstChild) {
        divJeu.removeChild(divJeu.firstChild);
    }

    //2.3) on ajoute l'image du jeu
    var img = document.createElement('img');
    img.src = srcImageDeBase ;
    img.id = "Image"  ;
    divJeu.appendChild(img)

    //3.3)reset les variable qui contienne le temps
    centiemeSeconds.innerHTML = "00";
    secondsLabel.innerHTML = "00";
    minutesLabel.innerHTML = "00";
    count = 0 ;

    tailleDuJeu = 4 ;
    nomTable = "TaquinQuatre";

    document.getElementById("score").onclick = ouvrirScore4 ;
    document.getElementById("titre").innerHTML = " TAQUIN 4X4" ;

    ingame = false ;

}

function actionChangement5() {

    clearInterval(timerRandom);
    clearInterval(timerTempsRandom);
    clearInterval(timerLancementDuJeu);

    //2.1)on arrete les actions avec les touches du clavier
    resetOnKeyUp()

    //2.2) on supprime toutes les partie d'image
    var divJeu = document.getElementById("zoneDeJeu");
    while (divJeu.firstChild) {
        divJeu.removeChild(divJeu.firstChild);
    }

    //2.3) on ajoute l'image du jeu
    var img = document.createElement('img');
    img.src = srcImageDeBase ;
    img.id = "Image"  ;
    divJeu.appendChild(img)

    //3.3)reset les variable qui contienne le temps
    centiemeSeconds.innerHTML = "00";
    secondsLabel.innerHTML = "00";
    minutesLabel.innerHTML = "00";
    count = 0 ;
    nomTable = "TaquinCinq";

    tailleDuJeu = 5 ;

    document.getElementById("score").onclick = ouvrirScore5 ;
    document.getElementById("titre").innerHTML = " TAQUIN 5X5" ;

    ingame = false ;

}


function ouvrirScore3() {
    window.open('score3.html','score','menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
}
function ouvrirScore4() {
    window.open('score4.html','score','menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
}
function ouvrirScore5() {
    window.open('score5.html','score','menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
}

function calculScore() {
    return (parseInt(minutesLabel.innerHTML) *60) + parseInt(secondsLabel.innerHTML) + (parseInt(centiemeSeconds.innerHTML) /100);

}




