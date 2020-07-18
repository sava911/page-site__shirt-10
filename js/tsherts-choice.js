(function () {

  const elem = document.querySelector('.tsherts-choice__list');
const iso = new Isotope( elem, {
  itemSelector: '.tsherts-choice__item',
  filter: '.green',

});

  
  const controlls = document.querySelectorAll('.color__btn');
  const activeClass = '.color__btn--checked';

  controlls.forEach(function (control) {
    
    control.addEventListener('click', function (e) {
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");

      controlls.forEach(function (link) {
        link.closest('.color__btn').classList.remove(activeClass);
      });

      control.closest('.color__btn').classList.add(activeClass);

      iso.arrange({
        filter: `.${filterName}`
      })
    });
  });

}());