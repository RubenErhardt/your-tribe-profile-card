function openYouTubeVideo(event) {

  event.preventDefault();

  const videoId = 'joguOtdayb0&t=2s';

  window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
  const watchVideoLink = document.getElementById("watchVideoLink");
  watchVideoLink.addEventListener("click", openYouTubeVideo);
});

// Zoek het kaartelement op basis van de ID
const card = document.getElementById('card');

// Voeg een click-event luisteraar toe aan het kaartelement
card.addEventListener('click', function () {
    // Toggle de 'flipped' klasse om de kaart om te draaien
    card.classList.toggle('flipped');
});

