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

export const userPlaylists = (state) => {
  let playlists;
  if (state.session){
    const user = state.entities.users[state.session.id];
    playlists = user.playlists.map (playlist => {
      return( state.entities.playlists[playlist.id]);
    });
  } else {
    playlists = null;
  }
  return playlists;
};

export const userSongs = (state) => {
  let songs = {};
  let playlists = Object.values(state.entities.playlists);
  let songlength = Object.values(state.entities.songs).length;
  if (playlists.length !== 0 && songlength !== 0){
    songs = playlists.map (playlist => {
      state.entities.playlists[playlist.id].song_ids.map( id => {
        debugger
        songs[id] = (state.entities.songs[id]);
      });
    });
  } else {
    songs = null;
  }
  debugger
  return songs;
};
//
// export const userSongsArtists = (state, songs) => {
//   let songs;
//     songs = playlistIds.map (songId => {
//       return( state.entities.songs[songId]);
//     });
//   return songs;
// };
//
// export const userArtists = (state, artistIds) => {
//   let artists;
//   artists = artistIds.map ( id => {
//     return( state.entities.artists[id]);
//   });
//   return artists;
// };
