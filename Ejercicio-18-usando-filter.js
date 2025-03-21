//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40. Imprime en un _console log_ el array resultante.

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
];

//con filter creamos un nuevo array sin los elementos que queremos eliminar
const arrayFilter = placesToTravel.filter(
  (place) => place.id !== 11 && place.id !== 40
);
console.log(arrayFilter);
