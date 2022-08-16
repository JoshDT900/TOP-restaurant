import _ from "lodash";
import pageLogo from "./pngwing.com.png";
import './style.css';

const domModule = (() => {
  const divEle = function() {return document.createElement('div')};
  const navEle = function() {return document.createElement('nav')};
  const pEle = function () {return document.createElement('p')};

  const setEleAtribute = (atr, atrName, elementVar) => {    
    return elementVar.setAttribute(atr, atrName)
  }

  return { setEleAtribute, divEle, navEle, pEle } 
})();

let addImage = (source, className) => {
  const imgElement = domModule.divEle();
  domModule.setEleAtribute('class', className, imgElement)

  const myLogo = new Image();
  myLogo.src = source;

  imgElement.appendChild(myLogo);

  return imgElement;
}

const mainPage = () => {
  const contentEle = domModule.divEle();
  domModule.setEleAtribute('id', 'content', contentEle)
  document.body.appendChild(contentEle);

  const navEle = domModule.navEle();
  domModule.setEleAtribute('class', 'nav_wrap', navEle)
  contentEle.appendChild(navEle)
  navEle.appendChild(addImage(pageLogo, "logo_container"))

  const navBtns = domModule.divEle();
  domModule.setEleAtribute('class', "btn_wrapper", navBtns)
  navEle.appendChild(navBtns)

  for (let i = 0; i < 3; i++){
    let divEle = domModule.divEle();
    domModule.setEleAtribute("class", "item_container", divEle)

    let pEleNames = ['Home', 'Menu', 'Contact']
    let pEle = domModule.pEle();
    domModule.setEleAtribute("class", "nav_btn", pEle)
    pEle.textContent = pEleNames[i];

    divEle.appendChild(pEle);    
    navBtns.appendChild(divEle)
  }
  return
}

mainPage()