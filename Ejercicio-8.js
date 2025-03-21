// **Buscar la palabra más larga:** Completa la función que tomando un array de strings como argumento devuelva el **más largo**, en caso de que dos strings tenga la misma longitud deberá devolver el **primero**.

const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
];

//avengers.push('otro vengador mas que contar');

function findLongestWord(stringList) {
  let longestWord = '';
  let palabrasLargas = [];

  for (let word of stringList) {
    if (longestWord.length < word.length) {
      longestWord = word;
      palabrasLargas = [word]; //si usamos palabrasLargas.push(word); va a añadir todas las palabras en el vector que cumplan con la condicion. Y lo que necesitamos es que solo se guarde la palabra mas larga, es decir, que se sobre escriba.
    } else if (longestWord.length === word.length) {
      palabrasLargas.push(word);
    }
  }

  console.log('la primera palabra mas larga es: ', longestWord);
  console.log('palabras con la misma longitud ', palabrasLargas);

  return { longestWord, palabrasLargas };
}

console.log('vengadores: ', avengers);
findLongestWord(avengers);
