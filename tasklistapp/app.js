// Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

function loadEventListeners(){
    //add task event
    form.addEventListener('submit', addTask);
    //remove tasks
    taskList.addEventListener('click', removeTask);
    //clear tasks
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks
    filter.addEventListener('keyup', filterTasks);
}
function addTask(e){
if(taskInput.value === '') {
    alert('Add a task');
}
// Create li element
const li = document.createElement('li');
// Add class
li.className = 'collection-item';
// create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// create link element
const link = document.createElement('a');
//Add class
link.className = 'delete-item secondary-content';
//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//Append the link to li
li.appendChild(link);
//Append li to ul
taskList.appendChild(li);
//Clear input
taskInput.value = '';
//Store in LS
storeTaskInLocalStorage(taskInput.value);

e.preventDefault();
}
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Tasks
function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('¿Are you sure?')){
        e.target.parentElement.parentElement.remove();
         }
    }
}

//Clear Tasks
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

loadEventListeners();