const pageHeaderH1 = document.querySelector('.consultation-page__header h1');
const pageHeaderH3 = document.querySelector('.consultation-page__header h3');
const supporting = document.querySelector('.consultation-page__supporting');
const backArrow = document.querySelector('.back-arrow a');
const getStartedBtn = document.getElementById('getStartedBtn');

window.addEventListener('load', () => {
    setTimeout(() => {
        pageHeaderH1.style.opacity = 1
    }, 1000)
    setTimeout(() => {
        pageHeaderH3.style.opacity = 1
    }, 2000)
    setTimeout(() => {
        supporting.style.opacity = 1
    }, 3000)
});

backArrow.addEventListener('click', (event) => {
    onPageOut(event, '/')
})
getStartedBtn.addEventListener('click', (event) => {
    onPageOut(event, '/consultation/get-started')
})



function onPageOut(e, redirect) {
    e.preventDefault();
    const consultPage = document.querySelector('.consultation-page__text-container');
    consultPage.classList.add('unload-left');
    consultPage.style.opacity = 0;
    setTimeout(() => {
        window.location.replace(redirect)
    }, 300)
}