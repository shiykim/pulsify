import React from 'react';
import { Link } from 'react-router-dom';
import SongItemIndex from '../songs/song_item_index';

class DailyMixIndex extends React.Component {

  componentDidMount(){
    this.props.fetchDailyMix();
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
      songs = (
        <div>
          <ul className='mix-alert'>
            <li>Please follow atleast 5 artists so that we can more accurately provide song suggestions.</li>
            <li><img className='wifi-image' src={window.wifi}/></li>
          </ul>
        </div>
      );
    }
    return (
      <div className='songs-index'>
        <div className='daily-ins'> Play the music you love, without the effort. Packed with your favorites and new discoveries.</div>
        {songs}
      </div>
    );
  }
}

export default DailyMixIndex;
