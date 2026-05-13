const drumMachine = document.getElementById("drum-machine");
const padBank = document.getElementById("pad-bank");
const display = document.getElementById("display");

padBank.addEventListener("click", (event) => {
  const pad = event.target.closest(".drum-pad");

  if (pad === null) return;

  const audio = pad.querySelector(".clip");

  audio.play();

  display.textContent = audio.id;
});

document.addEventListener("keydown", (event) => {
  const audio = document.getElementById(event.key.toUpperCase());

  if (audio === null) return;

  audio.play();

  display.textContent = audio.id;
});
