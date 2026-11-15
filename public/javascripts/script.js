// Waits first until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const feedbackBox = document.getElementById('formFeedback');

  // Checks if the contacted form exists on the current page
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Prevents page reload on form submission
      e.preventDefault();

      // Reads the user's name and display a confirmation alert
      const name = document.getElementById('fullName').value;
      feedbackBox.textContent = 'Thank you, ' + name + '! Your message has been received.';
      feedbackBox.classList.remove('d-none');

      // Clears the input fields after submitting
      contactForm.reset();
    });
  }
});