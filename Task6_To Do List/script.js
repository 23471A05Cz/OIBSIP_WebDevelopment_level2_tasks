function addTask() {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    if (title === "" || desc === "") {
        alert("Fill all fields");
        return;
    }

    document.getElementById("pendingSection").style.display = "block";

    let task = document.createElement("div");
    task.className = "task";

    function setTaskHTML(titleText, descText) {
        task.innerHTML = `
            <div class="task-text">
                <div><b>Title:</b> ${titleText}</div>
                <div><b>Description:</b> ${descText}</div>
            </div>
            <div class="task-buttons">
                <button class="complete">Complete</button>
                <button class="update">Update</button>
                <button class="delete">Delete</button>
            </div>
        `;

        // Attach event listeners again after setting HTML

        // Delete button
        task.querySelector(".delete").onclick = function() {
            task.remove();
        };

        // Complete button
        task.querySelector(".complete").onclick = function() {
            document.getElementById("completedSection").style.display = "block";
            // Keep the same structure in Completed
            setTaskHTML(titleText, descText);
            document.getElementById("completed").appendChild(task);
        };

        // Update button
        task.querySelector(".update").onclick = function() {
            let newTitle = prompt("Update title", titleText);
            let newDesc = prompt("Update description", descText);
            if (newTitle && newDesc) {
                titleText = newTitle;
                descText = newDesc;
                setTaskHTML(titleText, descText); // re-render with labels
            }
        };
    }

    // Initial render
    setTaskHTML(title, desc);

    document.getElementById("pending").appendChild(task);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
}