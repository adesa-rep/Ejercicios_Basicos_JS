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
  console.log('tachando elementos duplicados: ', list);

  return list.filter((item) => {
    return item !== '----------';
  });
}
// console.log('tachando elementos duplicados: ', selectDuplicates(duplicates)); // selectDuplicates(duplicates) no da lo que devuelve la funcion (list)

console.log(
  'usando la funcion filter creamos un nuevo array solo con aquellos elementos que no esten tachados. Estos son: ',
  removeDuplicates(duplicates)
);
