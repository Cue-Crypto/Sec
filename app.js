// Button click behavior to change iframe source
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const url = button.getAttribute('data-url');
    document.getElementById('website-frame').src = url;
  });
});
