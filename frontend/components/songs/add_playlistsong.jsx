import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { deletePlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router';
import { userPlaylists } from '../../reducers/selectors'
class AddPlaylistSong extends React.Component {

  handle(){
    this.props.addPlaylistSong((this.props.playlist.id), (this.props.song.id)).then(() => {
      this.props.closeModal();
    });
  }

  render () {
    if (!this.props.modal) {
      return null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div onClick={() => this.props.closeModal()} className="close-x" id='modal-close'>X</div>
          <h1 id="modal-header">Add to Playlist</h1>
          <button onClick={() => this.props.closeModal()} className="close-x btn-modal-cancel">CANCEL</button>
          <button onClick={() => this.handleDelete()} className="btn-modal-submit">DELETE</button>
        </div>
      </div>
    );
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    song: state.ui.currentSong,
    playlists: userPlaylists(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    addPlaylistSong: (artist_id, song_id) => dispatch(addPlaylistSong(artist_id, song_id))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPlaylistSong));
