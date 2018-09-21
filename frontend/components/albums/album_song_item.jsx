import React from 'react';
import { connect } from 'react-redux';
import { selectSongAlbum, selectSongArtist } from '../../reducers/selectors.js';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import MoreDropDown from '../playlists/more_dropdown';
import { Link } from 'react-router-dom';

class AlbumSongItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listOpen: false
    };
  }

  handlePlay(){
    this.props.fetchPlayingSong(this.props.song);
  }

  // toggleList(){
  //   this.setState(prevState => ({
  //     listOpen: !prevState.listOpen
  //   }));
  // }
  toggleList(){
    const {index} = this.props;
    let drop = document.getElementById(`actual-album-dropdown-${index}`);
      if (drop.style.display === "none") {
          drop.style.display = "block";
      } else {
          drop.style.display = "none";
      }
  }
  render () {
    let option;
    if(this.props.dropdown === 'false'){
      option = null;
    } else {
      option = (
        <li id='song-option' onClick={() => this.toggleList()}>
          <div style={{display:"none"}} id={`actual-album-dropdown-${this.props.index}`}>
            <MoreDropDown show="open" song={this.props.song} onlyAdd='add' />
          </div>
        </li>
      );
    }

    return (
      <div className='song-whole'>
        <div className='song'>
          <ul className='song-single'>
            <li onClick={() => this.handlePlay()} id='song-image'></li>
            <li className='song-title'>{this.props.song.title}</li>
            {option}
            <li className='song-length'>{this.props.song.length}</li>
          </ul>
        </div>
      </div>
    );
  }

}



export default AlbumSongItem;
