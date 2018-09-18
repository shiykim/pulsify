import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { deletePlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router';
import { userPlaylists } from '../../reducers/selectors';
import AddSongModal from './add_song_modal';

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

    let user_playlist;
    if(this.props.playlists) {
      user_playlist = this.props.playlists.map( (playlist,i) => {
        return (
          <AddSongModal key={`playlist-${i}`} playlist={playlist} />
        );
      });
    } else {
      user_playlist = null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div onClick={() => this.props.closeModal()} className="close-x" id='modal-close'>X</div>
          <h1 id="modal-header">Add to Playlist</h1>
          <ul className='playlist_add_show'>
            {user_playlist}
          </ul>
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
