import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const onTimeUpdate = throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);
player.on('timeupdate', onTimeUpdate);
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
player.play();
