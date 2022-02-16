const $video = $('#video');
const $videoContainer = $('#video-container');
const $html = $('html');
const aspectRatio = 16 / 9;

function setVideoSize() {
  const containerHeight = $videoContainer.innerHeight();
  const containerWidth = $videoContainer.innerWidth();

  if (containerWidth > containerHeight * aspectRatio) {
    // $video.css('width', width);
    $html.css('--video-width', `${containerHeight * aspectRatio}px`);
    $video.css('height', containerHeight);
  } else {
    // $video.css('width', containerWidth);
    $html.css('--video-width', `${containerWidth}px`);
    $video.css('height', containerWidth / aspectRatio);
  }
}
setVideoSize();

function setVideoContainerHeight() {
  let webinarElWidth = $('#webinar').width();
  $videoContainer.css('max-height', webinarElWidth / aspectRatio);
}
setVideoContainerHeight();

$(window).on('resize', function () {
  setVideoContainerHeight();
  setVideoSize();
});
