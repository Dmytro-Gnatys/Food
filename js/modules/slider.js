function slider() {
  // Slider

  const slides = document.querySelectorAll(".offer__slide"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    total = document.querySelector("#total"),
    current = document.querySelector("#current");

  let slideIndex = 1; // индекс слайда в виде цифры

  showSlides(slideIndex); // запускаем функцию для начала работы слайдера

  if (slides.length < 10) {
    // счетчик на слайды - активный слайд
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n) {
    if (n > slides.length) {
      // условия для проверки граничных значений слайдов (переключаем по кругу)
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none")); //перебираем каждый слайд и скрываем их ВСЕ

    slides[slideIndex - 1].style.display = "block"; // показываем только текущий слайд (-1 потому что изначально значение было 1)

    if (slides.length < 10) {
      // общий счетчик на слайды
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides((slideIndex += n)); // переключение слайда
  }

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });

  next.addEventListener("click", () => {
    plusSlides(1);
  });
}
module.exports = slider;
