// Chiedere al utente, quanti km vuole percorrere!!!!
var kilometri = prompt('Quanti km vuoi percorrere??');

// Chiedere al utente quanti anni ha!!!!
var eta = prompt('Qual è la tua età??');

// Il costo del Biglietto per ogni Km!!!!!
var prezzo = 0.21 * kilometri;

// Degli sconti sulle fasce di età!!!!
var sconto20 = prezzo - ((20 * prezzo) / 100);
var sconto40 = prezzo - ((40 * prezzo) / 100);

// variante Prezzo Finale!!!
var prezzoFinale;

// Autenticare l'uttilizzo di soltanto numeri nel Form!!!!
if (isNaN(kilometri) || isNaN(eta)) {
  alert('Questo form accetta soltanto numeri, in una delle opzioni hai inserito delle lettere!!!');
} else {

  // Prezzo Finale!!
  if (eta <= 18) {
    alert('Hai ottenuto uno sconto del 20%!!');
    (prezzoFinale = sconto20);
  } else if (eta >=65) {
    alert('Hai ottenuto uno sconto del 40%!!');
    (prezzoFinale = sconto40);
  } else {
    (prezzoFinale = prezzo);
  }
}

var risultato = 'Il ' +  'prezzo ' +  'del ' + 'biglietto ' + 'per ' + 'te ' + 'è ' +  prezzoFinale;


document.getElementById('prezzo').innerHTML = risultato;
