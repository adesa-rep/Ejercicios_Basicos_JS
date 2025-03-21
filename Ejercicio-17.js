//**For...in**: Usa un for...in para imprimir por consola los datos del alienígena. Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
};

for (let key in alien) {
  console.log(`La propiedad "${key}" tiene como valor: "${alien[key]}"`);
}

console.log('******** otro **********');
//en este caso tambien podriamos haber usado let key = keysOfAlien[i] para hacer el codigo "mas legible"
const keysOfAlien = Object.keys(alien); //crea un array solo con las clave/propiedades del objeto alien

for (let i = 0; i < keysOfAlien.length; i++) {
  console.log(
    `La propiedad "${keysOfAlien[i]}" tiene como valor: "${
      alien[keysOfAlien[i]]
    }"`
  );
}
