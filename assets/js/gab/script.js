document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('myVideo');
  video.addEventListener('canplay', () => {
      if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { // Firefox
          video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
          video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE/Edge
          video.msRequestFullscreen();
      }
  });
});
