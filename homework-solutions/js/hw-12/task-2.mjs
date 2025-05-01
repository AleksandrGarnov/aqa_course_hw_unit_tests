/*Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
   */
const API_URL = 'https://jsonplaceholder.typicode.com/todos'
   async function createTodo(body) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type":'application/json; charset=UTF-8'
            }
        });
        const data = await response.json()
        if (response.status !== 201) {
            throw new Error('Status is not 201')
        }
        if (data.title !== body.title) {
            throw new Error('Title field is not matched with the body')
        }
        if (data.completed !== body.completed) {
            throw new Error('Completed field is not matched with the body')
        }
        if (data.userId !== body.userId) {
            throw new Error('UserId field is not matched with the body')
        }
    } catch (error) {
        throw error
    }
        await console.log('Function is finished')
}

createTodo({title: 'New Todo', completed: false, userId: 1})