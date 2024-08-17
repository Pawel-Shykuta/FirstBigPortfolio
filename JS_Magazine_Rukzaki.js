

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