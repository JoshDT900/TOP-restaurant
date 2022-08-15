import _ from "lodash";
import pageLogo from "./pngwing.com.png";
import './style.css';

(() => {
  const contentElement = document.createElement('div')
  contentElement.setAttribute('id', 'content')

  document.body.appendChild(contentElement)

  const navElement = document.createElement('nav')
  navElement.setAttribute('class', 'nav_wrap')

  contentElement.appendChild(navElement)
})();

const mainElement = document.querySelector('#content')
const navElement = document.querySelector('.nav_wrap')

let addImage = (source, className) => {
  const imgElement = document.createElement('div');
  imgElement.setAttribute('class', className)

  const myLogo = new Image();
  myLogo.src = source;

  imgElement.appendChild(myLogo);

  return imgElement;
}

navElement.appendChild(addImage(pageLogo, 'logo_container'));


// contentElement.appendChild(addImage());

console.log("I work now?");