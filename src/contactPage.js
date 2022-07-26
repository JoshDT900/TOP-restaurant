import { domModule } from "./index.js";
import logoImg from "./pngwing.com.png";
import fbImg from "./584ac2d03ac3a570f94a666d.png"
import twtImg from "./580b57fcd9996e24bc43c53e.png"
import instaImg from "./580b57fcd9996e24bc43c521.png"

const contactPageGen = () => {
  if (document.querySelector('.content_wrap')) {
    let removeEle = document.querySelector('.content_wrap');
    removeEle.remove()
  }

  const mainContent = document.querySelector('#content');

  const contentEle = domModule.genElement('div', 'class', 'content_wrap');
  mainContent.appendChild(contentEle)

  const contentBox = domModule.genElement('div', 'class', 'contact_us_box')
  contentEle.appendChild(contentBox);

  let eleFuncArr = [contactHeadEle, contInfoBoxEle, contLogo, socialBtns]
  for (let eleFunc of eleFuncArr) {
    eleFunc(contentBox);
  }
  return
}

const contactHeadEle = (ele) => {

  const contactHead = domModule.genElement('div', 'class', 'contact_head');
  ele.appendChild(contactHead);

  const contactHeadP = domModule.genElement('p')
  contactHeadP.textContent = "Contact Us";
  contactHead.appendChild(contactHeadP);

  return
}

const contInfoBoxEle = (ele) => {
  const infoBox = domModule.genElement('div', 'class', 'contact_info_box')
  ele.appendChild(infoBox)

  const phoneNumEle = domModule.genElement('div', 'class', 'phone_num');
  infoBox.appendChild(phoneNumEle);

  const phoneNumText = domModule.genElement('p');
  phoneNumText.textContent = "Contact us by phone: +1 (606) 555-5555"
  phoneNumEle.appendChild(phoneNumText);

  const emailEle = domModule.genElement('div', 'class', 'email_info')
  infoBox.appendChild(emailEle);

  const emailText = domModule.genElement('p');
  emailText.textContent = "Email us at: OurRestaurant456@gmail.com";
  emailEle.appendChild(emailText);

  return
}

const contLogo = (ele) => {
  const logoBox = domModule.genElement('div', 'class', 'contact_logo')
  ele.appendChild(logoBox)

  const logoEle = domModule.genElement('img', 'src', logoImg)
  domModule.setEleAtribute('class', 'contact_logo_img', logoEle)
  logoBox.appendChild(logoEle);
  
  return
}

const socialBtns = (ele) => {
  const socialBtnsBox = domModule.genElement('div', 'class', 'social_btns');
  ele.appendChild(socialBtnsBox);

  const btnImgArr = [twtImg, fbImg, instaImg];
  const btnImgClassNames = ['twit_btn', 'fb_btn', 'insta_btn']

  for (let i in btnImgArr) {
    const newDiv = domModule.genElement('div')
    const newImg = domModule.genElement('img', 'src', btnImgArr[i])
    domModule.setEleAtribute('class', btnImgClassNames[i], newImg)

    newDiv.appendChild(newImg);
    socialBtnsBox.appendChild(newDiv);
  }

  return
}

export { contactPageGen }