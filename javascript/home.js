window.onload = function () {
  var swiper = new Swiper('.swiper-container', {
    autoplay: 3000,
    paginationClickable: true,
    loop: true,
    grabCursor: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });
};
