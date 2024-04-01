function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const newTaskValue = newTaskInput.value.trim();

    if (!newTaskValue) {
        return;
    }

    const newListElement = document.createElement('li');
    newListElement.innerHTML = `
        <input type="checkbox">
        <input type="text" value="${newTaskValue}" readonly>
    `;

    document.getElementById('todoList').appendChild(newListElement);

    newTaskInput.value = '';
}