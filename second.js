// Abrir modal ao clicar no card
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const modalID = card.getAttribute("data-modal");
        document.getElementById(modalID).style.display = "block";
    });
});

// Fechar modal ao clicar no X
document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.parentElement.style.display = "none";
    });
});

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
}

// Espera o documento carregar antes de ativar os eventos
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona os botões pelo ID
    const btnHome = document.getElementById("homeBtn");

    // Quando clicar, redireciona para outra página
  btnHome.addEventListener("click", () => {
    window.location.href = "main.html";
  });
});