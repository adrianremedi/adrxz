// Controle do Menu Hambúrguer para telas menores
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Fecha o menu ao clicar em qualquer link
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });
});