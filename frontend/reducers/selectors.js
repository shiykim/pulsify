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

// export const userSongs = (state, playlists) => {
//   let songs;
//   songs = state.entities.playlists.map (playlist => {
//     return( state.entities.songs[songId]);
//   });
//   return songs;
// };
// //
// // export const userSongsArtists = (state, songs) => {
// //   let songs;
// //     songs = playlistIds.map (songId => {
// //       return( state.entities.songs[songId]);
// //     });
// //   return songs;
// // };
//
// export const userArtists = (state, artistIds) => {
//   let artists;
//   artists = artistIds.map ( id => {
//     return( state.entities.artists[id]);
//   });
//   return artists;
// };
