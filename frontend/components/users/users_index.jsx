import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import { connect } from 'react-redux';


class UsersIndex extends React.Component {


  render () {
  }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
