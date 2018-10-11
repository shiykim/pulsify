import React from 'react';
import { connect } from 'react-redux';
import { selectSongAlbum, selectSongArtist } from '../../reducers/selectors.js';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import MoreDropDown from '../playlists/more_dropdown';
import { Link } from 'react-router-dom';

class SongItemIndex extends React.Component {

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
    let drop = document.getElementById(`actual-song-dropdown-${index}`);
      if (drop.style.display === "none") {
          drop.style.display = "block";
      } else {
          drop.style.display = "none";
      }
  }

  render () {
    let songs;
    if (this.setState.listOpen){
      this.toggleList();
    }
    if(this.props.song){
      // debugger
      songs = (
        <div className='song-whole'>
          <div className='song'>
            <ul className='song-single'>
              <li onClick={() => this.handlePlay()} id='songs-image'></li>
              <li className='song-title'>{this.props.song.title}</li>
              <li id='song-option' onClick={() => this.toggleList()}>
                <div style={{display:"none"}} id={`actual-song-dropdown-${this.props.index}`}>
                  <MoreDropDown show="open" song={this.props.song} onlyAdd='add' />
                </div>
              </li>
            </ul>

            <ul className='artist-album-list'>
              <li className='song-artist'><Link to={`/artists/${this.props.song.artist.id}`}>{this.props.song.artist.name}</Link></li>
              <li className='song-separator'>·</li>
              <li className='song-album'><Link to={`/albums/${this.props.song.album.id}`}>{this.props.song.album.title}</Link></li>
            </ul>
          </div>
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

export default SongItemIndex;
