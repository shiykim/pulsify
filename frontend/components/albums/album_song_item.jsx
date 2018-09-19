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


  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render () {

    return (
      <div className='song-whole'>
        <div className='song'>
          <ul className='song-single'>
            <li id='song-image'></li>
            <li className='song-title'>{this.props.song.title}</li>
            <li id='song-option' onClick={() => this.toggleList()}></li>
            {this.state.listOpen ? <MoreDropDown show="open" song={this.props.song} onlyAdd='add' /> : null }
            <li className='song-length'>{this.props.song.length}</li>
          </ul>
        </div>
      </div>
    );
  }

}



export default AlbumSongItem;
