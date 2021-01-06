// Istruzioni:
// (1) Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// (2) In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// ******* Esercizio con bonus ********
var livello = prompt('Scegli un livello di difficoltà tra 0(difficile), 1(intermedio) o 2(facile):')

switch (livello) {
  case "0":
  var numeriRandomPc = [];
  var numeroMassimo = 100;
  var numeriGiocatore = [];
  var tentativo = numeroMassimo - 16;
  var numeroDiVolte = 0;

  while (numeriRandomPc.length < 16) {
    var numeroComputer = generaRandom(1, numeroMassimo);
    if (numeriRandomPc.includes(numeroComputer) == false){
      numeriRandomPc.push(numeroComputer);
    }
  }
  console.log(numeriRandomPc);

  while (numeriGiocatore.length < tentativo && (controlloNumero(numeriRandomPc, giocatore)) != true) {
    var giocatore = parseInt(prompt('Inserisci un numero compreso tra 1 e 100:'));
    if (controlloNumero(numeriRandomPc, giocatore)) {
      alert('Hai perso. Hai provato '+ numeroDiVolte +' volte prima di far scoppiare la bomba');
    }
    else if (numeriGiocatore.includes(giocatore) == false){
      numeriGiocatore.push(giocatore);
      numeroDiVolte++;
   }
   else if (numeriGiocatore.includes(giocatore)){
      alert('Numero gia inserito. Riprova!');
    }
    else if (numeriGiocatore.length == tentativo){
      alert('Hai vinto');
    }
  }
  console.log(numeriGiocatore);
  break;

  case "1":
  var numeriRandomPc = [];
  var numeroMassimo = 80;
  var numeriGiocatore = [];
  var tentativo = numeroMassimo - 16;
  var numeroDiVolte = 0;

  while (numeriRandomPc.length < 16) {
    var numeroComputer = generaRandom(1, numeroMassimo);
    if (numeriRandomPc.includes(numeroComputer) == false){
      numeriRandomPc.push(numeroComputer);
    }
  }
  console.log(numeriRandomPc);

  while (numeriGiocatore.length < tentativo && (controlloNumero(numeriRandomPc, giocatore)) != true) {
    var giocatore = parseInt(prompt('Inserisci un numero compreso tra 1 e 80:'));
    if (controlloNumero(numeriRandomPc, giocatore)) {
      alert('Hai perso. Hai provato '+ numeroDiVolte +' volte prima di far scoppiare la bomba');
    }
    else if (numeriGiocatore.includes(giocatore) == false){
      numeriGiocatore.push(giocatore);
      numeroDiVolte++;
   }
   else if (numeriGiocatore.includes(giocatore)){
      alert('Numero gia inserito. Riprova!');
    }
    else if (numeriGiocatore.length == tentativo){
      alert('Hai vinto');
    }
  }
  console.log(numeriGiocatore);
  break;

  case "2":
  var numeriRandomPc = [];
  var numeroMassimo = 50;
  var numeriGiocatore = [];
  var tentativo = numeroMassimo - 16;
  var numeroDiVolte = 0;

  while (numeriRandomPc.length < 16) {
    var numeroComputer = generaRandom(1, numeroMassimo);
    if (numeriRandomPc.includes(numeroComputer) == false){
      numeriRandomPc.push(numeroComputer);
    }
  }
  console.log(numeriRandomPc);

  while (numeriGiocatore.length < tentativo && (controlloNumero(numeriRandomPc, giocatore)) != true) {
    var giocatore = parseInt(prompt('Inserisci un numero compreso tra 1 e 50:'));
    if (controlloNumero(numeriRandomPc, giocatore)) {
      alert('Hai perso. Hai provato '+ numeroDiVolte +' volte prima di far scoppiare la bomba');
    }
    else if (numeriGiocatore.includes(giocatore) == false){
      numeriGiocatore.push(giocatore);
      numeroDiVolte++;
   }
   else if (numeriGiocatore.includes(giocatore)){
      alert('Numero gia inserito. Riprova!');
    }
    else if (numeriGiocatore.length == tentativo){
      alert('Hai vinto');
    }
  }
  console.log(numeriGiocatore);
  break;
}

// ******* Esercizio senza bonus ********
// ***** Primo Step
// variabili
// var numeriRandomPc = [];
// var numeroMassimo = 100;
//
// // Condizione: il computer genera 16 numeri causali da 0 a 100.
// while (numeriRandomPc.length < 16) {
//   var numeroComputer = generaRandom(1, numeroMassimo);
//   if (numeriRandomPc.includes(numeroComputer) == false){
//     numeriRandomPc.push(numeroComputer);
//   }
// }
//
// console.log(numeriRandomPc);
//
// // ****** Secondo Step
// // variabili
// var numeriGiocatore = [];
// var tentativo = numeroMassimo - 16;
// var numeroDiVolte = 0;
//
// // Condizione: viene chiesto all'utente di inserire 84 volte un numero a piacere.
// while (numeriGiocatore.length < tentativo && (controlloNumero(numeriRandomPc, giocatore)) != true) { //Finché i numeri inseriti dal giocatore sono minori di 84 e il controllo dei numeri è diverso da vero, allora...
// // viene chiesto di inserire il numero al giocatore
//   var giocatore = parseInt(prompt('Inserisci un numero:'));
//
// // controllo del numero del giocatore nella lista dei numeri generati dal pc.
//   if (controlloNumero(numeriRandomPc, giocatore)) {
//   //se la condizione risulta vera allora il giocatore ha perso.
//     alert('Hai perso. Hai provato '+ numeroDiVolte +' volte prima di far scoppiare la bomba');
//   }
//   else if (numeriGiocatore.includes(giocatore) == false){
//     numeriGiocatore.push(giocatore);
//   //se il numero inserito del giocatore non è presente nella lista del pc allora vengono aggiunti...
//   // il numero dei tentativi riusciti.
//     numeroDiVolte++;
//  }
//  else if (numeriGiocatore.includes(giocatore)){
//   // se viene inserito un numero già messo nell'array numeriGiocatore allora si chiede di riprovare.
//     alert('Numero gia inserito. Riprova!');
//   }
//   else if (numeriGiocatore.length == tentativo){
//   // se i numeri inseriti dal giocatore eguagliano il numero dei tentativi a disposizione (84) allora il giocatore ha vinto.
//     alert('Hai vinto');
//   }
// }
// console.log(numeriGiocatore);


// ***** Funzioni riutilizzabili ******
// funzione che genera numeri casuali da 1 a 100.
function generaRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che controlla se il numero è presente nell'array.
function controlloNumero(lista, numero){
  var presente = false;
  for(var i = 0; i < lista.length; i++){
    if(lista[i] == numero){
      presente = true;
    }
  }
  return presente;
}
