import { connect } from 'react-redux';
import React from 'react';
import { fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistAllIndex from './playlist_all_index';


const mapStateToProps = ({ session, entities: { playlists, users }}) => {
  return {
    playlists: Object.values(playlists),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistAllIndex);
