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
    playlists = user.playlists.map (id => {
      return( state.entities.playlists[id]);
    });
  } else {
    playlists = null;
  }
  return playlists;
};
//
// let playlists;
// if (state.session){
//   playlists = this.props.playlists.map( playlist => {
//     if (playlist.author_id === this.currentUser.id){
//       return (<li className='playlist-li'><Link to={`/collection/playlists/${playlist.id}`}> {playlist.title}</Link></li>);
//     }
//   });
// } else {
//   playlists = null;
// }
