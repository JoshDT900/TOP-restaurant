import pageLogo from "./pngwing.com.png";
import './style.css';
import { homePageGen } from "./homePage";
import { menuPageGen } from "./menuPage";
import { contactPageGen } from "./contactPage";

const domModule = (() => {
  const createEle = function(eleName) {return document.createElement(eleName)};

  const setEleAtribute = (atr, atrName, elementVar) => {    
    return elementVar.setAttribute(atr, atrName);
  };

  const addImage = (source, className) => {
    const imgElement = domModule.createEle('div');
    domModule.setEleAtribute('class', className, imgElement);
    
    const myLogo = new Image();
    myLogo.src = source;
    
    imgElement.appendChild(myLogo);
    
    return imgElement;
  };

  const genElement = function() {
    const argArr = [...arguments];

    const newEle = createEle(argArr[0]);
    if (argArr.length > 1) {
      setEleAtribute(argArr[1], argArr[2], newEle)
    }

    return newEle;
  }
  
  return { setEleAtribute, addImage, createEle, genElement } 
})();

const mainPage = () => {
  const contentEle = domModule.createEle('div');
  domModule.setEleAtribute('id', 'content', contentEle)
  document.body.appendChild(contentEle);

  const navEle = domModule.createEle('nav');
  domModule.setEleAtribute('class', 'nav_wrap', navEle)
  contentEle.appendChild(navEle)
  navEle.appendChild(domModule.addImage(pageLogo, "logo_container"))

  const navBtns = domModule.createEle('div');
  domModule.setEleAtribute('class', "btn_wrapper", navBtns)
  navEle.appendChild(navBtns)

  for (let i = 0; i < 3; i++){
    let divEle = domModule.createEle('div');
    domModule.setEleAtribute("class", "item_container", divEle)

    let btnEleNames = ['Home', 'Menu', 'Contact']
    let btnFuncs = [homePageGen, menuPageGen, contactPageGen]
    let btnEle = domModule.createEle('button');
    domModule.setEleAtribute("class", `nav_btn`, btnEle)

    btnEle.addEventListener('click', btnFuncs[i])    
    btnEle.textContent = btnEleNames[i];

    divEle.appendChild(btnEle);    
    navBtns.appendChild(divEle)
  }

  return
}

mainPage()
contactPageGen();

export { domModule };