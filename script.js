let form = document.getElementById("form");
const allTasks = [];

const validateForm = (event) => {
    event.preventDefault();
    let display = document.getElementById("display");
    // console.log(event.target.ui.value);
    let userInput = event.target.ui;

    // Add new task
    allTasks.push(userInput.value);

    // Clear display
    display.innerHTML = "";

    // Render tasks using normal for loop
    for (let i = 0; i < allTasks.length; i++) {
        display.innerHTML += `<li>${allTasks[i]} <button onclick="deleteTask(${i})">Delete</button></li>`;
    }

    // Reset input
    userInput.value = "";
};

// Delete function
function deleteTask(index) {
    allTasks.splice(index, 1); // remove task
    let display = document.getElementById("display");
    display.innerHTML = "";

    // Render tasks again using normal for loop
    for (let i = 0; i < allTasks.length; i++) {
        display.innerHTML += `<li>${allTasks[i]} <button onclick="deleteTask(${i})">Delete</button></li>`;
    }
}

form.addEventListener("submit", validateForm);
