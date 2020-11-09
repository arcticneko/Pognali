'use strict';

let mainHeader = document.querySelector(`.page-header`);

document.querySelector(`.page-header__toggle`).addEventListener(`click`, () => {
  document.querySelector(`.page-header--opened`) ? mainHeader.classList.remove(`page-header--opened`) : mainHeader.classList.add(`page-header--opened`)
})

if (document.querySelector(`.tariff__business-button-open`)) {
  document.querySelector(`.tariff__business-button-open`).addEventListener(`click`, () => {
    if (document.querySelector(`.tariff__business--closed`)) {
      document.querySelector(`.tariff__business`).classList.remove(`tariff__business--closed`);
    }
  })

  document.querySelector(`.tariff__business-button-close`).addEventListener(`click`, () => {
    if (!document.querySelector(`.tariff__business--closed`)) {
      document.querySelector(`.tariff__business`).classList.add(`tariff__business--closed`);
    }
  })
}

document.addEventListener(`scroll`, () => {
  if (document.documentElement.scrollTop > 300 && window.innerWidth > 1430) {
    mainHeader.classList.add(`page-header--opened`)
  } else if (document.documentElement.scrollTop <= 300 && window.innerWidth > 1430) {
    mainHeader.classList.remove(`page-header--opened`)
  }
})
