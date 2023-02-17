//configurar local storage para guardar las tareas y su última actualización
window.onload = () => {

const taskTitle = document.querySelector("#taskTitle")
const taskDescription = document.querySelector("#taskDescription")
const addTaskBtn = document.querySelector("#addTaskBtn");

let toDoList = []
let newTaskTitle = "";
let newTaskDescription = "";

const printCurrentDate = () => {
const currentDate = document.querySelector("#currentDate");
let date = new Date();
currentDate.innerHTML =`Última actualización : ${date}`;
;}

const addNewTask = (newTaskTitle,newTaskDescription) => {
    return {
        title: newTaskTitle,
        description: newTaskDescription,
        isReady: false,
    }
}

const printNewTask = () => {
    const taskContainer = document.querySelector("#taskContainer");
    let newTask = "";
    toDoList.forEach((task) => {
        newTask += `<tr><td><b>${task.title}</b></td>
        <td>${task.description}</td>
        <td style="text-align : right"><i class="fa-regular fa-trash-can"></i></td>
        </tr>`
    });
    taskContainer.innerHTML = newTask;
    printCurrentDate()
}

//Configurar función deleteTask

const deleteTask = (toDoList) => {
    if (toDoList[addNewTask.isReady] === true){
    toDoList.filter(task => task === addNewTask);
    }
    printCurrentDate();
 }

taskTitle.addEventListener("change", (event) => {
    event.preventDefault();
    newTaskTitle = event.target.value;

})

taskDescription.addEventListener("change", (event) => {
    event.preventDefault();
    newTaskDescription = event.target.value;
    
})

addTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toDoList.push(addNewTask(newTaskTitle,newTaskDescription));
    printNewTask();
    taskTitle.value = "";
    taskDescription.value = "";
})
}
