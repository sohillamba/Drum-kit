var totalDrums = 7;
var drumKeys = ["w", "a", "s", "d", "j", "k", "l"];
var audios = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

for (var i = 0; i < totalDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", handleKeypress);

function handleClick () {
  var key = this.innerHTML;
  playSound(key);
}

function handleKeypress() {
  var key = event.key;
  playSound(key);
}

function playSound(key) {
  for (var i = 0; i < totalDrums; i++) {
    if (drumKeys[i] === key) {
      var audio = new Audio("sounds/" + audios[i] + ".mp3");
      audio.play();
      break;
    }
  }
}
