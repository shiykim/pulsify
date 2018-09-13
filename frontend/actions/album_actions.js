import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchAlbums = () => {
  return dispatch => {
    return AlbumApiUtil.fetchAlbums().then( albums => {
      return dispatch(receiveAllAlbums(albums));
    });
  };
};

export const fetchAlbum = id => {
  return dispatch => {
    return AlbumApiUtil.fetchAlbum().then( album => {
      return dispatch(receiveAlbum(album));
    });
  };
};
