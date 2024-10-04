document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Clear the form
});
