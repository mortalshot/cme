$('.main__slider').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 3,
    //             arrows: true,
    //         }
    //     },
    //     {
    //         breakpoint: 576,
    //         settings: {
    //             rows: 2,
    //             slidesToShow: 2,
    //             arrows: true,
    //         }
    //     },
    // ]
});

$('.news__cards').slick({
    autoplay: false,
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        // {
        //     breakpoint: 768,
        //     settings: {
        //         slidesToShow: 3,
        //         arrows: true,
        //     }
        // },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: true,
            }
        },
    ]
});