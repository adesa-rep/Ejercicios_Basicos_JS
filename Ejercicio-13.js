//**Buscador de nombres**: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nombre) {
  for (let i = 0; i < nameList.length; i++) {
    if (nombre === nameList[i]) {
      console.log('existe en la posicion ', i);
      return true;
    } else false;
  }
}

nameFinder(names, 'Jessica');
