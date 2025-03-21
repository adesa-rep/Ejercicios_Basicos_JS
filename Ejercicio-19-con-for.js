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

console.log('todos los juguetes', toys);

for (let i = toys.length - 1; i >= 0; i--) {
  if (toys[i].name.includes('gato')) {
    toys.splice(i, 1);
  }
}

console.log('juguetes sin gatos: ', toys);
