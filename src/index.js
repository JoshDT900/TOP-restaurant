import _ from "lodash";
import pageLogo from "./pngwing.com.png";
import './style.css';

const contentElement = document.querySelector('#content')

let addImage = () => {
  const imgElement = document.createElement('div');

  const myLogo = new Image();
  myLogo.src = pageLogo;

  imgElement.appendChild(myLogo);

  return imgElement;
}

contentElement.appendChild(addImage());

console.log("I work now?");