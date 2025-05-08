function ajustarOrientacaoMenu() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth <= 768) {

        menu.style.flexDirection = 'column';
    } else {
    
        menu.style.flexDirection = 'row';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.querySelector("#meuElemento");
    if (elemento) {
        elemento.addEventListener("click", function() {
            console.log("Elemento clicado!");
        });
    } else {
        console.error("Elemento não encontrado.");
    }
});


window.addEventListener('resize', ajustarOrientacaoMenu);

window.addEventListener('load', ajustarOrientacaoMenu);

const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});


  // Botão de voltar ao topo

      const scrollTopBtn = document.getElementById("scrollTopBtn");
  
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollTopBtn.style.display = "block";
        } else {
          scrollTopBtn.style.display = "none";
        }
      });
  
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    