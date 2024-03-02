class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll("#sub-mobile");
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

// Função que será aplicada ao clicar
function menuMobile() {
  // O 'this' dentro da função representa o elemento clicado
  var subMenu = this.querySelector(".sub-menu");

  // Oculta todos os elementos .sub-menu
  document.querySelectorAll(".sub-menu").forEach(function(menu) {
    menu.style.display = "none";
  });

  // Exibe o .sub-menu do elemento clicado
  subMenu.style.display = "block";
  // Adicione mais estilizações conforme necessário
}

// Obtém todos os elementos com IDs específicos
var elementos = document.querySelectorAll("#sub-mobile");

// Adiciona o evento de clique a cada elemento
elementos.forEach(function(elemento) {
  elemento.addEventListener('click', menuMobile);
});

