
// Dinamic width 
var containerMenu = document.querySelector('.container-menu')
var containerUl = document.querySelector('.container-ul')
var containerList = document.querySelectorAll('.container-list')
var sliderListWidth = null
var btnBack = document.querySelector('#back-stage')
var btnNext = document.querySelector('#next-stage')
var sliderPos = 0

const slideTotal = containerList.length
var spanFirst = document.querySelector('.span-first')
var spanSecond = document.querySelector('.span-second')
var currentCounter = 1


// getting dynamic width of parent element (col-sm-10)
var containerWidth = containerMenu.parentElement.offsetWidth
containerMenu.style.width = containerWidth + 'px'

for (var p = 0; p < containerList.length; p++) {
    containerList[p].style.width = containerWidth + 'px'
    var sliderItemWidth = containerList[p].offsetWidth;

    sliderListWidth += sliderItemWidth
}

containerUl.style.width = sliderListWidth + 'px'

//HANDLERS
var animNext = function () {
    var lastItem = sliderListWidth - containerWidth

    // transforming 'sliderPos' in positive
    if (-1 * (sliderPos) === lastItem) {
        return;
    }

    sliderPos -= containerWidth
    anime({
        targets: containerList,
        translateX: sliderPos
    });
}

var animBack = function () {
    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth
    anime({
        targets: containerList,
        translateX: sliderPos
    });
}

//Counter Formatter
var addZero = function (n) {
    if (n < 10) {
        return '0' + n
    } else {
        return n
    }
}

//Counter add
var counterAdd = function () {
    if (currentCounter >= 0 && currentCounter < slideTotal) {
        currentCounter++
        spanFirst.innerHTML = addZero(currentCounter)
    }

}

//Counter remove
var counterRemove = function () {
    if (currentCounter > 1 && currentCounter <= slideTotal) {
        currentCounter--
        spanFirst.innerHTML = addZero(currentCounter)
    }

}


//Actions
spanSecond.innerHTML = addZero(slideTotal);


// making the animation of slider onClick  
btnNext.addEventListener('click', function () {
    animNext()
    counterAdd()
})

btnBack.addEventListener('click', function () {
    animBack()
    counterRemove()
})   