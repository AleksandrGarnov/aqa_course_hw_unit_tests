/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let firstNumber = 3;
let resultNumber1 = String (firstNumber);
let doubleconcatenation = +(firstNumber + resultNumber1)
let tripleconcatenation = +(firstNumber + resultNumber1 + resultNumber1)

//первый вариант вывода
console.log(firstNumber + doubleconcatenation + tripleconcatenation)
//второй вариант вывода
console.log(firstNumber + +(firstNumber+resultNumber1) + +(firstNumber + resultNumber1 + resultNumber1))
// третий вариант вывода
console.log(firstNumber + Number(firstNumber+resultNumber1) + Number(firstNumber + resultNumber1 + resultNumber1))
