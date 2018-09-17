import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { fetchSong, removePlaylistSong } from '../../actions/song_actions';
import { withRouter } from 'react-router';

class MoreDropDown extends React.Component {

  handleDelete(){
    this.props.removePlaylistSong(this.props.playlist.id, this.props.song.id).then(() => {
      this.props.closeModal();
    });
  }

  componentDidMount(){
    this.props.fetchSong(this.props.song);
  }

  render() {
    return (
      <div className='more-dropdown'>
        <ul>
          {this.props.openAddModal}
          <li onClick={() => this.handleDelete()} >Remove From Playlist</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[ownProps.location.pathname.split('/').pop()],

  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openAddModal: (
     <li onClick={() => dispatch(openModal('addplaylistsong'))}>
       Add To Playlist
     </li>
   ),
    fetchSong: id => dispatch(fetchSong(id)),
    removePlaylistSong: (playlistId, songId) => dispatch(removePlaylistSong(playlistId, songId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoreDropDown));
