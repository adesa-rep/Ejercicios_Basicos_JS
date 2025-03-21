//**Calcular promedio mezclado**: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
];

function averageWord(list) {
  let sumaNumbers = 0;
  let sumaLength = 0;
  for (let element of list) {
    if (typeof element === 'number') {
      sumaNumbers += element;
    } else if (typeof element === 'string') {
      sumaLength += parseInt(element.length);
    }
  }
  console.log('promedio de numeros: ', sumaNumbers / list.length);
  console.log('promedio de strings: ', sumaLength / list.length);
}

averageWord(mixedElements);

console.log(
  '.................otra forma:sumando todo junto............................'
);

function averageWord_2(list) {
  let sumaTotal = 0;
  for (let element of list) {
    if (typeof element === 'number') {
      sumaTotal += element;
    } else if (typeof element === 'string') {
      sumaTotal += parseInt(element.length);
    }
  }
  console.log('promedio total: ', sumaTotal / list.length);
  return sumaTotal / list.length;
}

averageWord_2(mixedElements);
