var btnContact = document.querySelector('.icon-contact');
var closeItens = document.querySelectorAll('.close-itens')

// Sumir preLoader enquanto carrega a página.
window.addEventListener('load', function () {
    var preLoader = document.querySelector('.preloader');
    preLoader.classList.add('opacity-auto')

    setTimeout(function () {
        preLoader.style.display = 'none'
    }, 2000)
})

// Aparecer e sumir com a box de contato quando clicar no icone.
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.box-contact');
    boxContact.classList.toggle('is-open');
    this.classList.toggle('icon-contact-move')
});

//Aparecer e fechar com modal e overlay ao clicar, e add anim.
for(var i = 0; i < closeItens.length; i++){
    closeItens[i].addEventListener('click', function(){
        var overlay = document.querySelector('.overlay')
        var modal = document.querySelector('.modal')

        overlay.classList.toggle('is-open')
        modal.classList.toggle('is-open')
        modal.classList.toggle('animation-modal')
    })
}


