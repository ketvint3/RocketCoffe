const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.style.right = "0"; // Move o modal para a esquerda para torná-lo visível
});

closeModalBtn.addEventListener("click", () => {
  modal.style.right = "-100%"; // Move o modal de volta para a direita para escondê-lo
});
