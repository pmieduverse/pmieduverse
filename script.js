document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received.`);
    document.getElementById('contact-form').reset(); // Clear form fields
});

