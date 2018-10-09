import { connect } from 'react-redux';
import React from 'react';
import AlbumIndex from '../albums/album_index';
import { fetchAlbums } from '../../actions/album_actions';
import { userFollowedAlbums } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    albums: userFollowedAlbums(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
