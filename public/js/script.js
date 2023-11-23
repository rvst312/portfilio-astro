// Gradient follow this cursor
window.addEventListener('mousemove', function (e) {
  let divSeguidor = this.document.getElementById('divSeguidor');
  divSeguidor.style.left = e.pageX + 'px';
  divSeguidor.style.top = e.pageY + 'px';
});

// Pagination
const sec_one = document.getElementById('section-one');
const sec_two = document.getElementById('section-two');
const sec_three = document.getElementById('section-three');
const sec_four = document.getElementById('section-four');

const span_one = document.getElementById('span_one');
const span_two = document.getElementById('span_two');
const span_three = document.getElementById('span_three');
const span_four = document.getElementById('span_four');

const marcator = document.getElementById('marcator');
const logo = document.getElementById('logo-text');
const pagination = document.querySelector('.pagination');

// functions run code change position of pagination
const DetectVpTwo = (entries) => {
  entries.forEach((entrie) => {
    // check entrie return True
    if (entrie.isIntersecting) {
      // conditions where 'target' change styles

      if (entrie.target === sec_one) {
        //span 1
        span_two.classList.remove('active');
        span_three.classList.remove('active');
        span_four.classList.remove('active');
        marcator.innerHTML = '01';
        span_one.classList.add('active');
      }

      else if (entrie.target === sec_two) {
        //span 2
        span_one.classList.remove('active');
        span_three.classList.remove('active');
        span_four.classList.remove('active');
        marcator.innerHTML = '02';
        span_two.classList.add('active');
      }
      else if (entrie.target === sec_three) {
        //span 3
        span_one.classList.remove('active');
        span_two.classList.remove('active');
        span_four.classList.remove('active');
        marcator.innerHTML = '03';
        span_three.classList.add('active');
      }
      else if (entrie.target === sec_four) {
        //span 4
        span_one.classList.remove('active');
        span_two.classList.remove('active');
        span_three.classList.remove('active');
        marcator.innerHTML = '04';
        span_four.classList.add('active');
      }
    }
  });
}
// create observer
const observer = new IntersectionObserver(DetectVpTwo, {
  root: null, // reference viewport
  rootMargin: '0px 0px 0px 0px', // margin positive or negative detected
  threshold: .6 // % element in viewport for run observer
});

// we tell you that you have to observe
observer.observe(sec_one);
observer.observe(sec_two);
observer.observe(sec_three);
observer.observe(sec_four);


// slider works
//const prev_buttom = document.getElementById('previus');
//const next_button = document.getElementById('next');
//let currentImageIndex = 0;
//
//// In this array contain images what iterate in this slider
//let images_slider = [
//  '/img/Screenshot\ 2023-07-31\ at\ 23.15.27.png',
//  '/img/image-2.png',
//  '/img/profile-photo.png'
//];
//
//next_button.addEventListener('click', () => {
//  const current_image = document.getElementsByClassName('current-image')[0];
//  current_image.style.backgroundImage = `url("${images_slider[currentImageIndex]}")`;
//
//  currentImageIndex = (currentImageIndex + 1) % images_slider.length;
//});





