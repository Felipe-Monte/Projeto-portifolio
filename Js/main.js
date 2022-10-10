var btnContact = document.querySelector('.icon-contact');

// Sumir preLoader enquanto carrega a página.
window.addEventListener('load', function(){
    var preLoader = document.querySelector('.preloader');
    preLoader.classList.add('opacity-auto')

    setTimeout(function(){
        preLoader.style.display = 'none'
    }, 2000)
})

// Aparecer e sumir com a box de contato quando clicar no icone.
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.box-contact');
    boxContact.classList.toggle('is-open');
    this.classList.toggle('icon-contact-move')
});