//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
];

let frutasUsadas = [];
let frutaIndex = 0;
function remplazarFrutas(food, fruits) {
  // let frutasUsadas = [];
  for (i = 0; i < food.length; i++) {
    if (!food[i].isVegan) {
      for (frutaIndex; frutaIndex <= fruits.length; frutaIndex++) {
        if (!frutasUsadas.includes(fruits[frutaIndex])) {
          food[i].name = fruits[frutaIndex];
          frutasUsadas.push(fruits[frutaIndex]);
          //frutaIndex++;
          break;
        }

        if (frutasUsadas.length === fruits.length) {
          frutasUsadas.splice(0, frutasUsadas.length); //al ser un tipo de dato complejo, si hicieramos frutasUsadas = [] no estariamos vaciando el array... porque esto crea un nuevo array vacio [] y lo asigna a frutasUsadas. Es por esto que modificamos el contenido del array desde la misma referencia
          frutaIndex = -1;
        }
      }
    }
  }

  console.log('comidas no veganas reemplazas', food);
  console.log('frutas usadas', frutasUsadas);
}

remplazarFrutas(foodSchedule, fruits);
remplazarFrutas(foodSchedule, fruits);
remplazarFrutas(foodSchedule, fruits);
