import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SongItemIndex from '../songs/song_item_index';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlayingSong, receiveQueue } from '../../actions/mediaplayer_actions';

class QueueIndex extends React.Component {

  render () {
    let queue;
    let songs;

    if (this.props.songs.length === 0) {
      queue = (
        <div className='queue-alert'>
          <h2>There is nothing in your queue!</h2>
          <img className='wifi-image' src={window.wifi}/>
        </div>
      );
    } else {
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

      queue = (
        <div>
          <h2 className='now-playing'>Now Playing</h2>
          <section className='queue-playing'>
            <SongItemIndex song={this.props.currentSong}
              fetchPlayingSong={this.props.fetchPlayingSong}
              fetchSong={this.props.fetchSong}
              queue={this.props.songs}
              receiveQueue={this.props.receiveQueue}/>
          </section>
          <section className='queue-next'>
            <h2>Next Up</h2>
              <div className='songs-index'>
                {songs}
              </div>
          </section>
        </div>
      );
    }

    return (
      <div className='queue-index'>
        <h1>Play Queue</h1>
        {queue}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let allSongs = Object.values(state.ui.mediaplayer.queue);
  return {
    songs: allSongs.slice(state.ui.mediaplayer.queue_idx + 1, allSongs.length),
    currentSong: state.ui.mediaplayer.playingSong,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
    fetchSong: id => dispatch(fetchSong(id)),
    receiveQueue: queue => dispatch(receiveQueue(queue)),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QueueIndex);
