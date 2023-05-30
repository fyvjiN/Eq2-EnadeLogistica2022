// Definição da classe MobileNavbar
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu); // Seleciona o elemento do menu móvel
    this.navList = document.querySelector(navList); // Seleciona a lista de navegação
    this.navLinks = document.querySelectorAll(navLinks); // Seleciona os links de navegação
    this.activeClass = "active"; // Classe CSS para ativar o menu

    this.handleClick = this.handleClick.bind(this); // Associa o método handleClick à instância da classe
  }

  // Anima os links de navegação
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  // Manipula o evento de clique no menu móvel
  handleClick() {
    this.navList.classList.toggle(this.activeClass); // Alterna a classe ativa na lista de navegação
    this.mobileMenu.classList.toggle(this.activeClass); // Alterna a classe ativa no menu móvel
    this.animateLinks(); // Anima os links de navegação
  }

  // Adiciona o evento de clique ao menu móvel
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // Inicializa a classe
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

// Instância da classe MobileNavbar
const mobileNavbar = new MobileNavbar(
  ".mobile-menu", // Seletor do menu móvel
  ".nav-list", // Seletor da lista de navegação
  ".nav-list li" // Seletor dos links de navegação
);
mobileNavbar.init(); // Inicializa a classe
