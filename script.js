const elements = document.getElementsByClassName('image-description');

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {

        const currentSrc = this.getAttribute('src');
        

        const newSrc = currentSrc === 'img/iconslike.png' ? 'img/redlike.png' : 'img/iconslike.png';
        

        this.setAttribute('src', newSrc);
    });
}



let horizontScroll = document.querySelector('.scrol');
let leftBtn = document.getElementById('leftButton');
let leftBtnn = document.getElementById('leftBtnn');
let rightBtn = document.getElementById('rightBtn');
let rightBut = document.getElementById('rightBut');
let leftBut = document.getElementById('leftBut');

rightBtn.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft += 1274;
});

leftBtnn.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft -= 1274;
});

leftButton.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft -= 1274;
});

leftBut.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft -= 1274;
});

rightBut.addEventListener('click', ()=> {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft += 1274;
});



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
      }
    });
  }
  let options = { threshold: [0.4] };
  let observer = new IntersectionObserver(onEntry, options);
  let elementss = document.querySelectorAll('.container');
  for (let elm of elementss) {
    observer.observe(elm);
  }

  document.getElementById('toggle-section-btn').addEventListener('click', function() {
    const section = document.getElementById('hidden-section');
    

    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        this.textContent = 'Hide Program';
    } else {
        section.classList.add('hidden');
        this.textContent = 'Load More';
    }
});
