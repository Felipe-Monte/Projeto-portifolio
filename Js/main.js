var btnContact = document.querySelector('.icon-contact');
var closeItens = document.querySelectorAll('.close-itens')

// force page up.
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

// fade preloader while loading the page.
window.addEventListener('load', function () {
    var preLoader = document.querySelector('.preloader');
    preLoader.classList.add('opacity-auto')

    setTimeout(function () {
        preLoader.style.display = 'none'
    }, 2000)
})

// Appear and disappear with the contact box when you click the icon.
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.box-contact');
    boxContact.classList.toggle('is-open');
    this.classList.toggle('icon-contact-move')
});

// Appear and close with modal and overlay when clicked, and add animation.
for (var i = 0; i < closeItens.length; i++) {
    closeItens[i].addEventListener('click', function () {
        var overlay = document.querySelector('.overlay')
        var modal = document.querySelector('.modal')

        overlay.classList.toggle('is-open')
        modal.classList.toggle('is-open')
        modal.classList.toggle('animation-modal')
    })
}


// Disappear with the down arrow when you scroll the page.
window.addEventListener('scroll', function () {
    var arrowDown = document.querySelector('.slide-bottom')
    if (window.scrollY > 200) {
        arrowDown.classList.add('opacity-new')
    } else {
        arrowDown.classList.remove('opacity-new')
    }

})

// Dinamic width 
var containerMenu = document.querySelector('.container-menu')
var containerUl = document.querySelector('.container-ul')
var containerList = document.querySelectorAll('.container-list')

var btnNext = document.querySelector('#back-stage')
var btnBack = document.querySelector('#next-stage')

// getting dynamic width of parent element (col-sm-10)
var containerWidth = containerMenu.parentElement.offsetWidth

containerMenu.style.width = containerWidth + 'px'

for (var p = 0; p < containerList.length; p++) {
    containerList[p].style.width = containerWidth + 'px'
}

