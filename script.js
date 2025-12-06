// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Step 2: Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Define the addTask function
    function addTask() {
        // Get and trim user input
        const taskText = taskInput.value.trim();

        // If empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 4: Create a new task <li>
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the <li>, then add <li> to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Step 5: Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 6: Invoke addTask on DOMContentLoaded (as required)
    //addTask();
});
