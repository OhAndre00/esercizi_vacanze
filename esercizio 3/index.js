// Funzione raggruppaVendite
function raggruppaVendite(vendite, callback) {
  setTimeout(() => {
    const datiRaggruppati = vendite.reduce((acc, vendita) => {
      const categoria = vendita.categoria;
      if (!acc[categoria]) {
        acc[categoria] = { quantita: 0, guadagno: 0 };
      }
      acc[categoria].quantita += vendita.quantita;
      acc[categoria].guadagno += vendita.prezzo * vendita.quantita;
      return acc;
    }, {});
    callback(datiRaggruppati);
  }, 1000);
}

// Funzione calcolaStatistiche
function calcolaStatistiche(datiRaggruppati, callback, soglia) {
  setTimeout(() => {
    const statistiche = Object.keys(datiRaggruppati).map((categoria) => {
      const dati = datiRaggruppati[categoria];
      return {
        categoria,
        quantita: dati.quantita,
        guadagno: dati.guadagno,
        soglia,
      };
    });
    callback(statistiche);
  }, 1000);
}

// Funzione filtraCategorie
function filtraCategorie(statistiche, callback, soglia) {
  setTimeout(() => {
    const categorieFiltrate = statistiche.filter(
      (statistica) => statistica.guadagno > soglia
    );
    callback(categorieFiltrate);
  }, 1000);
}

// Esempio
const vendite = [
  { categoria: "A", quantita: 10, prezzo: 5 },
  { categoria: "A", quantita: 20, prezzo: 5 },
  { categoria: "B", quantita: 5, prezzo: 10 },
  { categoria: "B", quantita: 15, prezzo: 10 },
  { categoria: "C", quantita: 20, prezzo: 20 },
];

raggruppaVendite(
  vendite,
  (datiRaggruppati) => {
    console.log("Dati raggruppati:", datiRaggruppati);

    calcolaStatistiche(
      datiRaggruppati,
      (statistiche) => {
        console.log("Statistiche:", statistiche);

        filtraCategorie(
          statistiche,
          (categorieFiltrate) => {
            console.log(
              "Categorie con guadagni totali sopra la soglia:",
              categorieFiltrate
            );
          },
          100
        );
      },
      100
    );
  },
  100
);
