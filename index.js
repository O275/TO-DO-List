let addTo = document.getElementById('addTo');
addTo.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskInput = document.getElementById('new-task');
  let addToText = taskInput.value;

  if (addtoText !== ' ') {
    addTask(addToText);
    taskInput.value = ' ';
  }


});