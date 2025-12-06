// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Array to keep track of tasks
    let tasks = [];

    // Function to create a task element and optionally save to Local Storage
    function addTask(taskText, save = true) {
        taskText = taskText.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create task <li>
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task logic
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== taskText); // Remove from tasks array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Update Local Storage
        };

        // Append remove button and task to the DOM
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";

        // Save to Local Storage if required
        if (save) {
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    // Function to load tasks from Local Storage on page load
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false prevents re-saving
        tasks = storedTasks; // Initialize tasks array
    }

    // Event listeners
    addButton.addEventListener('click', function () {
        addTask(taskInput.value);
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks when page loads
    loadTasks();
});
