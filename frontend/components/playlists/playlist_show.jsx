import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.playlist.id != nextProps.match.params.id) {
  //     this.props.fetchPlaylist(nextProps.match.params.id);
  //   }
  // }

  render() {
    let playlist;
    if (this.props.playlist){
      playlist = this.props.playlist.title;
    } else {
      playlist = null;
    }
    return (
      <div class='pshow-main'>
        {playlist}
      </div>
    );
  }
}

export default PlaylistShow;
