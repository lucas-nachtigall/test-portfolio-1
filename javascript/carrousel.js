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
