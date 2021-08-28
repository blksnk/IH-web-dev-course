import {setIntensity} from './cursor.js'

export default class AudioPlayer {
  constructor(options = {}) {
    this.src = options.src || null;
    this.btn = options.btn || null;
    this.analyse = options.analyse || false;
    
    this.duration = 1;
    this.time = 0;
    this.playing = false;
    
    this.audio = this.createAudio();
    this.attachEvents()
  }
  
  get progress() {
    return this.time / this.duration;
  }
  
  createAudio() {
    const audio = new Audio(this.src);
    audio.addEventListener('loadeddata', () => {
      this.duration = audio.duration;
    })
    audio.addEventListener('timeupdate', () => {
      this.time = audio.currentTime;
    })
    if(this.analyse) {
      this.analiser = new Analyzer(audio)
    }
    return audio;
  }
  
  attachEvents() {
    if(this.btn) {
      this.btn.addEventListener('click', this.playPause.bind(this))
    }
  }
  
  playPause() {
    if(this.playing) {
      this.playing = false;
      this.audio.pause()
    } else {
      this.audio.play()
      this.playing = true;
    }
  }
}

export class Analyzer {
  constructor(audio, callback) {
    this.audio = audio;
    this.callback = callback || (() => null);

    this.ac = new AudioContext()
    this.source = this.ac.createMediaElementSource(this.audio)

    this.an = this.ac.createAnalyser()
    this.source.connect(this.an)
    this.an.connect(this.ac.destination)

    this.buffer = new Uint8Array(this.an.fftSize)
    this.intesity = 0;

    this.animate()
  }

  animate() {
    this.intensity = 0;
    this.an.getByteTimeDomainData(this.buffer);
    /* RMS stands for Root Mean Square, basically the root square of the
    * average of the square of each value. */
    for (var i = 0; i < this.buffer.length; i++) {
      this.intensity += this.buffer[i] * this.buffer[i];
    }
    this.intensity /= this.buffer.length;
    this.intensity = Math.sqrt(this.intensity);
    this.callback(this.intensity)
    /* rms now has the value we want. */
    requestAnimationFrame(this.animate.bind(this));
  }
}

const btn = document.getElementById('player-btn')
const a = new AudioPlayer({
  src: './assets/audio.mp3',
  btn,
})

const analizer = new Analyzer(a.audio, setIntensity)