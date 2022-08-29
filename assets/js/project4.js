$('#second-section-video').parent().click(function () {
  if($(this).children("#second-section-video").get(0).paused){
    $(this).children("#second-section-video").get(0).play();
    $(this).children("#button_pause").fadeOut();
    }else{
      $(this).children("#second-section-video").get(0).pause();
  $(this).children("#button_pause").fadeIn();
    }
});

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu,.header').toggleClass('active');
    });
  });
