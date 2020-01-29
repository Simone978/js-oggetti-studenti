// Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var studente = {
  'nome' : 'simone',
  'cognome' : 'lega',
  'eta' : 41
}

for (var key in studente) {
  $('.dati_studente').append(studente[key]);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var studenti = [
  {'nome' : 'simone',
  'cognome' : 'lega',
  'eta' : 41
},
{
  'nome' : 'giovanni',
  'cognome' : 'bianchi',
  'eta' : 25
},
{
  'nome' : 'alfreda',
  'cognome' : 'neri',
  'eta' : 29
},
{
  'nome' : '',
  'cognome' : '',
  'eta' : 0
}
];
var nome_oggetto = prompt('inserisci nome');
var cognome_oggetto = prompt('inserisci cognome');
var eta_oggetto = prompt('inserisci età');
// console.log(nome_oggetto + '' + cognome_oggetto + '' + eta_oggetto);
studenti[3].nome = nome_oggetto;
studenti[3].cognome = cognome_oggetto;
studenti[3].eta = eta_oggetto;
console.log(studenti[3]);

for (var i = 0; i < studenti.length; i++) {
  $('.nomi_studenti ul').append('<li>'+studenti[i].nome + ' ' + studenti[i].cognome+'</li>');
}
