// Récupération des éléments du DOM
const plusBtn = document.querySelector("#plus");
const moinsBtn = document.querySelector("#moins");
const resetBtn = document.querySelector("#reset");
const textElem = document.querySelector("#text");

// Initialisation de la valeur
let valeur = 0;

// Fonction d'incrémentation
function incrementer() {
  valeur++;
  textElem.textContent = valeur;
}

// Fonction de décrémentation
function decrementer() {
  valeur--;
  textElem.textContent = valeur;
}

// Fonction de réinitialisation
function reinitialiser() {
  valeur = 0;
  textElem.textContent = valeur;
}

// Ajout des écouteurs d'événements
plusBtn.addEventListener("click", incrementer);
moinsBtn.addEventListener("click", decrementer);
resetBtn.addEventListener("click", reinitialiser);