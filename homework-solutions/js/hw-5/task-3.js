/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vowelsAndConsonantsResult = '';
const vowelsLetters = ['a','e','i','o','u']
const consonantsLetters = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
  ];
let vowels = 0;
let consonants = 0;
for (let i = 0; i <= word.length; i++) {
    if (vowelsLetters.includes(word[i])) {
        vowels++
    } else if (consonantsLetters.includes(word[i])){
        consonants++
    }
}
vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`
console.log(vowelsAndConsonantsResult)
export { vowelsAndConsonantsResult };
