// Disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable Ctrl+U (View Source) and DevTools Shortcuts
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i')) {
        event.preventDefault();
    }
    if (event.ctrlKey && (event.key === 'c' || event.key === 'C')) {
        event.preventDefault();
    }
});

// Disable Text Selection
document.addEventListener('selectstart', event => event.preventDefault());

// Detect DevTools Open
setInterval(function() {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        document.body.innerHTML = '';
    }
}, 1000);

// Obfuscation Example (For External HTML Loading)
function loadProtectedHTML() {
    let encodedHTML = 'PGgxPkhlbGxvIFdvcmxkPC9oMT4='; // Base64 Encoded HTML (Example)
    document.body.innerHTML = atob(encodedHTML);
}

// Call this function if you want to load HTML dynamically
// loadProtectedHTML();
