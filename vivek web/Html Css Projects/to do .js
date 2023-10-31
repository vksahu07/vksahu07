// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

// Add event listener for the "Add" button
document.getElementById("addTask").addEventListener("click", addTask);

// Add event listener for Enter key in the input field
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
