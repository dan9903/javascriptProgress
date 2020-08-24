var tasks =  [];

function idGenerator() {
  const timestamp = new Date();
  const id = timestamp.getHours() + timestamp.getMinutes() + timestamp.getSeconds();
  return id;
}

function newTask() {
  let taskInput = document.querySelector('input#taskInput');
  if (taskInput.value === '')
    return;
  
  const task = {
    id: idGenerator(),
    data: {
      checked: false,
      description: taskInput.value,
    }
  }

  tasks.push(task);
  taskInput.value = '';
  updateScreen();
}

function deleteTask(element) {
  let id = element.parentNode.id;
  tasks = tasks.filter( task => task.id != id);
  updateScreen();
}

function toggleCheckTask(element) {
  let id = element.parentNode.id;
  tasks.map(task => {
    if (task.id == id )
      task.data.checked =! task.data.checked;
  });
  updateScreen();
}

function updateScreen() {
  let ul  = document.querySelector('ul#todos');
  ul.innerHTML = '';
  
  tasks.forEach(task => {
    let li = document.createElement('li');
    li.id = task.id;
    li.innerHTML = `<span
            class=${task.data.checked? 'checked' : 'unchecked'}
            onclick="toggleCheckTask(this)">
            ${task.data.description}
          </span>
          <input type="button" value="X" onclick="deleteTask(this)">`;
    console.log(li);
    ul.appendChild(li);
  });
}