(function () {
  var nav = document.querySelector('.main-nav');

  if (!nav) {
    return;
  }

  var toggle = nav.querySelector('.main-nav__burger');

  nav.classList.remove('main-nav--nojs');

  var onClickToggle = function (evt) {
    evt.preventDefault();
    toggle.classList.toggle('main-nav__burger--opened');
    nav.classList.toggle('main-nav--opened');
  };

  toggle.addEventListener('click', onClickToggle);
})();
