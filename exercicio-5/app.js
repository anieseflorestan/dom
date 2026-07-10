const lista = document.querySelector("#lista");

const linguagens = ["HTML", "CSS", "JavaScript", "Bootstrap"];

linguagens.forEach((linguagem) => {
  const item = document.createElement("li");
  item.textContent = linguagem;
  lista.appendChild(item);
});
