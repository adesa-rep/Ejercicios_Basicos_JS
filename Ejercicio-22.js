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

let frutaIndex = 0; //declaramos el indice por fuera de la funcion (o del bucle, en caso de que se haga por fuera) para que no se reinicie tras cada llamada o iteracion

function changeFood(food, fruits) {
  //iteramos sobre los objetos del array 'food'
  for (let i = 0; i < food.length - 1; i++) {
    //evaluamos si la comida no es vegana Y que el frutaIndez sea menor que la longitud del array. De modo que si esto se cumple, cambiamos el valor de la propiedad name del objeto dentro del array food
    if (!food[i].isVegan && frutaIndex < fruits.length) {
      food[i].name = fruits[frutaIndex];
      frutaIndex++; //incrementamos el index
      //verificamos si el indice es exactamente igual que la longitud del arra y, de ser asi, lo reiniciamos para que al volver a ejecutar la funcion, nos de valores distintos.
      if (frutaIndex === fruits.length) {
        frutaIndex = 0;
      }
    }
  }

  console.log(food);
  // console.log(frutaIndex);
}

changeFood(foodSchedule, fruits);
changeFood(foodSchedule, fruits);
changeFood(foodSchedule, fruits);
