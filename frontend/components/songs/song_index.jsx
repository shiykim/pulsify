import React from 'react';
import { Link } from 'react-router-dom';

class SongIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSongs();
  }

  render () {
    let songs;
    if (this.props.songs){
      songs = this.props.songs.map( song => {
        return (<li className='song-li'> { song.title }</li>);
      });
    } else {
      songs = null;
    }
    return (
      <div className='songs-main'>
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}

export default SongIndex;
