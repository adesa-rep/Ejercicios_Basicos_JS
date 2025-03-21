// Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let result = 0;
  for (let number of numberList) {
    result += number;
  }
  return console.log(result);
}

sumNumbers(numbers);
