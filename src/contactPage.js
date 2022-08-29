import { domModule } from "./index.js";

const contactPageGen = () => {
  if (document.querySelector('.content_wrap')) {
    let removeEle = document.querySelector('.content_wrap');
    removeEle.remove()
  }

  const mainContent = document.querySelector('#content');

  const contentEle = domModule.genElement('div', 'class', 'content_wrap');
  mainContent.appendChild(contentEle)

  const contactHead = domModule.genElement('div', 'class', 'contact_head');
  contentEle.appendChild(contactHead);

  const contactHeadP = domModule.genElement('p')
  contactHead.appendChild(contactHeadP);
}

export { contactPageGen }