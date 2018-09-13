export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs',
  });
};
