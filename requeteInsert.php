<?php
$table=$_GET["table"];
$nom=$_GET["nom"];
$score=$_GET["score"];


$bdd = new PDO('mysql:host=localhost;dbname=Taquin;charset=utf8', 'root', 'Gitano123');

$requete = 'INSERT INTO '.$table.' (nomJoueur , score) VALUES("'.$nom.'" , '.$score.');';

$bdd->exec($requete);
?>
