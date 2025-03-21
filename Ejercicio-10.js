// **Calcular un promedio** es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  // let sumaTotal = sumNumbers(numberList);
  // let avg = sumaTotal / numberList.length;
  let avg = sumNumbers(numberList) / numberList.length;

  console.log(avg);
  return avg;
}

function sumNumbers(numberList) {
  let sumaTotal = 0;
  for (let number of numberList) {
    sumaTotal += number;
  }
  return sumaTotal;
}

average(numbers);

console.log(
  '.......................otra forma....................................'
);

function average_otro(numberList) {
  return sumNumbers(numberList) / numberList.length;
}

console.log(average_otro(numbers));
