var FormE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listenItemE1 = document.createElement("li");
    listenItemE1.classname = "task-item";
    listenItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listenItemE1);
   
};
FormE1.addEventListener("submit", createTaskHandler);
