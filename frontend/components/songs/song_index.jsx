import React from 'react';
import { Link } from 'react-router-dom';
import SongItemIndex from './song_item_index';

class SongIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSongs();
    this.props.fetchArtists();
    this.props.fetchPlaylists();
  }

  render () {
    let songs;
    if (this.props.songs){
      songs = (
        this.props.songs.map( (song,i) => {
          return (
            <SongItemIndex song={song} key={i} index={i}
              fetchPlayingSong={this.props.fetchPlayingSong}
              fetchSong={this.props.fetchSong}
              queue={this.props.songs}
              receiveQueue={this.props.receiveQueue}/>
          );
        })
      );
    } else {
      songs = null;
    }

    return (
      <div className='songs-index'>
        {songs}
      </div>
    );
  }
}

export default SongIndex;
