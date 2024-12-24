const targetDate = new Date('2025-01-01T00:00:00').getTime();

const messages = [
    "Chaque jour, nous nous rapprochons de ce moment magique ✨",
    "Merci pour ces presque 2 ans incroyables ❤",
    "Je suis fier de notre parcours, même à distance 🌍",
    "Tu es la meilleure chose qui me soit arrivée 💖",
    "On est presque là ! J’ai hâte de te retrouver 🥰",
    "Tout ce temps à penser à toi, c'est magique 💫",
    "Tu me manques chaque jour, mais bientôt c’est fini 🕒",
    "Je compte les jours jusqu'à toi, mon amour ⏳",
    "Bientôt, ce sera notre moment. Je t’aime plus que tout ❤"
];

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById('countdown').innerHTML = "C'est aujourd'hui 🎉";
        document.getElementById('message').innerHTML = "Félicitations pour nos 2 ans ❤";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes
    `;

    const messageIndex = (new Date().getDate() - 24) % messages.length;
    document.getElementById('message').innerHTML = messages[messageIndex];
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();