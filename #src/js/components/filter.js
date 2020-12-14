const item = $('.filter__item');
const items = $('.filter__items');
const showBtn = $('#filterAll');
const resetBtn = $('.filter__reset');


mediaQuerySmMax = window.matchMedia('(max-width: 575px)');
mediaQuerySmMax.addListener(handleTabletChange);
function handleTabletChange(e) {
    if (e.matches) {
        let itemHeight = $('.filter__item').innerHeight();
        items.css({ "max-height": itemHeight * 4 });

        $(window).resize(function () {
            let itemHeight = $('.filter__item').innerHeight();
            items.css({ "max-height": itemHeight * 4 });
        });

        showBtn.click(function (e) {
            e.preventDefault();
            $(this).toggleClass('_active');
            if (!items.hasClass('_show')) {
                items.animate({ "max-height": "1000px" });
            } else {
                items.animate({ "max-height": itemHeight * 4 });
            }
            items.toggleClass('_show');
        });
    }
    else {
        let itemHeight = $('.filter__item').innerHeight();
        items.css({ "max-height": itemHeight * 2 });

        $(window).resize(function () {
            let itemHeight = $('.filter__item').innerHeight();
            items.css({ "max-height": itemHeight * 2 })
        });

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
    }
}

if (mediaQuerySmMax.matches) {
    let itemHeight = $('.filter__item').innerHeight();
    items.css({ "max-height": itemHeight * 4 });

    showBtn.click(function (e) {
        e.preventDefault();
        $(this).toggleClass('_active');
        if (!items.hasClass('_show')) {
            items.animate({ "max-height": "1000px" });
        } else {
            items.animate({ "max-height": itemHeight * 4 });
        }
        items.toggleClass('_show');
    });
} else {
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
}


item.click(function (e) {
    e.preventDefault();
    $(this).toggleClass('_active');
    $($(this).attr('href')).slideToggle(300);
});

resetBtn.click(function (e) {
    e.preventDefault();
    item.removeClass('_active');
    $('.service-page__item').slideUp(300);
});



