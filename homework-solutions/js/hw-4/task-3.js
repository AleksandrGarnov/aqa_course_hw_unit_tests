/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18;
  let maxAge = 60;

  let age
  age = 'true'
  let checkAge = +age

  if (typeof checkAge != "number" || isNaN(checkAge)){
    console.log ("Incorrect data type")
  } else if(checkAge < minAge) {
    console.log ("You don't have access cause your age is " + checkAge + ". It's less then " + minAge)
  } else if (checkAge >= minAge && checkAge <= maxAge) {
    console.log ("Welcome!")
  } else if (checkAge > maxAge) {
    console.log ("Keep calm and look Culture channel")
  } else {
    console.log ("Technical work")
  }
