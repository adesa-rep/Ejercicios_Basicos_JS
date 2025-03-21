// **Contador de repeticiones**: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

//Por ejemplo, que devuelva: **code:4, repeat: 1, eat: 1,...** .
//Para tener esta estructura, crearemos una especie de diccionario donde tendremos como clave la palabra almacenada en cada posicion del array como valor la cantidad de veces que se repite esta palabra/clave.

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
  const repeticionDiccionarie = {}; // creamos un objeto
  //usamos un bucle para recorrer todos los elementos de array y usaremos estos elementos como key/propiedad en el objeto creado
  for (let key of list) {
    //verificamos si dentro del objeto existe esa clave/propiedad
    if (repeticionDiccionarie[key]) {
      //si existe, aumentamos su valor
      repeticionDiccionarie[key] += 1;
    } else {
      //si no existe, agregamos el par clave/propiedad: valor, donde el valor sera 1 (primera aparicion)
      repeticionDiccionarie[key] = 1;
    }
  }

  //mostramos el objeto con su par clave: valor
  console.log(repeticionDiccionarie);

  //indicamos que el valor devuelto por la funcion es el objeto
  return repeticionDiccionarie;
}

repeatCounter(words);
