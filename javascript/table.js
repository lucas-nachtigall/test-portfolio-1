const messages = [
  "Diversas Landing Pages feitas durante o curso #TeuFuturo e Web design (Udemy)",
  "Estilizei as Landing Pages, e fiz cursos de CSS na Udemy, Alura e DIO",
  "Fiz o projeto Galleria durante o curso de Sass do Matheus Battisti e esse Site aqui",
  "Pratiquei lógica com os cursos da Alura, participei de um hackaton do curso #TeuFuturo e fiz alguns sites usando essa Linguagem",
  "Fiz o projeto Hamburgueria durante o curso de Vue.js do Matheus Battisti e estou criando um projeto com o framework",
  "Uso para o versionamento de códigos dos meus projetos",
  "Faço a prototipação de meus projetos com o Figma",
];

//table button

function tableClick(i) {
  let theMessage = document.querySelector(`#message${i}`);
  let btnMostrarMenos = document.querySelector(`#btnMostrarMenos${i}`);
  let messagesI = messages[i];
  theMessage.textContent = messagesI;

  if (theMessage.style.display === "none") {
    theMessage.style.display = "inline";
    btnMostrarMenos.innerHTML = "Mostrar Menos";
  } else {
    theMessage.style.display = "none";
    btnMostrarMenos.innerHTML = "Clique";
  }
}
