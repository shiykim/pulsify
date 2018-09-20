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
        this.props.songs.map( song => {
          return (
            <SongItemIndex song={song} fetchPlayingSong={this.props.fetchPlayingSong} />
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
