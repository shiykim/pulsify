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
      playlist =  (
        <ul className='pshow-info'>
          <li id='pshow-title'>{this.props.playlist.title}</li>
          <li id='pshow-username'>{this.props.playlist.username}</li>
          <li id='pshow-songs'>{this.props.playlist.song_ids.length} songs</li>
        </ul>
      );
    } else {
      playlist = null;
    }

    return (
      <div className='pshow-whole'>
        <div className='pshow-main'>
        <section className='pshow-img'> </section>
        <section>
          {playlist}
        </section>
        </div>
      </div>
    );
  }
}


export default PlaylistShow;
