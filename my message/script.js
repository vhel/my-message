const welcomeScreen = document.getElementById("welcomeScreen");
const messageScreen = document.getElementById("messageScreen");
const openButton = document.getElementById("openButton");

const envelope = document.getElementById("envelope");
const letterStage = document.querySelector(".letter-stage");
const instruction = document.querySelector(".instruction");

const musicButton = document.getElementById("musicButton");
const song = document.getElementById("song");

openButton.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  messageScreen.classList.remove("hidden");

  song.play().catch(() => {
    musicButton.textContent = "Play music ♪";
  });
});

envelope.addEventListener("click", () => {
  /* Open envelope */
  envelope.classList.add("open");

  /* Change text below envelope */
  instruction.textContent = "A message from the heart 💛";

  /* Show long message after envelope animation */
  setTimeout(() => {
    letterStage.classList.add("show-full-letter");
  }, 650);
});

musicButton.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    musicButton.textContent = "Pause music ❚❚";
  } else {
    song.pause();
    musicButton.textContent = "Play music ♪";
  }
});