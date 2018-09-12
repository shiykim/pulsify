import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar_index';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
