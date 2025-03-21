const jedi = { nombre: 'Luke Skywalker', edad: 19 };

//sin modificar ni agregar campos
console.log(jedi); // nombre: 'Luke Skywalker', edad: 19

// agregamos otra clave pero desde una variable y le asignamos un valor
// como lo hacemos a traves de una variable, la clave entre [] no lleva comillas
let nuevaEdad = 'Nueva Edad';
jedi[nuevaEdad] = 25;

console.log(jedi); //nombre: 'Luke Skywalker', edad: 35, 'Nueva Edad': 25

jedi['edad'] = 35; //modificamos una clave, asi que podemos acceder usando jedi.edad o la notacion de corchetes pero la clave debe ir entre comillas
console.log(jedi);

//podemos acceder al par clave:valor bien sea usando el nombre la clave o la variable, teniedo en cuenta que para la variable no usamos comillas
console.log(`nueva edad es ${jedi['Nueva Edad']}`); //nueva edad es 25
console.log(`nueva edad es ${jedi[nuevaEdad]}`); //nueva edad es 25
