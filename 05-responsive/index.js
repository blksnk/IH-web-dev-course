import AudioPlayer from "./audio"

function f () {

  const btn = document.getElementById('player-btn')
  const a = new AudioPlayer({
    src: './assets/audio.mp3',
    btn,
  })
  console.log(a)
  a.playPause()
}

f()
