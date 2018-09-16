import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../../util/route_util';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPlaylist, updatePlaylist, deletePlaylist } from '../../actions/playlist_actions';

class MorePlaylist extends React.Component {

  render () {
    return (
      <div className='more-playlist-drop'>
        hello
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MorePlaylist);
