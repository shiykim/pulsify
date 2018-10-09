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
  let songs = {};
  let playlists = Object.values(state.entities.playlists);
  let songlength = Object.values(state.entities.songs).length;
  return songs;
};

export const userDailyMix = (state) => {
  let songIds = [];
  let mixSongs = {};
  let artists = state.entities.artists;
  let songs = state.entities.songs;
  let userArtists = state.entities.users[state.session.id]["followedArtist"];

  if (Object.values(artists).length > 0 && userArtists.length > 4) {
    userArtists.map((artist) => {
      songIds.push( ... artists[artist].song_ids.slice(0,2));
    });
  }

  if (Object.values(songs).length > 0 && songIds.length > 0){
    let randSongs = [];
    for (let i = 0; i < 10; i++) {
      let rand = Math.floor(Math.random() * (songIds.length - 1));
      if (!randSongs.includes(songIds[rand])){
        randSongs.push(songIds[rand]);
      }
    }

    randSongs.map( (id) => {
      mixSongs[id] = songs[id];
    });
  }

  return Object.values(mixSongs);
};
