// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // get objects
  var dropdown_menu = document.getElementById("horn-select");
  var images = document.querySelectorAll('img')
  var horn_img = images[0]
  var horn_sound = document.querySelector('audio')

  // update image and audio when the value of the dropdown menu is changed
  dropdown_menu.addEventListener("change", function(){
    const selected_horn = dropdown_menu.value; 
    horn_img.setAttribute("src", `assets/images/${selected_horn}.svg`);
    horn_sound.setAttribute("src", `assets/audio/${selected_horn}.mp3`)
    //console.log(horn_img)
    //console.log(horn_sound)
  }
  )

  // get objects
  var volume_slider = document.getElementById("volume");
  var volume_img = images[1];
  // Change the volume based on the value of the slider
  volume_slider.addEventListener("change", function(){
    const volume_level = volume_slider.value;
    //console.log(volume_level)
    //console.log(volume_img)
    if (volume_level == 0){
      volume_img.setAttribute("src", "assets/icons/volume-level-0.svg");
      volume_img.setAttribute("alt", "Volume level 0");
    }
    else if (volume_level >= 1 & volume_level < 33){
      volume_img.setAttribute("src", "assets/icons/volume-level-1.svg");
      volume_img.setAttribute("alt", "Volume level 1");
    }
    else if (volume_level >= 33 & volume_level < 67){
      volume_img.setAttribute("src", "assets/icons/volume-level-2.svg");
      volume_img.setAttribute("alt", "Volume level 2");
    }
    else if (volume_level >= 67){
      volume_img.setAttribute("src", "assets/icons/volume-level-3.svg");
      volume_img.setAttribute("alt", "Volume level 3");
    }
    horn_sound.volume = volume_level/100;
  }
  )

  // get objects
  var play_sound_button = document.querySelector("button");
  var jsConfetti = new JSConfetti();
  play_sound_button.addEventListener("click", function(){
    if (dropdown_menu.value == "party-horn"){
      jsConfetti.addConfetti();
    }
    console.log(horn_sound)
    horn_sound.play();
  }
  )

}

