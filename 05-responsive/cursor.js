const cursor = document.getElementById('cursor');
const lerpFactor = 0.075;
let cursorDims;
let cursorScale = 1;
let cursorTargetScale = 1;
let frameId = null;
let cursorTargetX = 500;
let cursorTargetY = 500;
let cursorX = 0;
let cursorY = 0;
let hovering = false;
let audioIntensity = 0;

export function setIntensity(i) {
  audioIntensity = (i / 128 - 1) * 2;
}

function detectBrowser() {
  var isFirefox = typeof InstallTrigger !== 'undefined';
  
  if(!isFirefox) {
    cursor.style.backgroundColor = '#ff6200';
    document.body.style.backdropFilter = 'contrast(0.6) brightness(1.8)'
  }
}

function getCursorDims() {
  cursorDims = cursor.getBoundingClientRect();
}

function onMove ({clientX, clientY}) {
  cursorTargetX = clientX - cursorDims.width / 2;
  cursorTargetY = clientY - cursorDims.height / 2;
}

function animate() {
  console.log(audioIntensity)
  cursorX += (cursorTargetX - cursorX) * lerpFactor;
  cursorY += (cursorTargetY - cursorY) * lerpFactor;
  cursorScale += (cursorTargetScale - cursorScale) * lerpFactor;
  const s = cursorScale + audioIntensity;
  cursor.style.transform = 'translate(' + cursorX + 'px,' + cursorY + 'px) scale(' + s + ')';
  cursor.style.backgroundColor = hovering ? '#0066FE' : '#ff6200'
  
  frameId = window.requestAnimationFrame(animate)
}


function onHover () {
  cursorTargetScale = .5;
  hovering = true;
}

function onLeave () {
  cursorTargetScale = 1;
  hovering = false;
}

function addBtnEvents() {
  [...document.querySelectorAll('button, a, .hover-effect')]
    .forEach(el => {
      el.addEventListener('mouseover', onHover)
      el.addEventListener('mouseleave', onLeave)
    })
}


window.addEventListener('mousemove', onMove, false);
window.addEventListener('resize', getCursorDims, true);

detectBrowser()

getCursorDims()
addBtnEvents()

animate()