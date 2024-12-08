const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 20, // Space between slides
    slidesPerView: 2, // Number of slides to show
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    breakpoints: {
    // Adjust slides per view based on screen size
    640: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 4,
    },
    },
});