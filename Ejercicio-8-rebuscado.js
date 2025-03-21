// **Buscar la palabra más larga:** Completa la función que tomando un array de strings como argumento devuelva el **más largo**, en caso de que dos strings tenga la misma longitud deberá devolver el **primero**.

const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
];

avengers.push('un avenger desconocido');
avengers.pop();

function contruirArrayItemsLength(stringList) {
  let itemsLength = [];
  for (let element of stringList) {
    let item = element.length;
    itemsLength.push(item);
  }
  itemsLength.sort((a, b) => a - b);
  //console.log('array con todos los length: ', itemsLength);

  return itemsLength;
}

function buscarMaxLength(array) {
  let maxLength = array[array.length - 1];
  console.log('maximo length: ', maxLength);

  return maxLength;
}

function findLongestWord(stringList) {
  let itemsLength = contruirArrayItemsLength(stringList);
  let maxLength = buscarMaxLength(itemsLength);

  let longestWord = '';
  for (let word of stringList) {
    if (word.length === maxLength) {
      longestWord = word;
      console.log('la palabra mas larga es: ', longestWord);
      break;
    }
  }
}

console.log('array: ', avengers);
findLongestWord(avengers);
