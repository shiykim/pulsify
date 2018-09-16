import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

class DropDownList extends React.Component {

  render() {
    return (
      <div className='playlist-dropdown'>
        <ul>
          {this.props.openUpdateModal}
          {this.props.openDeleteModal}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openUpdateModal: (
     <li onClick={() => dispatch(openModal('updateplaylist'))}>
       Update Title
     </li>
   ),
    openDeleteModal: (
     <li onClick={() => dispatch(openModal('deleteplaylist'))}>
       Delete Playlist
     </li>
   )
  };
};

export default connect(null, mapDispatchToProps)(DropDownList);
