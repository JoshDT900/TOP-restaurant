import _ from "lodash";
import pageLogo from "./pngwing.com.png";
import './style.css';

const domModule = (() => {
  const divEle = function() {return document.createElement('div')};
  const navEle = function() {return document.createElement('nav')};

  const setEleAtribute = (atr, atrName, elementVar) => {    
    return elementVar.setAttribute(atr, atrName)
  }

  // const navElement = document.querySelector('.nav_wrap')
  // contentElement.setAttribute('id', 'content')

  
  // navEle.setAttribute('class', 'nav_wrap')
  
  // document.body.appendChild(contentElement)
  // contentElement.appendChild(newNav)


  return { setEleAtribute, divEle, navEle } 
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

  const navEle = domModule.navEle();
  domModule.setEleAtribute('class', 'nav_wrap', navEle)

  document.body.appendChild(contentEle);
  contentEle.appendChild(navEle)

  navEle.appendChild(addImage(pageLogo, "logo_container"))
  return
}

mainPage()