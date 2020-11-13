// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.





var generaBtn = document.getElementById('genera');

generaBtn.addEventListener("click",
  function () {
    console.log("hai click su uno genera");

    // numero di chilometri che vuole percorrere
    var distanza = document.getElementById('kilometri');
    console.log(parseInt(distanza.value));

    var distanzaN = parseInt(distanza.value);
    // età del passeggero.
    var eta = document.getElementById('eta').value;
    console.log(eta);

    var scontoEta = "biglietto standard";

    if ( eta == "anziano") {
      var prezzo = (distanzaN * 0.21) - ((distanzaN * 0.21) * 0.4 );
      document.getElementById('prezzoBiglietto').innerHTML = prezzo.toFixed(2) + "€";
      console.log(parseInt(prezzo));
      scontoEta = "sconto silver";
    }

    // prezzo scontato minorenni
    else if (eta == "minorenne") {
      var prezzo = (distanzaN * 0.21) - ((distanzaN * 0.21) * 0.2);
      document.getElementById('prezzoBiglietto').innerHTML = prezzo.toFixed(2) + "€";
      console.log(parseInt(prezzo));
      scontoEta = "sconto minorenni";
    }

    // prezzo pieno
    else {
       var prezzo = (distanzaN * 0.21);
       document.getElementById('prezzoBiglietto').innerHTML = prezzo.toFixed(2) + "€";
       console.log(parseInt(prezzo));
     }


     var nomeUtente = document.getElementById('nome').value;
     document.getElementById('passeggero').innerHTML = nomeUtente;
     console.log(nomeUtente)

     document.getElementById('offerta').innerHTML = scontoEta;

     var numeroCarrozza = Math.floor(Math.random() *9)+1;
     document.getElementById('carrozza').innerHTML = numeroCarrozza;

     var codiceTreno = Math.floor(Math.random() *10000)+90000;
     document.getElementById('codice').innerHTML = codiceTreno;
  }
);

//
// // distanza negativa
// if (distanza < 0) {
//   alert("La distanza non può essere negativa!")
//   document.getElementById('prezzoBiglietto').innerHTML = "Inserisci distanza correttamente";
// }
//
// // stringa
// if (isNaN(distanza)) {
//   alert("La distanza deve essere un numero positivo!")
//   document.getElementById('prezzoBiglietto').innerHTML = "Inserisci distanza correttamente";
// }
