const $video = $('#video');
const $videoContainer = $('#video-container');
const aspectRatio = 16 / 9;

function setVideoSize() {
  const containerHeight = $videoContainer.innerHeight();
  const containerWidth = $videoContainer.innerWidth();

  if (containerWidth > containerHeight * aspectRatio) {
    $video.css('width', containerHeight * aspectRatio);
    $video.css('height', containerHeight);
  } else {
    $video.css('width', containerWidth);
    $video.css('height', containerWidth / aspectRatio);
  }
}
setVideoSize();

function setVideoContainerHeight() {
  let windowWidth = $(window).innerWidth();
  $videoContainer.css('max-height', windowWidth / aspectRatio);
}
setVideoContainerHeight();

$(window).on('resize', function () {
  setVideoContainerHeight();
  setVideoSize();
});
