var data = '[["OUI", "O"], ["NON","N"]]'; // Tableau des 2 réponses possibles
var json = JSON.parse(data); // Conversion du tableau pour l'utiliser
var randomArray = json[Math.random() * json.length | 0]; // Math.random pour une valeur aléatoire, que l'on multiplie par la taille du tableau
var body = document.getElementById("body"); // Chercher l'élément avec l"ID "body"
var answer = document.getElementById("answer"); // Chercher l'élément dans le HTML avec l'ID "answer"
var texte = document.getElementById("texte"); // Chercher l'élément dans le HTML avec l'ID "texte"
var boutou = document.getElementById("boutou"); // Chercher l'éléement dans le HTML avec l'ID "boutou"
var bouton = document.getElementById("boutton"); // Chercher l'élément dans le HTML avec l'ID "Bouton"
var leaving = document.getElementById("link_footer"); // Chercher l'élément dans le HTML avec l'ID "link_footer"
var texto = document.getElementById("texto");

window.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("boutton").click();
    }
});


function the_click() { // fonction qui s'actionne quand on appuie sur le bouton "Le moment de vérité"
    answer.innerText = randomArray[0]; // actionne la variable pour trouver une valeure aléatoire dans le tableau, et remplacer le texte de l'élément par cette valeure
    body.style.transition = "all 0.2s"; // toutes les transitions CSS ralenties à 0.2 secondes
    texte.style.transition = "all 0.2s";
    boutou.style.transition = "all 10s";
    texto.style.transition = "all 0.2s";


    if (answer.innerText == "OUI") { // si la valeure est "OUI"
        body.style.backgroundColor = "green"; // fond devient vert
        texte.style.color = "white"; // texte devient blanc
        bouton.style.display = "none";
        texto.style.display = "none";
        boutou.style.display = "initial";


           
        window.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("boutou").click();
    }


});

    }
    else if (answer.innerText == "NON") { // so la valeure est "NON"
        body.style.backgroundColor = "red"; // fond devient rouge
        texte.style.color = "white"; // texte devient blanc
        bouton.style.display = "none";
        texto.style.display = "none";
        boutou.style.display = "initial";

            
        window.addEventListener("keyup", function(event) {
                    event.preventDefault();
                    if (event.keyCode === 13) {
                        document.getElementById("boutou").click();
}
});
                
    }
    else {
        alert("ERROR.")
        location.reload();
    }
}

function the_refresh() {

    location.reload();
}

function leaveloveleft() {
        
    if (confirm('Vous allez accéder à mon portfolio (rien de fun), êtes vous sûr ?')) {
        alert("Bienvenue dans mon humble construction !");
        return false;
    } 
    
    else {
        alert("Je te laisse pas le choix en fait, MOUHAHAHA !");
        return false;


    }
    
}