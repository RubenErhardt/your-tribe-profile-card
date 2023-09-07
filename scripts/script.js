function openYouTubeVideo(event) {

  event.preventDefault();

  const videoId = 'joguOtdayb0&t=2s';

  window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
  const watchVideoLink = document.getElementById("watchVideoLink");
  watchVideoLink.addEventListener("click", openYouTubeVideo);
});
