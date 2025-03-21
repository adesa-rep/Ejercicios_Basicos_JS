// **Contador de repeticiones**: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

//crearemos un array de objetos donde cada elemento del array words sera un objeto compuesto por dos claves: "word" y "repetition".

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const arrayObjects = []; // creamos un array donde guardaremos objetos

  //usamos un bucle anidado: el externo para iterar en el array list y el interno para iterar dentro del arrayObjects. Usamos el externo para extraer una palabra y luego confirmar si esa palabra es el valor de alguna clave de los objetos almacenados en arrayObjects

  for (let valor of list) {
    let palabra = valor;
    //usamos una bandera porque en este momento tenemos la palabra que vamos a comprar... pero en esta "fase" aun no hemos encontrado ninguna coincidencia.
    let foundFlag = false;

    for (let object of arrayObjects) {
      if (object.word === palabra) {
        object.repeat += 1;
        foundFlag = true; //dado que ha coincidido que en la posicion "object" del array, el valor de la propiedad word es exactamente al de la palabra que extraimos, cambiamos el estado de la bandera
        break; //salimos del bucle en cuanto encontramos una coincidencia.
      }
    }

    //si en la posicion "object" del array, el valor de la propiedad word no coincide con el de la palabra que estamos comparando, añadimos el objeto con su par
    if (!foundFlag) {
      arrayObjects.push({
        word: palabra,
        repeat: 1
      });
    }
  }
  console.log(arrayObjects);
  return arrayObjects;
}

repeatCounter(words);
