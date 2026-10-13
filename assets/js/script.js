/* ESERCIZIO 1 — Saluto personalizzato */

const nome = "Mario";
const cognome = "Rossi";
console.log(`Ciao, mi chiamo ${nome} ${cognome}.`);


/* ESERCIZIO 2 — Calcolatrice base */

const a = 10;
const b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);


/* ESERCIZIO 3 — Età nel tempo */

const annoNascita = 2001;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;
console.log(`Oggi hai ${etaOggi} anni.`);
console.log(`Tra 10 anni avrai ${etaOggi + 10} anni.`);
console.log(`5 anni fa avevi ${etaOggi - 5} anni.`);


/* ESERCIZIO 4 — Maggiorenne? */

const eta = 25;
const maggiorenne = eta >= 18;
console.log(`Età: ${eta} — Maggiorenne: ${maggiorenne}`);


/* ESERCIZIO 5 — Tipo del valore */

const testo = "Mario";
const numero = 42;
const attivo = true;
// typeof null ritorna "object" — è un bug storico di JavaScript
// presente fin dalla prima versione del linguaggio (1995) e mai corretto
// per non rompere il codice esistente.
const vuoto = null;
let nonDefinito;

console.log(`testo è di tipo: ${typeof testo}`);
console.log(`numero è di tipo: ${typeof numero}`);
console.log(`attivo è di tipo: ${typeof attivo}`);
console.log(`vuoto è di tipo: ${typeof vuoto}`);
console.log(`nonDefinito è di tipo: ${typeof nonDefinito}`);


/* ESERCIZIO 6 — === vs == */

const numeroSei = 5;
const stringaSei = "5";
console.log(`numero == stringa: ${numeroSei == stringaSei}`);
console.log(`numero === stringa: ${numeroSei === stringaSei}`);
// "==" converte i tipi prima di confrontare; "===" no.


/* ESERCIZIO 7 — Conversioni implicite */

// Previsioni:
// "5" + 3   → "53"   (string + number → concatenazione)
// "5" - 3   → 2      (number con conversione automatica)
// true + 1  → 2      (true → 1)
// "10" * "2" → 20    (entrambe le stringhe → number)

console.log(`"5" + 3 = ${"5" + 3}`);
console.log(`"5" - 3 = ${"5" - 3}`);
console.log(`true + 1 = ${true + 1}`);
console.log(`"10" * "2" = ${"10" * "2"}`);


/* ESERCIZIO 8 — Classificazione numero */

const n = 12;
const pari = n % 2 === 0;
const divisibilePer3 = n % 3 === 0;
const pariEDivisibilePer3 = pari && divisibilePer3;

console.log(`${n} è pari: ${pari}`);
console.log(`${n} è divisibile per 3: ${divisibilePer3}`);
console.log(`${n} è pari E divisibile per 3: ${pariEDivisibilePer3}`);


/* --EXTRA-- ESERCIZIO 9 — Triangolo */

const lato1 = 5;
const lato2 = 5;
const lato3 = 5;
const perimetro = lato1 + lato2 + lato3;

let tipo;
if (lato1 === lato2 && lato2 === lato3) {
  tipo = "equilatero";
} else if (lato1 === lato2 || lato2 === lato3 || lato1 === lato3) {
  tipo = "isoscele";
} else {
  tipo = "scaleno";
}

console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);
