import _ from "lodash";
import pageLogo from "./pngwing.com.png";
import './style.css';
import { homePageGen } from "./homePage";

const domModule = (() => {
  const divEle = function() {return document.createElement('div')};
  const navEle = function() {return document.createElement('nav')};
  const btnEle = function() {return document.createElement('button')};
  const imgEle = function() {return document.createElement('img')};
  const qEle = function() {return document.createElement('q')};

  const setEleAtribute = (atr, atrName, elementVar) => {    
    return elementVar.setAttribute(atr, atrName);
  };

  const addImage = (source, className) => {
    const imgElement = domModule.divEle();
    domModule.setEleAtribute('class', className, imgElement);
    
    const myLogo = new Image();
    myLogo.src = source;
    
    imgElement.appendChild(myLogo);
    
    return imgElement;
  };
  
  return { setEleAtribute, divEle, navEle, btnEle, addImage, imgEle, qEle } 
})();



const mainPage = () => {
  const contentEle = domModule.divEle();
  domModule.setEleAtribute('id', 'content', contentEle)
  document.body.appendChild(contentEle);

  const navEle = domModule.navEle();
  domModule.setEleAtribute('class', 'nav_wrap', navEle)
  contentEle.appendChild(navEle)
  navEle.appendChild(domModule.addImage(pageLogo, "logo_container"))

  const navBtns = domModule.divEle();
  domModule.setEleAtribute('class', "btn_wrapper", navBtns)
  navEle.appendChild(navBtns)

  for (let i = 0; i < 3; i++){
    let divEle = domModule.divEle();
    domModule.setEleAtribute("class", "item_container", divEle)

    let btnEleNames = ['Home', 'Menu', 'Contact']
    let btnEle = domModule.btnEle();
    domModule.setEleAtribute("class", "nav_btn", btnEle)
    btnEle.textContent = btnEleNames[i];

    divEle.appendChild(btnEle);    
    navBtns.appendChild(divEle)
  }

  return
}

mainPage()
homePageGen();

export { domModule };