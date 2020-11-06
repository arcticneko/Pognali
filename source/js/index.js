'use strict';

let mainHeader = document.querySelector(`.page-header`);

document.querySelector(`.page-header__toggle`).addEventListener(`click`, function () {
  if (document.querySelector(`.page-header--opened`)) {
    mainHeader.classList.remove(`page-header--opened`);
  } else {
    mainHeader.classList.add(`page-header--opened`);
  }
})

if (document.querySelector(`.tariff__business-button-open`)) {
  document.querySelector(`.tariff__business-button-open`).addEventListener(`click`, function () {
    if (document.querySelector(`.tariff__business--closed`)) {
      document.querySelector(`.tariff__business`).classList.remove(`tariff__business--closed`);
    }
  })

  document.querySelector(`.tariff__business-button-close`).addEventListener(`click`, function () {
    if (!document.querySelector(`.tariff__business--closed`)) {
      document.querySelector(`.tariff__business`).classList.add(`tariff__business--closed`);
    }
  })
}

document.addEventListener(`scroll`, function () {
  if (document.documentElement.scrollTop > 300 && window.innerWidth > 1430) {
    mainHeader.classList.add(`page-header--opened`)
  } else if (document.documentElement.scrollTop <= 300 && window.innerWidth > 1430) {
    mainHeader.classList.remove(`page-header--opened`)
  }
})
