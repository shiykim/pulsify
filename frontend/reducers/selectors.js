export const selectPlaylistSongs = (state, playlist) => {
  let songs;
  if (playlist){
    const playlist_songs = [];
    playlist.song_ids.map (id => {
      playlist_songs.push(state[id]);
    });
    songs = playlist_songs;
  } else {
    songs = null;
  }
  return songs;
};

export const selectSongAlbum = (state, albumId) => {
  return state[albumId];
};

export const selectSongArtist = (state, artistId) => {
  return state[artistId];
};
