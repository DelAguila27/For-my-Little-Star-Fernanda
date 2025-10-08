const secretNumber = 2; // número fijo entre 1 y 10
const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const leftHeart = document.getElementById("leftHeart");
const rightHeart = document.getElementById("rightHeart");
const finalHeart = document.getElementById("finalHeart");
const inputSection = document.getElementById("inputSection");
const songSection = document.getElementById("songSection");

guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = "⚠️ Ingresa un número entre 1 y 10.";
    return;
  }

  let distancia = Math.abs(secretNumber - guess);

  // 🔹 separación más pequeña para que no se salgan del cuadro
  let sep = distancia * 10; 

  leftHeart.style.transform = `translateX(-${sep}px)`;
  rightHeart.style.transform = `translateX(${sep}px)`;

  if (distancia === 0) {
    message.textContent = "🎉 Gracias preciosa, ahora mi corazón está COMPLETO 💖";

    // ocultamos las dos mitades y mostramos el corazón final
    setTimeout(() => {
      leftHeart.classList.add("hidden");
      rightHeart.classList.add("hidden");
      finalHeart.classList.remove("hidden");

      // quitamos input y mostramos botón de canción
      inputSection.classList.add("hidden");
      songSection.classList.remove("hidden");
    }, 800);

  } else if (guess < secretNumber) {
    message.textContent = "El número secreto es más alto ⬆️";
  } else {
    message.textContent = "El número secreto es más bajo ⬇️";
  }
});