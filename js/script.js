window.addEventListener("DOMContentLoaded", function () {
  const calc = require("./modules/calc"),
    cards = require("./modules/cards"),
    modal = require("./modules/modal"),
    slider = require("./modules/slider"),
    tabs = require("./modules/tabs"),
    timer = require("./modules/timer");

  cards();
  modal("[data-modal]", ".modal");
  slider();
  tabs();
  timer();
  calc();
});
