let btns = document.querySelectorAll('.home-page__btn-container a');
let homePage = document.querySelector('.home-page');
let homeBody = document.querySelector('.home-page__text-container');

window.addEventListener('load', () => {
    homeBody.classList.add('load-right');
    setTimeout(() => {
        homeBody.style.opacity = 1;
    }, 500);
})

for(const btn of btns) {
    btn.addEventListener('click', (event) => {
        const redirect = btn.getAttribute('href');
        event.preventDefault();
        homeBody.classList.add('unload-left');
        homeBody.style.opacity = 0;
        setTimeout(() => {
            window.location.replace(redirect);
        }, 300)
    })
}