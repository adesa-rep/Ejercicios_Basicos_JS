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
      list.splice(i, 1);
      i--; //devolvemos el contador una posicion ya que al borrar el elemento se modifican los indices
    } else {
      elementosVistos.push(revisando);
    }
  }
  return list;
}

console.log('array original con elemento duplicados: ', duplicates);

console.log(
  'borrando directamente los elementos repetidos: ',
  removeDuplicates(duplicates)
);
