/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  return arrays.flat();
}
// console.log(mergeArrays([1,2], [3,4], [5,6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let splitResultresult = sentence.split(" ")
// console.log (splitResultresult)
  let mapResult = splitResultresult.map((letter, index) => {
    if (index === 0) {
      return letter.toLowerCase()
    } else {
      return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()
      
    }
  })
  console.log(mapResult)
  const handleSpace = mapResult.filter(letter => letter !== '');
  // console.log(handleSpace)
  let joinResult = handleSpace.join("_")
  // console.log(joinResult)

  return joinResult

}
devideBy("I am super engineer")
/*можно в целом сократить
return sentence.split(" ").map((letter,index) => index === 0 ? letter.toLowerCase() : letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()).join("_")
*/
/*

  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (n === 2) {
    return 1
  }
  let previousNumber = 1;
  let currentNumber = 1;
  for (let i = 3; i <= n; i++) {
    let sumNumber = previousNumber + currentNumber;
    previousNumber = currentNumber
    currentNumber = sumNumber
  }
  return currentNumber
}
console.log(fibonacci(37));

export { mergeArrays, fibonacci, devideBy };
