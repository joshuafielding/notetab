document.addEventListener("DOMContentLoaded", function () {
    // Check if there's a saved note in localStorage and load it
    const savedTitle = localStorage.getItem("noteTitle");
    const savedContent = localStorage.getItem("noteContent");

    // If saved data exists, load it into the editable fields
    if (savedTitle) {
        document.getElementById("title").innerText = savedTitle;
        document.title = savedTitle; // Update the <title> tag with saved title
    }
    if (savedContent) {
        document.getElementById("content").value = savedContent;
    }

    // Auto-save the content when the user types in the title or content
    document.getElementById("title").addEventListener("input", function () {
        autoSave();
    });

    document.getElementById("content").addEventListener("input", function () {
        autoSave();
    });

    // Auto-save function to save both title and content
    function autoSave() {
        const title = document.getElementById("title").innerText;
        const content = document.getElementById("content").value;

        // Save the data to localStorage
        localStorage.setItem("noteTitle", title);
        localStorage.setItem("noteContent", content);

        // Update the <title> element (browser tab title)
        document.title = title; // Change the <title> tag content based on the editable title
    }
});
