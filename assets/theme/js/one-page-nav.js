/**
 * Sistema de Navegação One Page
 * PATRULHA AVANÇADA - Segurança & Proteção Armada
 */

document.addEventListener('DOMContentLoaded', function () {

  // Elementos do menu
  const menuItems = document.querySelectorAll('.navbar-nav .nav__item-link');
  const sections = document.querySelectorAll('section[id]');

  // Configurações
  const scrollOffset = 80; // Offset para compensar o header fixo

  /**
   * Função para scroll suave para uma seção
   */
  function smoothScrollTo(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const targetPosition = targetSection.offsetTop - scrollOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
 * Função para atualizar o menu ativo baseado na posição do scroll
 */
  function updateActiveMenu() {
    const scrollPosition = window.scrollY + scrollOffset + 100;
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Mostra/oculta o botão scrollTopBtn baseado na posição do scroll
    if (scrollTopBtn) {
      if (window.scrollY > 0) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    }

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove classe active de todos os itens do menu
        menuItems.forEach(item => item.classList.remove('active'));

        // Adiciona classe active ao item correspondente
        const activeMenuItem = document.querySelector(`.navbar-nav .nav__item-link[href="#${sectionId}"]`);
        if (activeMenuItem) {
          activeMenuItem.classList.add('active');
        }
      }
    });
  }



  /**
   * Event listeners para os itens do menu
   */
  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      smoothScrollTo(targetId);

      // Fecha o menu mobile se estiver aberto
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.click();
      }
    });
  });



  /**
   * Event listeners para scroll
   */
  window.addEventListener('scroll', function () {
    updateActiveMenu();
  });

  /**
   * Event listener para links internos (âncoras)
   */
  document.addEventListener('click', function (e) {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    }
  });

  /**
 * Inicialização
 */
  function init() {
    // Define a primeira seção como ativa por padrão
    if (menuItems.length > 0) {
      menuItems[0].classList.add('active');
    }

    // Esconde o botão scrollTopBtn inicialmente
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      scrollTopBtn.style.display = 'none';
    }
  }

  // Inicializa o sistema
  init();

  // Log de inicialização
  console.log('🚀 Sistema de Navegação One Page inicializado com sucesso!');
  console.log('📍 Seções encontradas:', sections.length);
  console.log('🔗 Itens do menu:', menuItems.length);
});

/**
 * Função para scroll programático (pode ser chamada externamente)
 */
window.scrollToSection = function (sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    const targetPosition = targetSection.offsetTop - 80;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Função para obter a seção atual
 */
window.getCurrentSection = function () {
  const scrollPosition = window.scrollY + 180;

  for (let section of document.querySelectorAll('section[id]')) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      return section.getAttribute('id');
    }
  }

  return 'home';
}; 
