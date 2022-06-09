const toggleBtn = document.querySelector('.toggle-button');
const navBarLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click',  () => {
    navBarLinks.classList.toggle('nav-links-active');
});