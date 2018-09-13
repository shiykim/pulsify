import { connect } from 'react-redux';
import React from 'react';
import { logout, fetchPlaylists } from '../../actions/session_actions';
import Browse from './browse_index';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()), 
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Browse);
