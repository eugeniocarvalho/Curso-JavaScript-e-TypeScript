function main() {
  const tasks = [];
  const formAddTask = document.querySelector('form');
  const taskString = document.querySelector('#input-text');
  const res = document.querySelector('#res');
  let remove = '';

  res.innerHTML = '';

  function addTask(e) {
    e.preventDefault();

    const str = taskString.value;

    if (str) {
      tasks.push(str);
      res.innerHTML += `<li>${str} <button class="remove">Apagar</button></li>`
      remove = document.querySelector('.remove');
    } else
      alert('Campo Vazio');

  }
  document.addEventListener('click', (e) => {
    const el = e.target
    const elRemove = el.parentNode;

    if (el.classList.contains('remove')) {
      res.removeChild(elRemove)
    }
  })

  formAddTask.addEventListener('submit', addTask);
}

main();