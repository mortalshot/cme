$('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
})

$(".header__search input").focus(function () {
    $('.header__menu').fadeOut(300);
});

$(".header__search input").focusout(function () {
    $('.header__menu').fadeIn(300);
});