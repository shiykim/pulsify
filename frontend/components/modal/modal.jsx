import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePlaylist from '../playlists/create_playlist';
import DeletePlaylist from '../playlists/delete_playlist';
import MorePlaylist from '../playlists/more_playlist';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createplaylist':
      component = <CreatePlaylist />;
      break;
    case 'deleteplaylist':
      component = <DeletePlaylist />;
      break;
    case 'updateplaylist':
      component = <UpdatePlaylist />;
      break;
    case 'moreplaylist':
      component = <MorePlaylist />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
