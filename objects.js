var playlist = {'Blind Pilot' : 'Always'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return playlist;
  //return playlist.assign({}, playlist, {[artistName]: songTitle})
}

updatePlaylist(playlist, artistName, songTitle);
console.log(playlist);

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}

removeFromPlaylist(playlist, 'Blind Pilot');