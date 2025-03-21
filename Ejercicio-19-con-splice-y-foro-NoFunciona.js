//Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra). Recuerda usar la función .includes() para comprobar la palabra.

const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
];

console.log(toys);

const deletedToys = []; //array de objetos

for (let toy of toys) {
  if (toy.name.includes('gato')) {
    deletedToys.push(toy);
    toys.splice(toys.indexOf(toy), 1); //el metodo splice necesita en indice exacto del elemento dentro del array. Pero en un forof, toy es el elemento... no su posicion y por eso debemos usar el indexof
  }
}

deletedToys.forEach((deletedToy) =>
  console.log(
    `se han elemidinado los toys con "id": ${deletedToy.id} y "nombre": ${deletedToy.name}`
  )
);

console.log('tras eliminar: ', toys); // queda el elemento: id: 40, name: 'FurReal Friends gato interactivo'
