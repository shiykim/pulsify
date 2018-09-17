import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePlaylist from '../playlists/create_playlist';
import DeletePlaylist from '../playlists/delete_playlist';
import UpdatePlaylist from '../playlists/update_playlist';
import AddPlaylistSong from '../songs/add_playlistsong';

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
    case 'addplaylistsong':
      component = <AddPlaylistSong />;
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
