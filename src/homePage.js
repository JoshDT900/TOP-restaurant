import { domModule } from "./index";
import largeImage from "./jason-leung-poI7DelFiVA-unsplash.jpg"
import quoteImage from "./emy-XoByiBymX20-unsplash.jpg"

let homePageGen = () => {
  if (document.querySelector('.content_wrap')) {
    let removeEle = document.querySelector('.content_wrap');
    removeEle.remove()
  }

  const mainContent = document.querySelector('#content');

  const contentWrapEle = domModule.createEle('div');
  domModule.setEleAtribute('class', 'content_wrap', contentWrapEle)
  mainContent.appendChild(contentWrapEle)

  const displayImage = domModule.createEle('img');
  domModule.setEleAtribute('src', largeImage, displayImage)
  domModule.setEleAtribute('alt', "Image of a dining area", displayImage)
  contentWrapEle.appendChild(displayImage)

  const quoteEle = domModule.createEle('div');
  domModule.setEleAtribute('class', 'quote_wrap', quoteEle)
  contentWrapEle.appendChild(quoteEle)

  const firstQuote = domModule.createEle('q');
  firstQuote.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mollis augue. Praesent mattis auctor metus nec vehicula. Vestibulum convallis sit amet libero in volutpat. Donec quis arcu in nisl tempus bibendum eu eu est."
  quoteEle.appendChild(firstQuote)

  const quoteImgEle = domModule.createEle('img');
  domModule.setEleAtribute('src', quoteImage, quoteImgEle)
  quoteEle.appendChild(quoteImgEle)

  const secondQuote = domModule.createEle('q');
  secondQuote.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mollis augue. Praesent mattis auctor metus nec vehicula. Vestibulum convallis sit amet libero in volutpat. Donec quis arcu in nisl tempus bibendum eu eu est."
  quoteEle.appendChild(secondQuote)
  
}

export { homePageGen }