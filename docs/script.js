const messageEl = document.getElementById("message");
const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveImage = document.getElementById("loveImage");
const buttons = document.getElementById("buttons");
const music = document.getElementById("bgMusic");

/* ================= MUSIC ================= */
document.addEventListener("click", () => {
  if (!musicStarted) {
    music.volume = 0.4;

    music.play()
      .then(() => {
        music.currentTime = 14;
      })
      .catch(err => {
        console.log("Music error:", err);
      });

    musicStarted = true;
  }
});


/* ================= TYPING EFFECT ================= */
const sorryText = "I’m really sorry 🥺";
let typingIndex = 0;

function typeSorry() {
  if (typingIndex < sorryText.length) {
    messageEl.textContent += sorryText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeSorry, 80);
  }
}
typeSorry();

/* ================= NO BUTTON LOGIC ================= */
const noMessages = [
  "Are you sure? 😶",
  "Please think again 🥺",
  "I didn’t mean it 😔",
  "I promise I’ll do better 🤞",
  "I’ll bring snacks 🍫",
  "And hugs 🤗",
  "And Netflix 😌",
  "I miss you 😞",
  "One more chance? 🥹",
  "Still no? 😭",
  "I’ll listen better 👂",
  "I’ll annoy you less 😅",
  "Pretty please 🙏",
  "Don’t break my heart 💔",
  "Okay… but I still care 🤍"
];

let noIndex = 0;

noBtn.addEventListener("click", () => {
  messageEl.textContent = noMessages[noIndex];
  questionEl.textContent = "Did you forgive me now?";

  // Move NO button
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noIndex++;
  if (noIndex >= noMessages.length) noIndex = 0;
});

/* ================= YES BUTTON ================= */
yesBtn.addEventListener("click", () => {
  messageEl.textContent = "I love you 🤍";
  questionEl.textContent = "Thank you for forgiving me";

  buttons.style.display = "none";
  loveImage.style.display = "block";
});
