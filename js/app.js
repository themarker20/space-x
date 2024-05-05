const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    mobileMenu.classList.toggle('show-menu')
}

function scrollPage() {
    const scrollPosition = window.scrollY;

    if(scrollPosition  > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if(scrollPosition < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            // Get Countr Data
            const target = +counter.getAttribute('data-target');

            // Get Current Value
            const c = +counter.innerText;

            // Create an Increment
            const increment = target / 100;

            // If counter is less that the target, add increment
            if (c < target) {
                // Round up and Set Value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75)
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => counter.innerHTML = '0');
}