import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { updatePlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router';

class UpdatePlaylist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      id: this.props.playlist.id
    };
  }

  update(field) {
   return (e) => {
     this.setState({[field]: e.target.value});
   };
  }

  handleUpdate(){
    this.props.updatePlaylist(this.state).then((playlist) => {
      this.props.closeModal();
      this.props.history.push(`/collection/playlists/${playlist.playlist.id}`);
    });
    this.state.title = '';
  }

  render () {
    if (!this.props.modal) {
      return null;
    }

    return (
      <div>
        <div onClick={() => this.props.closeModal()} className="close-x" id='modal-close'>X</div>
        <h1 id="modal-header"> Update playlist</h1>
        <section className='modal-playlist'>
          <div id='modal-instruction'>Playlist Name</div>
          <input id='playlist-title' placeholder="Start typing..." value={this.state.title} onChange={this.update('title')} />
        </section>
        <button onClick={() => this.props.closeModal()} className="close-x btn-modal-cancel">CANCEL</button>
        <button onClick={() => this.handleUpdate()} className="btn-modal-submit">CREATE</button>
      </div>
    );
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    playlist: state.playlists[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updatePlaylist: id => dispatch(updatePlaylist(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePlaylist));
