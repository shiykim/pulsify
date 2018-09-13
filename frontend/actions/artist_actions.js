import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveAllArtists = artists => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const fetchArtists = () => {
  return dispatch => {
    return ArtistApiUtil.fetchArtists().then( artists => {
      return dispatch(receiveAllArtists(artists));
    });
  };
};

export const fetchArtist = id => {
  return dispatch => {
    return ArtistApiUtil.fetchArtist().then( artist => {
      return dispatch(receiveArtist(artist));
    });
  };
};
