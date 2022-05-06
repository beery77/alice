//spørgsmål 4

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: 'Tcn__Rsf_Ic',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo(); 
}

function onPlayerStateChange() {
  console.log("player state change");

  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

var elementet = document.getElementById("video");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo(); 
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
}); 

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}
