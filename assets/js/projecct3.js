

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu,.header').toggleClass('active');
    });
  });
$(document).ready(function() {
    $('#firstSectionSliderButton, #download').click(function(event) {
      $('.os__section').addClass('active');
      $('html').css('overflow', 'hidden');
      window.scrollTo(0, 0);
    });
    $('#arrow').click(function(event) {
      $('.os__section').removeClass('active');
      $('html').css('overflow', 'auto');
    });
  });
// Выбор ОС
  $(document).ready(function() {
      $('#download').click(function(event) {
        $('.os__section').addClass('active');
        $('html').css('overflow', 'hidden');
        window.scrollTo(0, 0);
      });
      $('#arrow').click(function(event) {
        $('.os__section').removeClass('active');
        $('html').css('overflow', 'auto');
      });
    });
// Вход
  $(document).ready(function() {
      $('#start, #button, #inBrowser').click(function(event) {
        $('.sign__section').addClass('active');
        $('html').css('overflow', 'hidden');
        window.scrollTo(0, 0);
      });
      $('#arrow2').click(function(event) {
        $('.sign__section').removeClass('active');
        $('html').css('overflow', 'auto');
      });
    });
// Регестрация
  $(document).ready(function() {
      $('#regestration').click(function(event) {
        $('.reg__section').addClass('active');
        $('.sign__section').removeClass('active');
        $('html').css('overflow', 'hidden');
        window.scrollTo(0, 0);
      });
      $('#arrow3, #enter2').click(function(event) {
        $('.reg__section').removeClass('active');
        $('.sign__section').addClass('active');
      });
    });
// Подтверждение
  $(document).ready(function() {
      $('#regButton').click(function(event) {
        $('.confirmation__section').addClass('active');
        $('.reg__section').removeClass('active');
      });
      $('#arrow4, #enter2').click(function(event) {
        $('.confirmation__section').removeClass('active');
        $('.sign__section').addClass('active');
      });
    });
// Тарифы
  $(document).ready(function() {
      $('#signButton').click(function(event) {
        $('.subscription__section').addClass('active');
        $('.sign__section').removeClass('active');
      });
      $('#arrow5, #subsButton').click(function(event) {
        $('.subscription__section').removeClass('active');
        $('html').css('overflow', 'auto');
      });
    });


    const swiper = new Swiper('.swiper', {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1000,
      effect: 'fade',
    });
