import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSongAlbum, selectSongArtist } from '../../reducers/selectors.js';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlayingSong } from '../../actions/mediaplayer_actions';
import { fetchSong } from '../../actions/song_actions';
import MoreDropDown from './more_dropdown';

class SongItemShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listOpen: false
    };
  }

  handlePlay(){
    this.props.receiveQueue(this.props.queue);
    this.props.fetchPlayingSong(this.props.song);
  }

  toggleList(){
    this.props.fetchSong(this.props.song);
    const {index} = this.props;
    let drop = document.getElementById(`actual-more-dropdown-${index}`);
      if (drop.style.display === "none") {
          drop.style.display = "block";
      } else {
          drop.style.display = "none";
      }
  }

  render () {
    let songs;
    let dropDown;
    let pauseToggle;
    
    if (this.props.onlyAdd){
      dropDown = <MoreDropDown show="open" song={this.props.song} onlyAdd='add' />;
    } else {
      dropDown = <MoreDropDown show="open" song={this.props.song}/>;
    }

    if(this.props.song){
      songs = (
        <div className='song'>
          <ul className='song-single'>
            <li onClick={() => this.handlePlay()} id='song-image'></li>
            <li className='song-title'>{this.props.song.title}</li>
            <li id='song-option' onClick={() => this.toggleList()}>
              <div style={{display:"none"}} id={`actual-more-dropdown-${this.props.index}`}>
                {dropDown}
              </div>
            </li>
            <li className='song-length'>{this.props.song.length}</li>
          </ul>
          <ul className='artist-album-list'>
            <li className='song-artist'><Link to={`/artists/${this.props.song.artist.id}`}>{this.props.song.artist.name}</Link></li>
            <li className='song-separator'>·</li>
            <li className='song-album'><Link to={`/albums/${this.props.song.album.id}`}>{this.props.song.album.title}</Link></li>
          </ul>
        </div>
      );
    } else {
      songs = null;
    }

    return (
      <div className='song-whole'>
        {songs}
      </div>
    );
  }

}


const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
  };
};


export default connect(null, mapDispatchToProps)(SongItemShow);
