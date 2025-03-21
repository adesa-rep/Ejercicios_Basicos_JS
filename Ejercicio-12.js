// **Valores únicos**: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  'sushi',
  'pizza', //!
  'burger',
  'potatoe',
  'pasta', //!
  'ice-cream',
  'pizza', //!
  'chicken',
  'onion rings',
  'pasta', //!
  'soda'
];
function removeDuplicates(list) {
  const elementosVistos = [];
  for (let i = 0; i < list.length; i++) {
    let revisando = list[i];
    if (elementosVistos.includes(revisando)) {
      list[i] = '----------';
    } else {
      elementosVistos.push(revisando);
    }
  }
  console.log('tachando elementos duplicados: ', duplicates); //lo ponemos dentro de la funcion porque sino solo podriamos ponerlo despues de mostrar el array y no tiene mucho sentido mostrarlo de esa forma
  return elementosVistos;
}

console.log(
  'nuevo array sin elementos duplicados: ',
  removeDuplicates(duplicates)
);
