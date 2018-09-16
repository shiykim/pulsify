import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { deletePlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router';

class DeletePlaylist extends React.Component {

  handleDelete(){
    this.props.deletePlaylist(this.props.playlist.id).then(() => {
      this.props.closeModal();
      this.props.history.push(`/collection/playlists/`);
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
          <h1 id="modal-header">Do you really want to delete this playlist?</h1>
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
    playlist: state.entities.playlists[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deletePlaylist: id => dispatch(deletePlaylist(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeletePlaylist));
