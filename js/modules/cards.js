function cards() {
  // Создание классов для карточек меню

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      // аргументи - это все елементы, которые нужны для создания карточки меню в верстке
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes; //Rest оператор, который принимает другие аргументы что б не дублировать
      this.parent = document.querySelector(parentSelector);
      // это родитель куда будет пушиться динамическая карточка меню
      this.transfer = 40;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = ".menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
      <div class="menu__item">
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>
      `;
      this.parent.append(element);
      // Динамически добавляем елемент в верстку
    }
  }
  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, alting, title, descr, price }) => {
      new MenuCard(
        img,
        alting,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });

  async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }
}

module.exports = cards;
