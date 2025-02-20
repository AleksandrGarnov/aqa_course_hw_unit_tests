/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vowelsAndConsonantsResult = '';
let vowels = 0;
let consonants = 0;
for (let i = 0; i <= word.length; i++) {
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
        vowels++
    } else if (word[i] === 'b' || word[i] === 'c' || word[i] === 'd' || word[i] === 'f' || word[i] === 'g' ||
        word[i] === 'h' || word[i] === 'j' || word[i] === 'k' || word[i] === 'l' || word[i] === 'm' ||
        word[i] === 'n' || word[i] === 'p' || word[i] === 'q' || word[i] === 'r' || word[i] === 's' ||
        word[i] === 't' || word[i] === 'v' || word[i] === 'w' || word[i] === 'x' || word[i] === 'y' ||
        word[i] === 'z') {
        consonants++
    }
}
vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`
console.log(vowelsAndConsonantsResult)
export { vowelsAndConsonantsResult };
