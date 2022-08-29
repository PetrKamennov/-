
VANTA.WAVES({
  el: ".first_section",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0,
  waveSpeed: 0.5
})


  window.addEventListener('wheel', function() {
    $('._container_h,.menu__icon,.header__menu,.header__logo,.menu__icon-close,.header__menu-directions,.header__menu-demande, .header__menu-calendrier, .header__menu-blog ,.header__menu-contacts').addClass('active');
  });
