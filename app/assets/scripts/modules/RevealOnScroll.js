import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
  constructor() {
    this.elementsToReveal = document.querySelectorAll('.advantages')
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 300).bind(this)
    this.events()
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle)
    window.addEventListener('resize', debounce(() => {
      console.log('resize just ran')
      this.browserHeight = window.innerHeight
    }, 350))
  }

  calcCaller() {
    console.log('scroll fun ran')
      this.elementsToReveal.forEach(el => {
        if(el.isRevealed == false) {
          this.calculateIfScrolledTo(el)
        }
      })
  }

  calculateIfScrolledTo(el) {
    if(window.scrollY + this.browserHeight > el.offsetTop) {
      console.log("element was calculated")
      let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
      if(scrollPercent < 70) {
        this.revealItem(el)
        el.isRevealed = true
        if(el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle)
        }
      }
    }
  }

  revealItem(el) {
    el.classList.add('reveal-item--is-visible')
  }

  hideInitially() {
    this.elementsToReveal.forEach(el => {
      el.classList.add('reveal-item')
      el.isRevealed = false
    })
    this.elementsToReveal[this.elementsToReveal.length - 1].isLastItem = true
  }
}

export default RevealOnScroll