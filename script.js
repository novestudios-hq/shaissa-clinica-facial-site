(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      navigation.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
      const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(willOpen));
      menuButton.setAttribute('aria-label', willOpen ? 'Cerrar menú' : 'Abrir menú');
      navigation.classList.toggle('is-open', willOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
