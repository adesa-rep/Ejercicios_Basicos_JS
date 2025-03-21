//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40. Imprime en un _console log_ el array resultante.

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 11, name: 'algo' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
];

//cuando vamos de arriba hacia abajo y borramos un elemento, el elemento siguiente (el de abajo) tomara la posicion del elemento borrado y esto impedira que iteremos sobre elemento. Ejemplo, si borramos un elemento en la posicion 2, el elemento de la posicion 3 se movera a la poscion 2, pero i ahora sera 3, asi que ese elemento no sera evaluado. Para evitar esto, hacemos i--, para obligar retroceder una vuelta/iteracion y no dejar por fuera ningun elemento.
for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1); //Elimina el elemento en la posición i
    i--;
  }
}

console.log('******** lo mismo desde otra direccion **********');

//cuando iteramos de abajo hacia arriba y borramos un elemento, el elemento anterior (el de abajo) tomara la posicion del elemento borrado. En este caso no afecta nada porque el elemento de abajo ya fue iterado y por eso podemos continuar avanzando. Ejemplo, si borramos un elemento en la posicion 2, el elemento de la posicion 3 se movera a la poscion 2, pero i ahora sera 1,
for (let i = placesToTravel.length - 1; i >= 0; i--) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
  }
}

console.log(placesToTravel);
