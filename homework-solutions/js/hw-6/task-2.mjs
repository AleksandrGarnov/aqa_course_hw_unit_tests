/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
let competitorPizzasLowerCase = competitorPizzas.map(el => el.toLowerCase())
console.log(competitorPizzasLowerCase) 
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let resultUnique = []
let resultNull = null;

for(let firstPizza of myPizzasT1) {
  if(!competitorPizzasLowerCase.includes(firstPizza.toLowerCase())){
    resultUnique.push(firstPizza);
  }
}

for(let secondPizza of myPizzasT2) {
  if(!competitorPizzasLowerCase.includes(secondPizza.toLowerCase())){
    resultUnique.push(secondPizza);
  }
}
if (resultUnique.length === 0) {
  resultNull = null;
}

console.log(resultUnique)
console.log(resultNull)
export { resultNull, resultUnique };
