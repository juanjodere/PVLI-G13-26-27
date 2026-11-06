
// musica mwejejeje

var audio = document.getElementById('background-music');
var toggleButton = document.getElementById('toggle-music');
var musicIcon = document.getElementById('music-icon');

toggleButton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    audio.play();
    musicIcon.src = 'images_src/sound_on.png';
  } 
  else {
    audio.muted = true;
    musicIcon.src = 'images_src/sound_off.png';
  }
});