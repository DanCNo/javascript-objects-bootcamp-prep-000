var artistName = 'Blind Pilot';
var songTitle = 'Always';
var playlist = {};


function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return playlist;
  //return Object.assign({}, playlist, {[artistName]: songTitle})
}

updatePlaylist(playlist, 'Blind', 'Games');
console.log(playlist);

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}

removeFromPlaylist(playlist, 'Blind Pilot');