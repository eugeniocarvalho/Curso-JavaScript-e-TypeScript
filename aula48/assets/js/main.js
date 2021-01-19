function main() {
  let tasks = [];
  const formAddTask = document.querySelector('form');
  const taskString = document.querySelector('#input-text');
  const res = document.querySelector('#res');

  res.innerHTML = '';

  function addTask(e) {
    e.preventDefault();

    const str = taskString.value;

    if (str) {
      tasks.push(str);
      res.innerHTML += `<li>${str} <button class="remove">Apagar</button></li>`
      saveTasks();
      cleanInput();
    } else
      alert('Campo Vazio');
  }

  function saveTasks() {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
  }

  function addTasksSalved() {
    tasksJSON = JSON.parse(localStorage.getItem('tasks'));


      for (let i in tasksJSON) {
        res.innerHTML += `<li>${tasksJSON[i]} <button class="remove">Apagar</button></li>`
        tasks.push(tasksJSON[i])
      }
  }

  function cleanInput() {
    taskString.value = '';
    taskString.focus();
  }

  document.addEventListener('click', (e) => {
    const el = e.target
    const elementRemove = el.parentNode;

    if (el.classList.contains('remove')) {
      res.removeChild(elementRemove);

      const removeElementArray = tasks.indexOf(elementRemove.innerText.replace('Apagar', '').trim())

      tasks.splice(removeElementArray, 1)
      saveTasks();
    }
  })

  formAddTask.addEventListener('submit', addTask);
  
  addTasksSalved()
}

main();