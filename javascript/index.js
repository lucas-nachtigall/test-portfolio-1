
//carousel

var $simpleCarousel = document.querySelector(".container");

new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: ".back",
    next: ".go",
  },
  scrollLock: true,
  rewind: true
});

// click-table

const message = document.querySelector(".message")

function tableClick() {
   alert("ainda vou arrumar isso");
}

//passar mouse por cima


