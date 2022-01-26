const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll('.nav__link');

/* Toggle Hamburger Icon */
navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open');
})

/* Close navbar when clicking on links (Here we removed the nav-open class itself so that navbar get translate(100%) again */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
