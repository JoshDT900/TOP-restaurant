import { domModule } from "./index";
import spaghettiImg from "./ali-nafezarefi-IaJKIBONv_o-unsplash.jpg"
import brownieImg from "./cindy-fernandez--xQSnYEzUVQ-unsplash.jpg"
import pizzaImg from "./miha-rekar-kWEkH7j3KNI-unsplash.jpg"

const menuItemObj = [  
  {
    name: 'Spaghetti and Meatballs',
    description: "A lucious blend of meat, noodies, and sssauuucee. Put it in your mouth and feel the pleasure wash over you.",
    price: "$14.99",
    calories: "850",
    image: spaghettiImg,
  },
  {
    name: 'Brownies',
    description: "Chocolaty, fudgy goodness. Server hot and fresh with a side of Ice Cream. YUM! PUT IT IN MY MOUTH!",
    price: "$9.99",
    calories: "1150",
    image: brownieImg,
  },
  {
    name: 'Classic Margherita Pizza',
    description: "Ayyy, it's fookin Pizza. Ya slice it and eat it, ayyyyyyy.",
    price: "$21.99",
    calories: "1450",
    image: pizzaImg,
  }  
]
  

const largeMenuGen = () => {
  if (document.querySelector('.content_wrap')) {
    let removeEle = document.querySelector('.content_wrap');
    removeEle.remove()
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
  domModule.setEleAtribute('src', menuItemObj[0].image, lrgmenuImg);
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
  dishDetailEle.textContent = menuItemObj[0].description;
  
  menuDetailsEle.appendChild(dishDetailEle);
  
  const menuPriceCalEle = domModule.createEle('div')
  domModule.setEleAtribute('class', 'menu_price_cals', menuPriceCalEle)
  
  for (let i = 0; i < 2; i++){
    let pEle = domModule.createEle('p')
    let pEleClass = ["price_display", "dish_calories"]
    let pEleText = [`Price: ${menuItemObj[0].price}`, `Total Calories: ${menuItemObj[0].calories}`]
    
    domModule.setEleAtribute('class', pEleClass[i], pEle);
    pEle.textContent = pEleText[i];
    menuPriceCalEle.appendChild(pEle);
  }
  
  menuDetailsEle.appendChild(menuPriceCalEle)

  return
}

const menuSelection = () => {
  const menuTitle = document.querySelector(".other_items")

  const menuTitleEle = domModule.createEle('p')
  menuTitleEle.textContent = "Menu Selection"
  menuTitle.appendChild(menuTitleEle)

  const menuSelection = document.querySelector(".menu_selection")

  for (let i = 0; i < menuItemObj.length; i++){
    let imgEle = domModule.addImage(menuItemObj[i].image, `menuItem${i+1}`)
    
    imgEle.addEventListener('click', () => {menuSwap(i)})
    menuSelection.appendChild(imgEle);
  }
}

const menuSwap = (i) => {
  const swapImg = document.querySelector(".large_menu_item").firstChild;
  domModule.setEleAtribute('src', menuItemObj[i].image, swapImg)
  
  const eleArraySelctors = ["dish_name", "dish_details", "price_display", "dish_calories"]
  for (let k = 0; k < eleArraySelctors.length; k++){
    let replaceText = document.querySelector(`.${eleArraySelctors[k]}`);

    if (eleArraySelctors[k] === "dish_name"){
      replaceText.textContent = menuItemObj[i].name;
    } else if (eleArraySelctors[k] === "dish_details"){
      replaceText.textContent = menuItemObj[i].description;
    } else if (eleArraySelctors[k] === "price_display") {
      replaceText.textContent = `Price: ${menuItemObj[i].price}`;
    } else if (eleArraySelctors[k] === "dish_calories"){
      replaceText.textContent = `Total Calories: ${menuItemObj[i].calories}`;
    }
  }
  return console.log('works?');
}


const menuPageGen = () => {

  largeMenuGen();
  menuSelection();
  return
}

export { menuPageGen }