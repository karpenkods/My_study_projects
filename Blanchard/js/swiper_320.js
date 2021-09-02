const slider = document.querySelector('#slider4');

let mobileSlider = function () {
  if (window.innerWidth <= 767) {
    mySwiper4 = new Swiper('#slider4', {
      slidesPerView: 1,
      spaceBetween: 15,
      sliderClass: 'card__slider4',
      
      pagination: {
        el: '.pagination4.swiper-pagination',
        clickable: true,
      },
    
      on: {
        init: function () {
          if (window.innerWidth > 767) {
            slider.dataset.mobile == 'false'
            if (slider.classList.contains('swiper-container-initialized')) {
              mySwiper4.destroy();
            }
          }
        },
      },
    });

    slider.dataset.mobile = 'true';
  }
};

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});