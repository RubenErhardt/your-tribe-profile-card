// Function to open the YouTube video when the link is clicked
function openYouTubeVideo(event) {
  // Prevent the default link behavior to avoid redirection
  event.preventDefault();

  // Replace 'VIDEO_ID' with your actual YouTube video ID
  const videoId = 'joguOtdayb0&t=2s';

  // Open the YouTube video link in a new tab
  window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

// Attach a click event listener to the "Watch My Video" link
document.addEventListener("DOMContentLoaded", function () {
  const watchVideoLink = document.getElementById("watchVideoLink");
  watchVideoLink.addEventListener("click", openYouTubeVideo);
});
