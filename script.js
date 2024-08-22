// Получаем все элементы с классом 'image-description'
const elements = document.getElementsByClassName('image-description');

// Перебираем все элементы и назначаем обработчик клика
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        // Получаем текущий атрибут src
        const currentSrc = this.getAttribute('src');
        
        // Определяем новый атрибут src
        const newSrc = currentSrc === 'img/iconslike.png' ? 'img/redlike.png' : 'img/iconslike.png';
        
        // Устанавливаем новый атрибут src
        this.setAttribute('src', newSrc);
    });
}

let horizontScroll = document.querySelector('.scrol');
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

rightBtn.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft += 1274;
});

leftBtn.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollRight += 1274;
});