import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';

class Modal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
  }

  update(field) {
   return (e) => {
     this.setState({[field]: e.target.value});
   };
  }

  render () {
    if (!this.props.modal) {
      return null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div onClick={() => this.props.closeModal()} className="close-x" id='modal-close'>X</div>
          <h1 id="modal-header"> Create new playlist</h1>
          <section className='modal-playlist'>
            <h3 id='modal-instruction'>Playlist Name</h3>
            <input id='playlist-title' placeholder="Start typing..." value={this.state.title} onChange={this.update('title')} />
          </section>
          <button onClick={() => this.props.closeModal()} className="close-x btn-modal-cancel">CANCEL</button>
          <button onClick={() => this.props.createPlaylist(this.state)} className="btn-modal-submit">CREATE</button>
        </div>
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
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
