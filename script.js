window.onload = function() {

  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');
  const navigasi = document.querySelector('.navigasi');
  const mobile_active = document.querySelector('.mobile-nav.is-active');

  menu_btn.addEventListener('click', function() {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
      navigasi.classList.toggle('is-active');

  });

  

}
