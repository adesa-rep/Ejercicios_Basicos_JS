// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(`el numero mayor es ${numberOne}`);
  } else {
    console.log(`el numero mayor es ${numberTwo}`);
  }
}
greaterNumber(3, 5);

console.log(
  '......................................otra forma..............................................'
);

function numMayor(num1, num2) {
  console.log(Math.max(num1, num2));
}

numMayor(10, 8);
