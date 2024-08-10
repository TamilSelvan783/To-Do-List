
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');


const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', addTask);


function addTask() {
    const taskText = taskInput.value.trim(); 

    if (taskText !== "") { 
        const li = document.createElement('li'); 

        
        li.innerHTML = `
            ${taskText} 
            <span>
                <button class="completeButton">✔</button>
                <button class="deleteButton">✖</button>
            </span>`;

        li.querySelector('.completeButton').addEventListener('click', function() {
            li.classList.toggle('completed'); 
        });

        li.querySelector('.deleteButton').addEventListener('click', function() {
            li.remove(); 
        });

        taskList.appendChild(li); 
        taskInput.value = ""; 
    }
}
