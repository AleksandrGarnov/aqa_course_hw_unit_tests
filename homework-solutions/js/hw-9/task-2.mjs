/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (!character.name || !character.age) {
    throw new Error('Invalid character');
  } else{
  characters.push(character)
  }

}
addCharacter({ name: 'Wilma', age: 30 })

function getCharacter(name){
  return characters.find(character => character.name === name)
}
  getCharacter('Barney')

function getCharactersByAge(minAge) {
  if(typeof minAge !== 'number' || isNaN(minAge)) {
    throw new Error('Invalid age field')
  } else{ 
  return characters.filter(character => character.age >= minAge)
  }
}
getCharactersByAge(40)
// console.log(getCharactersByAge(40))

function updateCharacter(name, newCharacter) {

  function getCharacter(name){
    return characters.find(character => character.name === name)
  }
  getCharacter(name);

const addCharacter = getCharacter(name);
if (newCharacter) {
  Object.assign(addCharacter, newCharacter);
}
}
updateCharacter('Fred', { name: 'Frederick', age: 45 })
// console.log(characters)

function removeCharacter(name) {
  const index = characters.findIndex(character => character.name === name);
  if (index === -1) throw new Error('Character not found');
  characters.splice(index, 1);
}
console.log(removeCharacter('Barney'))

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
