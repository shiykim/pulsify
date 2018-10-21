import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { fetchSong, removePlaylistSong } from '../../actions/song_actions';
import { withRouter } from 'react-router';

class MoreDropDown extends React.Component {

  handleDelete(){
    this.props.removePlaylistSong(this.props.playlist.id, this.props.song.id).then(() => {
      this.props.fetchSong(this.props.song);
    });
  }
  //
  // componentDidMount(){
  //   this.props.fetchSong(this.props.song);
  // }

  render() {
    let remove;
    if (!this.props.onlyAdd){
      remove = <li onClick={() => this.handleDelete()}> Remove From Playlist</li>;
    } else {
      remove = null;
    }
    return (
      <div className='more-dropdown'>
        <ul>
          {this.props.openAddModal}
          {remove}
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
    removePlaylistSong: (playlistId, songId) => dispatch(removePlaylistSong(playlistId, songId)),
    fetchSong: id => dispatch(fetchSong(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoreDropDown));
