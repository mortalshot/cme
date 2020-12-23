$('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
})

// $(".header__search input").focus(function () {
//     $('.header__list').fadeOut(300);
//     $('.header__search').css({ 'width': '100%' });
// });

// $(".header__search input").focusout(function () {
//     $('.header__list').fadeIn(300);
//     $('.header__search').css({ 'width': '80px' });
// });

$(".header__search input").click(function() {
    $('.header__list').fadeOut(300);
    $('.header__search').addClass('active');
    $(".header__search input").css({ 'cursor': 'auto' });
});

$(".header .search__close").click(function(e) {
    e.preventDefault();
    $('.header__list').fadeIn(300);
    $('.header__search').removeClass('active');
    $(".header__search input").css({ 'cursor': 'pointer' });
});

$('.header .popup-link').click(function() {
    $('.header__burger, .header__menu').removeClass('active');
})
