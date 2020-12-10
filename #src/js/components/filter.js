const item = $('.filter__item');
const items = $('.filter__items');
const showBtn = $('#filterAll');
const resetBtn = $('.filter__reset');
let itemHeight = $('.filter__item').innerHeight();

items.css({ "max-height": itemHeight * 2 });

showBtn.click(function (e) {
    e.preventDefault();
    $(this).toggleClass('_active');
    if (!items.hasClass('_show')) {
        items.animate({ "max-height": "300px" });
    } else {
        items.animate({ "max-height": itemHeight * 2 });
    }
    items.toggleClass('_show');
});

item.click(function (e) {
    e.preventDefault();
    $(this).toggleClass('_active');
});

resetBtn.click(function (e) {
    e.preventDefault();
    $('.filter__item').removeClass('_active');
});



