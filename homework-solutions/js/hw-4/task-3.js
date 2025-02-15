/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18;
  let maxAge = 60;

  let age
  age = '61c'
  let checkAge = +age

  if (isNaN(checkAge)){
    console.log ("Incorrect data type")
  } else {
      if(age < minAge) {
        console.log ("You don't have access cause your age is " + age + ". It's less then " + minAge)
      } else if (age >= minAge && age <= maxAge) { // я добавил условие age <= maxAge иначе у нас неучтенный кейс с age = 60. Если бы не поставил, нас бы кинуло на Technical work
        console.log ("Welcome!")
      } else if (age > maxAge) {
        console.log ("Keep calm and look Culture channel")
      } else {
        console.log ("Technical work")
      }
}
