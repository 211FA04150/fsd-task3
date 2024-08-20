document.getElementById("toggleButton").addEventListener("click", function() {
    var container = document.getElementById("container");
    var text = document.getElementById("text");
    var button = document.getElementById("toggleButton");

    // Get the computed background color of the container
    var currentColor = window.getComputedStyle(container).backgroundColor;

    // Check if the container is in its initial state
    if (currentColor === "rgb(173, 216, 230)") { // lightblue in rgb format
        container.style.backgroundColor = "lightcoral";
        text.textContent = "The state has changed!";
        button.textContent = "Revert State";
        button.style.backgroundColor = "#28a745";
        button.style.color = "white";
    } else {
        container.style.backgroundColor = "lightblue";
        text.textContent = "Click Here to change the state.";
        button.textContent = "Change State";
        button.style.backgroundColor = "#007BFF";
        button.style.color = "white";
    }
});
