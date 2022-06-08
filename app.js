const mainHeading = document.querySelector('.main-heading');

const windowSize = window.matchMedia('(max-width:425px)');
function changeMainHeadingText(windowSize) {
    if (windowSize.matches) {
        mainHeading.innerHTML = 'Abhishek 👇 <span class="profession break">Web Developer</span>';
    } else {
        mainHeading.innerHTML = 'Abhishek × <span class="profession">Web Developer</span>';
    }
}
windowSize.addListener(changeMainHeadingText);
changeMainHeadingText(windowSize);