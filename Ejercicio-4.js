//Dado el siguiente array:

const aldeanos = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo'];

//? 4.1 - Saca a "Tendo" por consola atacando su posición.
console.log(aldeanos[aldeanos.indexOf('Tendo')]);

//? 4.2 - Coloca en el último lugar de este array a "Cervasio".
console.log(aldeanos);
aldeanos[aldeanos.length - 1] = 'Cervasio';
console.log(aldeanos);

//? 4.3 - Cambia el primer elemento de este array por "Bambina".
console.log(aldeanos);
aldeanos[0] = 'Bambina';
console.log(aldeanos);

//? 4.4 - Dale la vuelta a este array.
console.log(aldeanos.reverse());

//? 4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
console.log(aldeanos);
aldeanos.splice(aldeanos.indexOf('Narciso'), 1, 'Canela');
console.log(aldeanos);

//? 4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
console.log(aldeanos[aldeanos.length - 1]);
