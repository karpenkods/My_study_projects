$(document).ready(function() {
$('.header__container-burger').click(function() {
        $('.header__container-burger').toggleClass('open-menu');
        $('.header__list-top').toggleClass('open-menu');
    });
});

$(document).ready(function() {
    $('.header__search-mobile').click(function() {
            $('.header__search-mobile').toggleClass('open-menu');
            $('.header__search-box').toggleClass('open-menu');
            $('.header__logo').toggleClass('open-menu');
            $('.burger-close').toggleClass('close');
            $('.search__input').on('click', function() {
                return false;
            });
            $('.search__icon').on('click', function() {
                return true;
            });
        });
    });
    
