/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola 
dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const lettereNames = []

// Dichiara la funzione qui.
function letturaArray(){
    for ( let i=0; i < names.length; i++)
        console.log(names[i].charAt(0))
        lettereNames.push( names.charAt(0))
}


// Invoca la funzione qui e stampa il risultato in console
letturaArray(names)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log( lettereNames )