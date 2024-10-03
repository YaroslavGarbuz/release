anime({
    targets: '.logo',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true
 })
 
let themeToggleBtn = document.getElementById('themeToggleBtn')
let bodyElement = document.body

themeToggleBtn.addEventListener('click', function() {
  bodyElement.classList.toggle('light-theme')
})
