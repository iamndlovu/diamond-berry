function toggleSlides() {
  let next = document.querySelector('.slide.next'),
      prev = document.querySelector('.slide.prev'),
      showing = document.querySelector('.slide.show');
    next.classList.remove('next');
    next.classList.add('show');
    showing.classList.remove('show');
    showing.classList.add('prev');
    prev.classList.remove('prev');
    prev.classList.add('next');
}

let toggle = setInterval(toggleSlides, 6000);