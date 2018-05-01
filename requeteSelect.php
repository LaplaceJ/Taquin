<?php
$table=$_GET["table"];
//$id = 1 ;
$bdd = new PDO('mysql:host=localhost;dbname=Taquin;charset=utf8', 'root', 'Gitano123');

$reponse = $bdd->query('select nomJoueur,score from '.$table.' order by score asc ;');
$stringFinal = "";
while(($donnees = $reponse->fetch()) )
{

	$stringFinal = $stringFinal.",".$donnees['nomJoueur'].",".$donnees['score'];
}
echo $stringFinal ;
?>
