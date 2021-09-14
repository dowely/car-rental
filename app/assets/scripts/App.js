import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

let mobileMenu = new MobileMenu()
let revealOnScroll = new RevealOnScroll()

function importSprites(r) {
  r.keys().forEach(r)
}

importSprites(require.context('../icons', true, /\.svg$/))

if(module.hot) {
  module.hot.accept()
}