const log = console.log



const todoList = [];

function addTodo() {

  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value
todoList.push(name)
log(todoList)

inputElement.value = ''

}