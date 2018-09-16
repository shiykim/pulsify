import React from 'react';
import { Link } from 'react-router-dom';
import SongItemShow from './song_item_show';

class PlaylistShow extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    this.props.fetchSongs();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchPlaylist(nextProps.match.params.id);
      this.props.fetchSongs();
    }
  }

  playlistSongs(){
    let songs;
    if (this.props.songs[0]){
      songs = (
        this.props.songs.map( song => {
          return(
            <li>
              {song.title}
              {song.artist.name}
              {song.album.title}
            </li>);
        })
      );
    } else {
      songs = null;
    }
    return songs;
  }

  render() {
    let playlist;
    if (this.props.playlist){
      playlist =  (
        <div>
          <ul className='pshow-songlist'>
            { this.playlistSongs() }
          </ul>
          <ul className='pshow-info'>
            <li id='pshow-title'>{this.props.playlist.title}</li>
            <li id='pshow-username'>{this.props.playlist.username}</li>
            <li id='pshow-length'>{this.props.playlist.song_ids.length} songs</li>
            <button id='btn-pshow-play'>PLAY</button>
            {this.props.openModal}
            <div onClick={this.props.closeModal} className="close-x"></div>
          </ul>
        </div>
      );
    } else {
      playlist = null;
    }

    return (
      <div className='pshow-whole'>
        <div className='pshow-main'>
          <section className='pshow-img'>
            {playlist}
          </section>
        </div>
      </div>
    );
  }
}


export default PlaylistShow;
