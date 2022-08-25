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


}

export { menuPageGen }