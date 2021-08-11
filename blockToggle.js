// create toggle Button
function createFront() {
  const container = document.createElement('div')
  const buttonJS = document.createElement('button')
  buttonJS.textContent = 'toggle Logic'
  const buttonCSS = document.createElement('button')
  buttonCSS.textContent = 'toggle Style'
  container.appendChild(buttonJS)
  container.appendChild(buttonCSS)
}

class Toggle {
  constructor() {
    this.head = document.head
    this.body = document.body
    this.cssLink = this.head.querySelector('link').cloneNode()
    this.jsScript = this.body.querySelector('script [src="./script.js]').cloneNode()

    this.createFront()
  }

  createFront() {
    this.front.container = document.createElement('div')
    this.front.container.style.position = "fixed"
    this.front.container.style.bottom = '0'
    this.front.container.style.right = '0'

    this.front.button.JS = document.createElement('button')
    this.front.button.JS.textContent = 'toggle Logic'
    this.front.button.JS.onclick = this.toggleJS.bind(this)

    this.front.button.CSS = document.createElement('button')
    this.front.button.CSS.textContent = 'toggle Style'
    this.front.button.CSS.onclick = this.toggleCSS.bind(this)

    this.front.container.appendChild(this.front.button.JS)
    this.front.container.appendChild(this.front.button.CSS)
    
    this.body.appendChild(this.front.container)
  }

  removeCSS() {
    this.body.classList.add('no-js')
    this.head.removeChild(this.cssLink)
  }

  removeJS() {
    this.body.classList.add('no-js')
    this.body.removeChild(this.jsScript)
  }

  addCSS() {
    this.body.classList.remove('no-js')
    this.head.appendChild(this.cssLink)
  }

  addJS() {
    this.body.classList.remove('no-js')
    this.body.appendChild(this.jsScript)
  }

  toggleJS() {
    if(this.body.classList.contains('no-js')) {
      this.addJS()
    } else {
      this.removeJS()
    }
  }

  toggleCSS() {
    if(this.body.classList.contains('no-css')) {
      this.addCSS()
    } else {
      this.removeCSS()
    }
  }
}
