import { domModule } from "./index";
import largeMenuImage from "./ali-nafezarefi-IaJKIBONv_o-unsplash.jpg"

const menuPageGen = () => {
  if (document.querySelector('.content_wrap')) {
    let removeEle = document.querySelector('.content_wrap');
    removeEle.remove();
  }

  const mainContent = document.querySelector('#content');

  const contentWrapEle = domModule.createEle('div');
  domModule.setEleAtribute('class', 'content_wrap', contentWrapEle);
  mainContent.appendChild(contentWrapEle);


  const menuWrap = domModule.createEle('div');
  domModule.setEleAtribute('class', 'menu_wrap', menuWrap);
  contentWrapEle.appendChild(menuWrap);

  for (let i = 0; i < 3; i++){
    let menuEle = domModule.createEle('div');
    const menuNameArr = ["large_menu_item", "other_items", "menu_selection"];
    domModule.setEleAtribute('class', menuNameArr[i], menuEle);

    menuWrap.appendChild(menuEle);
  }

  const largeMenuEle = document.querySelector(".large_menu_item");

  const lrgmenuImg = domModule.createEle('img');
  domModule.setEleAtribute('src', largeMenuImage, lrgmenuImg);
  largeMenuEle.appendChild(lrgmenuImg);

  const menuDetailsEle = domModule.createEle('div');
  domModule.setEleAtribute('class', "menu_details", menuDetailsEle);
  largeMenuEle.appendChild(menuDetailsEle);

  const dishNameEle = domModule.createEle('div');
  domModule.setEleAtribute('class', 'dish_name', dishNameEle);
  dishNameEle.textContent = "Spaghetti and Meatballs";

  menuDetailsEle.appendChild(dishNameEle);

  const dishDetailEle = domModule.createEle('p')
  domModule.setEleAtribute('class','dish_details', dishDetailEle)
  dishDetailEle.textContent = 'Words about dish, then some more about it. Also a lot more words that I can\'t really think of atm, but I will fill this in later... maybe.';

  menuDetailsEle.appendChild(dishDetailEle);

  const menuPriceCalEle = domModule.createEle('div')
  domModule.setEleAtribute('class', 'menu_price_cals', menuPriceCalEle)

  for (let i = 0; i < 2; i++){
    let pEle = domModule.createEle('p')
    let pEleClass = ["price_display", "dish_calories"]
    let pEleText = ["$14.99", "Calories: 850"]

    domModule.setEleAtribute('class', pEleClass[i], pEle);
    pEle.textContent = pEleText[i];
    menuPriceCalEle.appendChild(pEle);
  }

  menuDetailsEle.appendChild(menuPriceCalEle)
}

export { menuPageGen }