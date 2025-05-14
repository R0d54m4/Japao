document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const voltarBtn = document.getElementById("voltar");
  const audio = document.getElementById("musica");

  // Toggle menu
  if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("active");
      menu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em qualquer link
    document.querySelectorAll(".menu a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggleButton.classList.remove("active");
      });
    });
  }

  // Botão "voltar ao topo"
  if (voltarBtn) {
    voltarBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Função tocar música (ícone)
  window.tocarMusica = () => {
    if (audio) audio.play();
  };
});
