// Espera o documento carregar antes de ativar os eventos
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona os botões pelo ID
    const btnMasculina = document.getElementById("btnMasc");
    const btnFeminina = document.getElementById("btn-Fem");

    // Quando clicar, redireciona para outra página
  btnMasc.addEventListener("click", () => {
    window.location.href = "masc.html";
  });

   btnFem.addEventListener("click", () => {
    window.location.href = "fem.html"; 
  });
});