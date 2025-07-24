const taskInput = document.getElementById("task")
const filters = document.querySelector(".task-control span")
const clearBtn = document.querySelectoe(".clear-btn")
const taskBox = document.querySelector('.task-box')

let task =[]

function renderTasks(filter = "all") {
    taskBox.innerHTML = "";
    task.forEach((task, index) => {
        if (filter === "pending" && task.completed) return;
        if (filter === "completed" && !task.completed) return;


        const li = document.createElement("li")
        li.className = "task" + (task.completed ? "completed": "")
        li.innerHTML = 
         `<label>
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <p>${task.name}</p>
          </label>
            <div class="settings">
              <img src="img/ellipsis-solid.svg" alt="ellipsis-solid" width="10px">
              <ul class="settings-menu">
                 <li>"onClick="editTask(${index})">Edit</li>
                 <li>onClick="deleteTask(${index})">Delete</li>
              </ul>
            </div>`
        taskBox.appendChild(li);

        li.querySelector("input").addEventListener("change", () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks(currentFilter);
        });
    })
}












function addTask() {
    const value = taskInput.value();
    if (value === "") return;
    tasks.push({name:value, completed:false});
    taskInput.value = "";
    renderTasks(currentFilter);
}