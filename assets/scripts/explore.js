// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var voice_selection_menu = document.getElementById("voice-select");
  var instance = window.speechSynthesis;
  var text_box = document.getElementById("text-to-speak");
  var button = document.querySelector("button");
  
  var voices = [];
  var text;
  var voice;

  var face = document.querySelector("img");

  // when the page has loaded, insert the voices into the dropdown menu
  instance.onvoiceschanged = function(){
    voices = instance.getVoices();
    // populate the dropdown menu
    // console.log(voices)
    for (let i = 0; i < voices.length; i++){
      var option = document.createElement("option");
      option.value = voices[i].name;
      option.textContent = `${voices[i].name} (${voices[i].lang})`

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voice_selection_menu.appendChild(option)
    }
  }

  // update these every time they change
  voice_selection_menu.addEventListener("change", function(){
    voice = voice_selection_menu.value;
  }
  )

  text_box.addEventListener("change", function(){
    text = text_box.value; 
  }
  )

  button.addEventListener("click", function(){
    const utterThis = new SpeechSynthesisUtterance(text);
    // configure the speaker
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voice) {
        utterThis.voice = voices[i];
      }   
    }
    // speak it
    instance.speak(utterThis);
    // change the image while speaking
    setInterval(function(){
      if (speechSynthesis.speaking == true){
        face.setAttribute("src", "assets/images/smiling-open.png");
      }
      else {
        face.setAttribute("src", "assets/images/smiling.png");
      };
    },1);
  });
}