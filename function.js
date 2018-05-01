/**
 * Created by laplace_jordan on 23/02/17.
 */

//ajouter son image
function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("Image").src = oFREvent.target.result;
        srcImageDeBase = oFREvent.target.result;
    };
};

/**
 * 1) cette fonction va découper l'images présente dans la div de jeu
 * 2) randomiser le jeu et active les evenement
 */
function debutDuJeu() {
    if (ingame)return ;
    ingame = true ;
    //1)
    maFonctionDecoupage(tailleDuJeu) ;

    //2)
    setTimerAvantJeu();

}

function maFonctionDecoupage(tailleDuJeu)
{
    //on va récupere l'image qui est dans le div de jeu
    img_path = document.getElementById("Image").src ;

    //on crée une image
    var img = new Image();
    img.src = img_path ;

    //on le minimun entre la hauteur et la largeur dans le but de couper l'image équitablement
    var min  = Math.min( img.width, img.height );

    //on divise l'image selon la taille du jeu
    var size = Math.floor( min / tailleDuJeu );

    //fragment d'image
    var newimg;
    //ligne
    var row;
    //colonne
    var col;

    //on stock lechemin vers l'image de base (nous réutiliserons lors de la victoire  )
    srcImageDeBase = document.getElementById("Image").src  ;

    // on supprime l'image de la zone de jeu dans le but de la remplacer par les fragments d'images
    document.getElementById('zoneDeJeu').removeChild(document.getElementById("Image")) ;

    var container = document.getElementById('zoneDeJeu');

    // on set et affiche les pièces une par une

    for ( var i = 0; i < tailleDuJeu*tailleDuJeu; i += 1 )
    {
        newimg = document.createElement('img');
        newimg.id = i+1 ;
        newimg.name = i+1 ;
        newimg.style.width  = size + 'px';
        newimg.style.height = size + 'px';

        // si le fragment d'image est le dernier , on remplace ce fragment par une image neutre
        if(i != tailleDuJeu*tailleDuJeu - 1  ){
        newimg.style.backgroundImage = 'url(' + img_path + ')';
        }else{
            newimg.style.backgroundImage = 'url(imageStock/blanche.png)';
        }


        // l'index de la pièce en x est : ( i % tailleDuJeu )
        // l'index de la pièce en y est : Math.floor( i /tailleDuJeu )
        // on les multiplis par size pour obtenir la position
        // du fond
        row = ( i % tailleDuJeu );
        col = Math.floor( i / tailleDuJeu );

        // A noter qu'il faut les opposer ( * -1 )pour obtenir une translation correcte
        newimg.style.backgroundPosition =   - row * size + 'px ' + - col * size + 'px';
        newimg.style.float = 'left';

        // du coup si la ligne vaut 0, on revient à la ligne
        if ( !row )
        {
            newimg.style.clear = 'left';
        }

        // on ajoute le fragment
        container.appendChild( newimg );
    }



}
function insertScore() {


    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
        }

    }
    xmlhttp.open("GET","requeteInsert.php?table="+nomTable + "&nom="+nomJoueur+"&score="+scoreFinal,true);
    xmlhttp.send();
}

function récupererScore(){
    var nomTable = "TaquinTrois";
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            //gerer le tableau et ouvrir la page Score
            var container = document.getElementById('zoneInsert');
            var tableau = xmlhttp.responseText.split(',');
            for (var i = 1 ; i < 3 ; i++){
                var tr = document.createElement('tr');
                var th1 = document.createElement('th');
                var th2 = document.createElement('th');
                var th3 = document.createElement('th');
                th1.innerHTML =  i ;
                th2.innerHTML = tableau[i*2] ;
                th3.innerHTML = tableau[i+1] ;

                tr.appendChild( th1 );
                tr.appendChild( th2 );
                tr.appendChild( th3 );
                container.appendChild( tr );
            }
        }

    }
    xmlhttp.open("GET","requeteSelect.php?table="+nomTable,true);
    xmlhttp.send();
}


















