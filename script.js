

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


// Event Listener
left.addEventListener('mouseenter', () => {
    container.classList.remove('hover-right');
    container.classList.add('hover-left');
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    container.classList.add('hover-right');
})
