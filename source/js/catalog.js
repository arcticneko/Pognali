'use strict';

document.querySelectorAll(`.filter__title`).forEach((elem) => {
  const hobby = document.querySelector(`#hobby-box`);
  const music = document.querySelector(`#music-box`);
  const food = document.querySelector(`#food-box`);
  const transport = document.querySelector(`#transport-box`);
  const lvlRange = document.querySelector(`#lvl-range`);
  const lvlRangeControls = document.querySelector(`#lvl-range-controls`);

  elem.addEventListener(`click`, (evt) => {
    switch (evt.target.innerText) {
      case `ХОББИ`:
        hobby.classList.contains(`filter__item-filter-list--open`) ?
        hobby.classList.remove(`filter__item-filter-list--open`) : hobby.classList.add(`filter__item-filter-list--open`)
      break
      case `МУЗЫКА`:
        music.classList.contains(`filter__item-filter-list--open`) ?
        music.classList.remove(`filter__item-filter-list--open`) : music.classList.add(`filter__item-filter-list--open`)
      break
      case `ЕДА`:
        food.classList.contains(`filter__item-filter-list--open`) ?
        food.classList.remove(`filter__item-filter-list--open`) : food.classList.add(`filter__item-filter-list--open`)
      break
      case `ТРАНСПОРТ`:
        transport.classList.contains(`filter__item-filter-list-transport--open`) ?
        transport.classList.remove(`filter__item-filter-list-transport--open`) : transport.classList.add(`filter__item-filter-list-transport--open`)
      break
      case `ЛЕВЕЛ`:
        lvlRange.classList.contains(`filter__lvl-range-wrapper--open`) ?
        lvlRange.classList.remove(`filter__lvl-range-wrapper--open`) : lvlRange.classList.add(`filter__lvl-range-wrapper--open`)

        lvlRangeControls.classList.contains(`filter__lvl-range-controls--open`) ?
        lvlRangeControls.classList.remove(`filter__lvl-range-controls--open`) : lvlRangeControls.classList.add(`filter__lvl-range-controls--open`)
      break
    }
  })
})
