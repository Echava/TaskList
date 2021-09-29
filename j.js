document.querySelector('form').addEventListener('submit', addTask);
function addTask(e){
    const task = document.getElementById('task').value;
    let tasks;
    if (localStorage.getItem('tasks')===null){
        tasks = [];      
    }else{
       tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert("task added");
    
    console.log(tasks);
    
    e.preventDefault();
}