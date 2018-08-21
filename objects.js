var playlist = {};
var artistName = '';
var songTitle = '';

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
  //return Object.assign({}, playlist, {[artistName]: songTitle})
}

//updatePlaylist(playlist, 'Blind Pilot', 'Always');
//console.log(playlist);

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}