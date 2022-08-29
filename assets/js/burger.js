$(document).ready(function() {
  $('.menu__icon,.menu__icon-close,.header__menu-directions,#logo').click(function(event) {
    $('._container_h,.menu__icon,.header__menu,.header__logo,.menu__icon-close,.header__menu-directions,.header__menu-demande, .header__menu-calendrier, .header__menu-blog ,.header__menu-contacts').toggleClass('active');
    });
  });
