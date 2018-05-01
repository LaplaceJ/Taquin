/**
 * Created by laplace_jordan on 24/02/17.
 */


/**
 * cette methode a pour but de recptionner le click et d'appeller les autres methode
 * concernant le déroulemant du jeu
 *
 * 1)regarder si la piece peu être bouger (si la piece "null" est coter
 *      -non = return
 *      -oui = 2)
 * 2) bouger les pieces , modifier les nom des pieces
 * 3)regarder si il y a une victoire
 *
 * @param id de la piece bouger
 */
function receptionDuclick(id , tailleJeu){
    zoneAVerifier(id , parseInt(tailleJeu) ) ;
    if (isVictoire(parseInt(tailleJeu))){
        actionVictoire() ;
    }
}

/**
 *zone a vérifier autour de la piece selectionner
 *
 * il y a au total 9 zone possible a vérifier
 *
 * @param positionPiece
 *  nom de la piece bouger (le nom est sont emplacement actuel )
 *
 *  @param tailleJeu
 *      la taille du jeu => la derniere piece
 */
function zoneAVerifier(positionPiece , tailleJeu ) {

    //zone 1 == la premier case du tableau
    if(positionPiece == 1 ){

        bougerUnePiece(false , true , false ,true , positionPiece , tailleJeu);
        return ;
    }

    //zone 2 == derniere case du tableau
    if(positionPiece == (tailleJeu*tailleJeu)){
        bougerUnePiece(true , false , true ,false , positionPiece , tailleJeu);
        return ;
    }

    //zone 3 == coin haut Droit
    if(positionPiece == tailleJeu){
        bougerUnePiece(false , true , true ,false , positionPiece , tailleJeu);
        return ;
    }

    //zone 4 == coin bas gauche
    if(positionPiece == ((tailleJeu * tailleJeu  - tailleJeu ) + 1) ){
        bougerUnePiece(true , false , false ,true , positionPiece , tailleJeu);
        return ;
    }

    //zone 5 == partie du haut du jeu
    if(positionPiece < tailleJeu  ){
        bougerUnePiece(false , true , true ,true , positionPiece , tailleJeu);
        return ;
    }

    //zone 6 == partie du gauche du jeu
    if(positionPiece % tailleJeu == 1  ){
        bougerUnePiece(true , true , false ,true , positionPiece , tailleJeu);
        return ;
    }

    //zone 7 == partie du droite du jeu
    if(positionPiece % tailleJeu == 0  ){
        bougerUnePiece(true , true , true ,false , positionPiece , tailleJeu);
        return ;
    }

    //zone 8 == partie du droite du jeu
    if(positionPiece >  ((tailleJeu * tailleJeu  - tailleJeu ) + 1) ){
        bougerUnePiece(true , false , true ,true , positionPiece , tailleJeu);
        return ;
    }

    //zone neuf centre du jeu toute les position sont possible
    bougerUnePiece(true , true , true ,true , positionPiece , tailleJeu);
    return ;



}

/**regarde si la piece peut être bouger
 *
 * @param isTop
 *  regarder si la piece neutre est en bas
 * @param isBot
 *  regarder si la piece neutre est en haut
 * @param isLeft
 *  regarder si la piece neutre est a gauche
 * @param isRigth
 *  regarder si la piece neutre est a droite
 * @constructor
 *
 */
function bougerUnePiece(isTop , isBot , isLeft , isRigth , positionPiece , tailleJeu) {
    //position de pieceNull
    var positionPieceNull = document.getElementsByName(String(tailleJeu * tailleJeu))[0].getAttribute( 'id' );

    if(isTop){
        if ((positionPiece - tailleJeu) == positionPieceNull){
            swapPiece( positionPiece , tailleJeu);
            return ;
        }
    }

    if(isBot){
        if ((positionPiece + tailleJeu) == positionPieceNull){
            swapPiece( positionPiece , tailleJeu);
            return ;
        }
    }

    if(isLeft){
        if ((positionPiece - 1) == positionPieceNull){
            swapPiece( positionPiece , tailleJeu);
            return ;
        }
    }

    if(isRigth){
        if ((positionPiece + 1 ) == positionPieceNull){
            swapPiece( positionPiece , tailleJeu);
            return ;
        }
    }


}

/**
 * échange la postion des pieces
 *
 *
 * @param positionPiece1
 * @param positionPiece2
 */
function swapPiece(id , tailleJeu ) {
    var styleStock = document.getElementById(String(id)).style.backgroundImage ;
    var stylePos = document.getElementById(String(id)).style.backgroundPosition ;
    var nameStock = document.getElementById(String(id)).name ;
    //var onClick = document.getElementById(String(id)).onclick ;

    var idImageNull = String(document.getElementsByName(String(tailleJeu * tailleJeu))[0].getAttribute( 'id' ));

    document.getElementById(String(id)).style.backgroundImage = document.getElementById(idImageNull).style.backgroundImage ;
    document.getElementById(String(id)).style.backgroundPosition = document.getElementById(idImageNull).style.backgroundPosition ;
    document.getElementById(String(id)).name = document.getElementById(idImageNull).name ;
   // document.getElementById(String(id)).onclick = document.getElementById(idImageNull).onclick ;


    document.getElementById(idImageNull).style.backgroundImage = styleStock ;
    document.getElementById(idImageNull).style.backgroundPosition = stylePos ;
    document.getElementById(idImageNull).name = nameStock ;
    //document.getElementById(idImageNull).onclick = onClick ;
    return ;
}

/**
 * vérifie si on a gagner
 *
 * @param tailleJeu
 * @returns {boolean}
 *      true = victoire
 */
function isVictoire(tailleJeu) {
    for (var i = 0; i < tailleJeu*tailleJeu - 1; i++) {
        if(! (i+1 == document.getElementById(String(i+1)).name)  ){return false ;}
    }
    return true  ;
}


/**
 * cette fonction a pour but de randomiser le jeu
 */
function random() {
    //TODO melange

        min = Math.ceil(1);
        max = Math.floor(4);
        var directionAleatoire = Math.floor(Math.random() * (max - min +1)) + min;
        deplacementPossible(directionAleatoire,tailleDuJeu) ;
}

/**
 * cette function va , selon la direction choisit intervertir la piece neutre avec une autre piece
 * @param direction
 *  1 = haut
 *  2 = bas
 *  3 = gauche
 *  4 = droite
 */
function deplacementPossible(direction , tailleDuJeu) {
    var idImageNeutre = parseInt(document.getElementsByName(String(tailleDuJeu * tailleDuJeu))[0].getAttribute( 'id' )) ;
    switch (direction){
        case 1:
            if(idImageNeutre > tailleDuJeu) swapPiece(idImageNeutre-tailleDuJeu , tailleDuJeu ) ;
            break ;
        case 2:
            if(idImageNeutre <= ((tailleDuJeu*tailleDuJeu) -tailleDuJeu)) swapPiece(idImageNeutre+tailleDuJeu , tailleDuJeu ) ;
            break ;
        case 3:
            if(idImageNeutre %tailleDuJeu != 1 ) swapPiece(idImageNeutre-1 , tailleDuJeu ) ;
            break ;
        case 4:
            if(idImageNeutre %tailleDuJeu != 0 ) swapPiece(idImageNeutre+1 , tailleDuJeu ) ;
            break ;
    }
}









