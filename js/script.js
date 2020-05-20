// Chiedere al utente, quanti km vuole percorrere!!!!
var kilometri = prompt('Quanti km vuoi percorrere??');

// Chiedere al utente quanti anni ha!!!!
var eta = prompt('Qual è la tua età??');

// Il costo del Biglietto per ogni Km!!!!!
var prezzo = 0.21 * kilometri;

// variante Prezzo Finale!!!
var prezzoFinale;

// Autenticare l'uttilizzo di soltanto numeri nel Form!!!!
if (!isNaN(kilometri) || !isNaN(eta)) {
  // Prezzo Finale!!
  if ((eta <= 18) && (eta > 0)) {
    alert('Hai ottenuto uno sconto del 20%!!');
    (prezzoFinale = prezzo - ((20 * prezzo) / 100));
  } else if (eta >= 65) {
    alert('Hai ottenuto uno sconto del 40%!!');
    (prezzoFinale = prezzo - ((40 * prezzo) / 100));
  } else if (eta <= 0) {
    alert('Non è permesso il numero 0 come età!!!');
    (prezzoFinale = 'NO ');
  } else {
    (prezzoFinale = prezzo);
  }
} else {
  alert('Questo form accetta soltanto numeri, in una delle opzioni hai inserito delle lettere!!!');
}

// Risultato!!!!
var risultato = 'Il ' +  'prezzo ' +  'del ' + 'biglietto ' + 'per ' + 'te ' + 'è ' +  prezzoFinale + 'eur.';


document.getElementById('prezzo').innerHTML = risultato;
