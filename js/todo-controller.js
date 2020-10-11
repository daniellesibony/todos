'use strict'

console.log('Hi');


function onInit() {
    renderTodos();
}


function renderTodos() {
    var strHTML = ''
    var todos = getTodosForDisplay();
    todos.forEach(function (todo) {
        strHTML +=
            `<li class="${(todo.isDone) ? 'done' : ''}" onclick="onToggleTodo('${todo.id}')">
            ${todo.txt} - ${todo.importance}
            <button onclick="onRemoveTodo(event,'${todo.id}')">x</button>
        </li>`
    }) 
    document.querySelector('.todo-list').innerHTML = strHTML;

    document.querySelector('.total').innerText = getTodosCount()
    document.querySelector('.active').innerText = getActiveTodosCount()
}

function onAddTodo() {
    var elNewTodoTxt = document.querySelector('.new-todo-txt');
    var elNewTodoImportance = document.querySelector('.new-todo-importance')
    var txt = elNewTodoTxt.value
    if (txt === '') {
        alert('Please Enter To do')
        return;
    }
    var importance = elNewTodoImportance.value
    addTodo(txt, importance);
    renderTodos();
    elNewTodoTxt.value = '';
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation();
    removeTodo(todoId);
    renderTodos();
}
function onToggleTodo(todoId) {
    toggleTodo(todoId);
    renderTodos();
}

function onSetFilter(filterBy) {
    setFilter(filterBy)
    renderTodos();
}

function onSortTodosForDisplay() {
    sortTodosForDisplay()
    renderTodos()
}

