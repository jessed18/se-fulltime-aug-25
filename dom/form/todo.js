const form = document.querySelector('.js-form');
const nameField = form.querySelector('[name=todo-name]');
const deadlineField = form.querySelector('[name=todo-deadline');
const todosContainer = document.querySelector('.js-container');
const errorContainer = document.querySelector('.js-error-container');

const todoItems = [];

function renderTodos() {
    let html = '<ul>';

    for (let item of todoItems) {
        html += `<li>${item.todoName}(${todoDate})</li>`;
    }

    html += '</ul>';
    todosContainer.innerHTML = html;
}

function renderTodos2() {
    const html = ['<ul>'];

    for (let item of todoItems) {
        html += `<li>${item.todoName}(${todoDate})</li>`;
    }

    html.push += '</ul>';
    todosContainer.innerHTML = html.join('');
}

function formSubmitted(event) {
    event.preventDefault();

    const todoName = nameField.value;
    const todoDate = deadlineField.value;

    if (todoName.length === 0 || todoDate.length === 0 ) {
        errorContainer.innerHTML = 'error: enter the data of the todo item before adding it to the list';
        return;
    } else {
        errorContainer.innerHTML = '';
    }

    todoItems.push({
        todoName: nameField.value,
        todoDate: deadlineField.value
    });

    nameField.value = '';
    deadlineField.value = '';
}

form.addEventListener('submit',formSubmitted);