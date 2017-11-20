window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if(!audio) return;
  audio.currentTime = 0; // This piece of code makes it possible to rewind to the start of audio so that it can be played multiple times without actually waiting for its duration to finish
  audio.play();
  key.classList.add('playing'); // This is how to add a class in vanilla JS

});


function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
