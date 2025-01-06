// Funzione applicaSconto
function applicaSconto(prodotti, percentualeSconto, callback) {
  setTimeout(() => {
    const prodottiScontati = prodotti.map((prodotto) => ({
      ...prodotto,
      prezzo: prodotto.prezzo - (prodotto.prezzo * percentualeSconto) / 100,
    }));
    callback(prodottiScontati);
  }, 1000);
}

// Funzione verificaStock
function verificaStock(prodottiScontati, callback) {
  setTimeout(() => {
    const prodottiDisponibili = prodottiScontati.filter((prodotto) => {
      const disponibile = Math.random() < 0.5; // Simula il controllo stock
      return disponibile;
    });
    callback(prodottiDisponibili);
  }, 1500);
}

// Funzione calcolaTotale
function calcolaTotale(prodottiDisponibili, callback) {
  setTimeout(() => {
    const totale = prodottiDisponibili.reduce(
      (acc, prodotto) => acc + prodotto.prezzo,
      0
    );
    callback(totale);
  }, 1000);
}

// Esempio
const prodotti = [
  { nome: "Prodotto 1", prezzo: 10 },
  { nome: "Prodotto 2", prezzo: 20 },
  { nome: "Prodotto 3", prezzo: 30 },
];

applicaSconto(prodotti, 20, (prodottiScontati) => {
  console.log("Prodotti scontati:", prodottiScontati);

  verificaStock(prodottiScontati, (prodottiDisponibili) => {
    console.log("Prodotti disponibili:", prodottiDisponibili);

    calcolaTotale(prodottiDisponibili, (totale) => {
      console.log("Totale finale:", totale);
    });
  });
});
