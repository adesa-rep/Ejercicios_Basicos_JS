//! 1. Luke Skywalker cumple años:

//? Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.
const jedi = { nombre: 'Luke Skywalker', edad: 19 };

// Tu código para cambiar la edad aquí...
jedi['edad'] = 25;
console.log(`Edad del jedi ${jedi.nombre} es ${jedi.edad} años`);
//console.log(`Edad del jedi ${jedi['nombre']} es ${jedi['edad']} años`);

// ******************************************************

//! 2. Presentación al estilo Leia Organa:
let nombre = 'Leia';
let apellido = 'Organa';
let edad = 20;

console.log(
  `Soy ${nombre} ${apellido} tengo ${edad} años y soy una princesa de Alderaan`
);

// ******************************************************

//! 3. Calculando el coste total de sables de luz:
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 };
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 };

console.log(`Coste total de sables de luz ${sable1.precio + sable2.precio}`);

// ******************************************************
//! 4. Actualizando el precio final de las naves:
let precioBaseGlobal = 10000;

precioBaseGlobal = 25000; //cambiamos valor de la variable

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 };
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
};

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(`nave ${nave1.nombre} precio final ${nave1.precioFinal}`);
console.log(`nave ${nave2.nombre} precio final ${nave2.precioFinal}`);

// ******************************************************
