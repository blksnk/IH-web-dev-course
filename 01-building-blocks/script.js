const body = document.querySelector('body');

function onWheel({ deltaY }) {
  body.classList.toggle('scrolled', deltaY > 0)
}

function toggleClass() {
  body.classList.toggle('scrolled')
}

// body.addEventListener('click', toggleClass)

const getElements = () => {
  let [title, subtitle, menu, contact, video, info] = [...document.querySelectorAll('header svg, #subtitle, #menu, #contact, #bottom video, #info')]
  
  title = {
    el: title,
    prop: ['transform', 'scale'],
    start: 1,
    end: (window.innerWidth - 20) / title.getBoundingClientRect().width
  };
  const subtitleOpacity = {
    el: subtitle,
    prop: ['opacity'], 
    start: 1,
    end: 0
  };
  const subtitleTranslate = {
    el: subtitle,
    prop: ['transform', 'translateX'],
    start: 0,
    end: window.innerWidth - subtitle.getBoundingClientRect().left
  }
  menu = {
    el: menu,
    prop: ['transform', 'translateY'],
    start: 0,
    end: 50 - (window.innerHeight - 45),
  }

  const contactRect = contact.getBoundingClientRect()
  contact = {
    el: contact,
    prop: ['transform', 'scaleY'],
    start: 1,
    end: (contactRect.height / 2 - 5) / contactRect.height,
  }
  const contactChild = {
    el: contact.el.querySelector('div'),
    start: 1,
    end: contact.end * 4,
    prop: ['transform', 'scaleY']
  };
  video = {
    el: video,
    prop: ['transform', 'translateY'],
    start: window.innerHeight,
    end: 0,
  }
  info = {
    el: info,
    prop: ['transform', 'translateY'],
    start: window.innerHeight * 2,
    end: 0,
  }

  return {title,
    subtitleOpacity,
    subtitleTranslate,
    menu,
    contact,
    contactChild,
    video,
    info,
  };
}

const lengthProps = ['translate', 'translateX', 'translateY']

function formatVal(prop, val, unit = 'px') {
  if(lengthProps.includes(prop)) {
    return val + unit
  } else return val
}

class Animator {
  constructor() {
    this.lerpFactor = 0.15;
    this.elements = getElements();
    this.progress = 0;
    this.lerped = 0;
    this.setEvents();
    this.animate()
  }

  setProp({el, prop, start, end}) {
    const val = start + (end - start) * this.progress
    if(prop.length > 1) {
      const styleVal = prop.slice(1).reduce((acc, p) => {
        return `${acc} ${p}(${formatVal(p, val)})`
      }, '')

      el.style[prop[0]] = styleVal
    } else {
      el.style[prop[0]] = val
    }
  }

  setProps() {
    for (let key in this.elements) {
      this.setProp(this.elements[key])
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))

    this.progress += (this.lerped - this.progress) * this.lerpFactor
    
    this.setProps()
  }

  onScroll({deltaY}) {
    const lerped = this.lerped + deltaY / 100;
    this.lerped = Math.min(1, Math.max(0, lerped));
    console.log(this.progress);
  }

  setEvents() {
    body.addEventListener('wheel', this.onScroll.bind(this));
  }
}


const anim = new Animator()
