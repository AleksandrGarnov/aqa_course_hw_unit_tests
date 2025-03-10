/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== "string") {
    return false
  } else {
    let wordToLowerCase = word.toLowerCase();
    // console.log(wordToLowerCase)
    let checkWord = wordToLowerCase.split("")
    // console.log(checkWord)
    let reverseWord = checkWord.reverse();
    // console.log(reverseWord)
    let joinWord = reverseWord.join("");
    // console.log(joinWord)

    return joinWord === wordToLowerCase
  }
}
isPalindrom("test");

/*одна из проверок палиндромов это проверка,если word не строка, то возвращает false, но 1221 это тоже палиндром. Условно добавил 
if (typeof word !== "string") {
    return false
  }
/*

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (sentence === "") {
    return []
  } else if (typeof sentence !== "string") {
    return []
  } else {
    let sentenseToArr = sentence.split(" ")
    let sumletter = sentenseToArr.map(letters => letters.length)
    console.log(sumletter)
    let countMaxNumber = Math.max(...sumletter)
    let showWord = sentenseToArr.filter(letters => letters.length === countMaxNumber)
    return showWord
  }
}
console.log(findLongestWords("test sdfasdasd asdasdsa sadasdasdsahdklja askhdaksgdaskjhd askhdsakgdasda"));

export { isPalindrom, findLongestWords };
