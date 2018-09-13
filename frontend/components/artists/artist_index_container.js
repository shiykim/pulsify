import { connect } from 'react-redux';
import React from 'react';
import ArtistIndex from './artist_index';
import { fetchArtists } from '../../actions/artist_actions'

const mapStateToProps = ({ entities: { artists }}) => {
  return {
    artists: Object.values(artists),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);
