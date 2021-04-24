const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const btnPs = document.querySelector('.btn-ps')
const btnXsx = document.querySelector('.btn-xsx')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

btnPs.addEventListener('click', ()=> {
    alert('You Dun Goofed!')
})

btnXsx.addEventListener('click', ()=> {
    alert('You made the right Choice!')
})