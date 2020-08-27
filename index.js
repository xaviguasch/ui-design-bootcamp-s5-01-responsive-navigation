const menuBtn = document.getElementById('menu-btn')
const nav = document.getElementById('nav')
const exitBtn = document.getElementById('exit-btn')

menuBtn.addEventListener('click', () => {
  nav.classList.add('open-nav')
})

exitBtn.addEventListener('click', () => {
  nav.classList.remove('open-nav')
})
