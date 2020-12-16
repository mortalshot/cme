const btn = $('.card-feedback__btn');

btn.click(function (e) {
    e.preventDefault();
    $(this).toggleClass('_active');
    if ($(this).hasClass('_active')) {
        $(this).find(".card-feedback__btn-text").text("Свернуть");
    } else {
        $(this).find(".card-feedback__btn-text").text("Читать весь отзыв");
    }

    $(this).closest('.card-feedback').find('.card-feedback__hidden').slideToggle(300);
});
