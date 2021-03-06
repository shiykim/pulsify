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
        songs[id] = (state.entities.songs[id]);
      });
    });
  } else {
    songs = null;
  }
  return songs;
};

export const userFollowedArtists = (state) => {
  let artists = state.entities.artists;
  let userArtists = [];
  let followedArtists = state.entities.users[state.session.id]['followedArtist'];
  if (Object.values(artists).length > 0 && followedArtists.length > 0) {
    followedArtists.map ((id) => {
      userArtists.push(artists[id]);
    });
  }
  return userArtists;
};

export const userFollowedAlbums = (state) => {
  let albums = state.entities.albums;
  let userAlbums = [];
  if (Object.values(albums).length > 0 ) {
    let followedAlbums = state.entities.users[state.session.id]['followedAlbum'];
    followedAlbums.map ((id) => {
      userAlbums.push(albums[id]);
    });
  }
  return userAlbums;
};

export const userFollowedPlaylists = (state) => {
  let playlists = state.entities.playlists;
  let userFollowedPlaylists = [];
  let followedPlaylists = state.entities.users[state.session.id]['followedPlaylist'];
  if (Object.values(playlists).length > 0 && followedPlaylists.length > 0) {
    followedPlaylists.map ((id) => {
      userFollowedPlaylists.push(playlists[id]);
    });
  }
  return userFollowedPlaylists;
};
