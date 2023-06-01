const openMenu = document.getElementById('open-menu')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')
const mobileMenu = document.querySelector('.mobile-menu')
const fadesClass = document.querySelectorAll('.fadeClass')

mobileMenu.style.display = 'none'

console.log('Yusuf', closed)
openMenu.onclick = () => {
    if(openMenu.classList.contains('open')){ //close header menu
        openMenu.classList.remove('open')
        mobileMenu.style.display = 'none'
        body.classList.remove('no-scroll')
        document.querySelector('.navigation-manual').style.display = 'flex'
        document.querySelector('.navigation-auto').style.display = 'flex'
        fadesClass.forEach(fadeClass => {
            fadeClass.classList.remove('fade-in')
            fadeClass.classList.add('fade-out')
        })
    } else { //open header menu
        document.querySelector('.navigation-manual').style.display = 'none'
        document.querySelector('.navigation-auto').style.display = 'none'
        openMenu.classList.add('open')
        body.classList.add('no-scroll')
        fadesClass.forEach(fadeClass => {
            fadeClass.classList.remove('fade-out')
            fadeClass.classList.add('fade-in')
            fadeClass.style.display = 'block'
        })
    }
}

let counter = 1
setInterval( function(){
    document.getElementById('radio' + counter).checked = true
    counter++
    if (counter > 4) {
        counter = 1
    }
}, 3000)
