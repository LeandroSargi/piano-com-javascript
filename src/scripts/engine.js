const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

// Carrega o som padrão para evitar erros antes de qualquer interação
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    
    // Verifica se a tecla existe
    if (!clickedKey) {
        console.error(`Tecla não encontrada: ${key}`);
        return;
    }

    // Atualiza a fonte do áudio e toca
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    // Adiciona e remove a classe "active" para a animação
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

// Adiciona os eventos de clique em cada tecla do piano
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

// Adiciona o evento de pressionar uma tecla do teclado
document.addEventListener("keydown", (e) => {
    playTune(e.key.toUpperCase()); // Converte para maiúscula para combinar com o atributo `data-key`
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);