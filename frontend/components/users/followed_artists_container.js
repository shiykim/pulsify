import { connect } from 'react-redux';
import React from 'react';
import ArtistIndex from '../artists/artist_index';
import { fetchArtists } from '../../actions/artist_actions'
import { userFollowedArtists } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    artists: userFollowedArtists(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);
