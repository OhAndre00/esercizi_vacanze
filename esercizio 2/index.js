// Funzione aggiornaPrezzi
function aggiornaPrezzi(azioni, callback) {
  const aggiornaPrezziIntervallo = setInterval(() => {
    const prezziAggiornati = azioni.map((azione) => ({
      ...azione,
      prezzo: azione.prezzo + Math.random() * 5 - 2.5,
    }));
    callback(prezziAggiornati);
  }, 2000);

  setTimeout(() => {
    clearInterval(aggiornaPrezziIntervallo);
  }, 10000);
}

// Funzione filtraAzioni
function filtraAzioni(azioni, callback, soglia) {
  setInterval(() => {
    const azioniFiltrate = azioni.filter((azione) => azione.prezzo > soglia);
    callback(azioniFiltrate);
    setTimeout(() => {}, 1000); // Simula un ritardo di 1 secondo
  }, 2000);
}

// Funzione calcolaValoreTotale
function calcolaValoreTotale(azioni, callback) {
  setTimeout(() => {
    const valoreTotale = azioni.reduce((acc, azione) => acc + azione.prezzo, 0);
    callback(valoreTotale);
  }, 1000);
}

// Esempio
const azioni = [
  { nome: "Azione 1", prezzo: 10 },
  { nome: "Azione 2", prezzo: 20 },
  { nome: "Azione 3", prezzo: 30 },
];

aggiornaPrezzi(
  azioni,
  (azioniAggiornate) => {
    console.log("Prezzi aggiornati:", azioniAggiornate);

    filtraAzioni(
      azioniAggiornate,
      (azioniFiltrate) => {
        console.log("Azioni filtrate:", azioniFiltrate);

        calcolaValoreTotale(azioniFiltrate, (valoreTotale) => {
          console.log("Valore totale:", valoreTotale);
        });
      },
      15
    );
  },
  15
);
