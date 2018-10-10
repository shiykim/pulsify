export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs',
  });
};

export const fetchSong = song => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${song.id}`,
  });
};

export const addPlaylistSong = (playlistId, songId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_songs',
    data: {
      playlist_id: playlistId,
      song_id: songId
    }
  });
};

export const removePlaylistSong = (playlist_id, song_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_songs/${playlist_id}/${song_id}`,
  });
};

export const fetchDailyMix = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/dailymix`,
  });
};
