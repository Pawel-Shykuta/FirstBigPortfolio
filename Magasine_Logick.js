let elements = document.getElementsByClassName('Mag');

// Проходим по всем выбранным элементам
for (let i = 0; i < elements.length; i++) {
    // Устанавливаем значение прозрачности
    elements[i].style.opacity = 1; // 1 означает полностью непрозрачный, 0 - полностью прозрачный
}


document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.container').classList.toggle('open');
});






let slideIndex = 0;
let visibleSlides = getVisibleSlides();
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;

    if (slideIndex >= totalSlides - visibleSlides + 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - visibleSlides;
    }

    const offset = -slideIndex * 100 / visibleSlides;
    const slideWidth = 100 / visibleSlides;
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateX(${offset}%)`;
        slides[i].style.minWidth = `${slideWidth}%`;
    }
}

function getVisibleSlides() {
    if (window.innerWidth <= 768) {
        return 1; // для телефонов
    } else if (window.innerWidth <= 1024) {
        return 2; // для планшетов
    } else {
        return 3; // для ПК
    }
}

window.addEventListener('resize', () => {
    visibleSlides = getVisibleSlides();
    showSlides();
});



