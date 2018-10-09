import React from 'react';
import { Link } from 'react-router-dom';
import SongItemIndex from '../songs/song_item_index';

class DailyMixIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSongs();
    this.props.fetchArtists();
  }

  render () {
    let songs;
    let dailyMix = this.props.songs;
    if (dailyMix.length > 0){
      songs = (
        this.props.songs.map( (song,i) => {
          return (
            <SongItemIndex song={song} key={i} index={i}
              fetchPlayingSong={this.props.fetchPlayingSong}
              fetchSong={this.props.fetchSong}
              queue={dailyMix}
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

export default DailyMixIndex;
