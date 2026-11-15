document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const feedbackBox = document.getElementById('formFeedback');

// handle contact form submit
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('fullName').value;
      feedbackBox.textContent = 'Thank you, ' + name + '! Your message has been received.';
      feedbackBox.classList.remove('d-none');
      contactForm.reset();
    });
  }
});