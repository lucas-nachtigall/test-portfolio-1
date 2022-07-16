//carousel

const simpleCarousels = document.querySelectorAll(".container");

for (var i = 0; i < simpleCarousels.length; i++) {
  new Glider(simpleCarousels[i], {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: `#back${i}`,
      next: `#go${i}`,
    },
    scrollLock: true,
    rewind: true,
  });
}

// click-table

// const messages = document.querySelectorAll(".container-message");

// for (var m = 0; m < messages.length; m++) {
//   function tableClick(mensagem) { 
//     const messageX = document.querySelector(`#message${m}`);
//     const message = messages[m];

//     message.textContent = mensagem;
//   }
// }

const message = document.querySelector("#message0");

function tableClick(mensagem) {
  message.textContent = mensagem;
}

tableClick(message);



// passar mouse por cima
