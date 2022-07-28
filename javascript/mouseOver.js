// mouseOver

const mouseOver = document.getElementById("macrofotografia");
const spanOver = document.querySelector("#macro-span");

mouseOver.addEventListener("mouseover", () => {
  spanOver.textContent =
    "Macrofotografia é registrar os pequenos detalhes, às vezes não perceptíveis a olho nu. ";
});
