// Script simples para interações
document.addEventListener("DOMContentLoaded", () => {
  // Exemplo: Scroll suave para seções internas (opcional)
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function(e){
      const target = document.querySelector(this.getAttribute("href"));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior: "smooth"});
      }
    });
  });
});
