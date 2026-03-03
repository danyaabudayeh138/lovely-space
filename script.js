// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjust for fixed navbar height
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submission (basic)
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });
}


