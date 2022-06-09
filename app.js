const heroHeading = document.querySelector('.hero-heading');

const windowSize = window.matchMedia('(max-width:425px)');
function changeHeroHeadingText(windowSize) {
    if (windowSize.matches) {
        heroHeading.innerHTML = 'Abhishek 👇 <span class="profession break">Web Developer</span>';
    } else {
        heroHeading.innerHTML = 'Abhishek → <span class="profession">Web Developer</span>';
    }
}
windowSize.addListener(changeHeroHeadingText);
changeHeroHeadingText(windowSize);

// Toggle Button
const toggleBtn = document.querySelector('.toggle-button');
const navBarLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click',  () => {
    navBarLinks.classList.toggle('nav-links-active');
});