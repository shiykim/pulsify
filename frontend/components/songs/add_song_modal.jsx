import React from 'react';
import { connect } from 'react-redux';
import { addPlaylistSong } from '../../actions/song_actions';
import { closeModal } from '../../actions/modal_actions';

class AddSongModal extends React.Component {

  handleClick(){
    this.props.addPlaylistSong(this.props.playlist.id, this.props.currentSong.id).then(() => {
      this.props.closeModal();
    });
  }

  render() {
    return (
      <li onClick={() => this.handleClick()} className='playlist_add_show'>{this.props.playlist.title}</li>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentSong: state.ui.currentSong,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlaylistSong: (playlistId, songId) => dispatch(addPlaylistSong(playlistId, songId)),
    closeModal: () => dispatch(closeModal()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddSongModal);
