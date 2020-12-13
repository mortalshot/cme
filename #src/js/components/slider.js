$('.main__slider').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
});

$('.news__cards').slick({
    autoplay: false,
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: true,
                adaptiveHeight: true,
            }
        },
    ]
});

mediaQuerySmMax = window.matchMedia('(max-width: 575px)');

if (mediaQuerySmMax.matches) {
    // Ширина точек слайдера каталога
    let slidesNumber = $('.news__card').length;
    let slidesClonedNumber = $('.news__card.slick-cloned').length;
    let dotsWidth = 100 / (slidesNumber - slidesClonedNumber);
    $('.news__cards .slick-dots li').width(dotsWidth + '%');
}