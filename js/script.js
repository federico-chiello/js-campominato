// Istruzioni:
// (1) Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// (2) In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// (3) Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// (4) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// (1) Primo Step
// variabili
var numeriRandomCpu = [];

// condizione
while (numeriRandomCpu.length < 16) {
  var numeroComputer = generaRandom(1, 100);
  if (numeriRandomCpu.includes(numeroComputer) == false){
    numeriRandomCpu.push(numeroComputer);
  }
}

console.log(numeriRandomCpu);

// Funzione
function generaRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// (2) Secondo Step
// variabile
var numeriGiocatore = [];

// condizione
while (numeriGiocatore.length < 5) {
  var numeroUtente = parseInt(prompt('Inserisci un numero:'));
  if (numeriGiocatore.includes(numeroUtente) == false) {
    numeriGiocatore.push(numeroUtente);
  }
}
console.log(numeriGiocatore);
























// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
