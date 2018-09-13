import { connect } from 'react-redux';
import React from 'react';
import AlbumIndex from './album_index';
import { fetchAlbums } from '../../actions/album_actions'

const mapStateToProps = ({ entities: { albums }}) => {
  return {
    albums: Object.values(albums),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
