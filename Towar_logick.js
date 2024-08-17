


document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.container').classList.toggle('open');
});



var Foto = [
    "Foto_Rukzaki_Two/a9ff3b_f852b0f8d589446d9b672173e24008f9.webp",
    "Foto_Rukzaki_Two/a9ff3b_49bb6de1f97a436b8945f61122822d4a.webp"
];

var num = 0;

function next() {
    var slider = document.getElementById("sliderImage");
    num++;
    if (num >= Foto.length) {
        num = 0;
    }
    slider.src = Foto[num];
    updateDots();
}

function prew() {
    var slider = document.getElementById("sliderImage");
    num--;
    if (num < 0) {
        num = Foto.length - 1;
    }
    slider.src = Foto[num];
    updateDots();
}

function currentSlide(n) {
    var slider = document.getElementById("sliderImage");
    num = n;
    slider.src = Foto[num];
    updateDots();
}

function updateDots() {
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[num].className += " active";
}