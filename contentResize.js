document.getElementById("content").addEventListener('keydown', function(event) {
    if (event.target.matches('textarea[data-expandable]')) {
        // Auto-expanding textarea
        event.target.style.removeProperty('height');
        event.target.style.height = (event.target.scrollHeight + 2) + 'px';
    }
});
  
document.getElementById("content").addEventListener('input', function(event) {
    if (event.target.matches('textarea[data-expandable]')) {
        // Auto-expanding textarea
        event.target.style.removeProperty('height');
        event.target.style.height = (event.target.scrollHeight + 2) + 'px';
    }
});
  
document.getElementById("content").addEventListener('mousedown', function(event) {
    if (event.target.matches('textarea[data-expandable]')) {
        // Do this on focus, to allow textarea to animate to height...
        event.target.style.removeProperty('height');
        event.target.style.height = (event.target.scrollHeight + 2) + 'px';
    }
});
  
document.getElementById("content").addEventListener('focus', function(event) {
    if (event.target.matches('textarea[data-expandable]')) {
        // Do this on focus, to allow textarea to animate to height...
        event.target.style.removeProperty('height');
        event.target.style.height = (event.target.scrollHeight + 2) + 'px';
    }
}, true);  // Capture focus event for inner textareas

document.getElementById("content").addEventListener("input", function () {
    this.style.height = "auto";  // Reset height to auto to allow shrinking
    this.style.height = this.scrollHeight + "px";  // Adjust height to match content
});