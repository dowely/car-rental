import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

let mobileMenu = new MobileMenu();

function importSprites(r) {
  r.keys().forEach(r)
}

importSprites(require.context('../icons', true, /\.svg$/))

if(module.hot) {
  module.hot.accept()
}