import React from 'react';
import { connect } from 'react-redux';
import { selectSongAlbum, selectSongArtist } from '../../reducers/selectors.js';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import MoreDropDown from './more_dropdown';

class SongItemShow extends React.Component {

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
            {this.state.listOpen ? <MoreDropDown show="open" song={this.props.song} /> : null }
            <li className='song-length'>{this.props.song.length}</li>
          </ul>
          <ul className='artist-album-list'>
            <li className='song-artist'>{this.props.song.artist.name}</li>
            <li className='song-separator'>·</li>
            <li className='song-album'>{this.props.song.album.title}</li>
          </ul>
        </div>
      </div>
    );
  }

}


const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchSongs: () => dispatch(fetchSongs()),
  };
};


export default connect(null, mapDispatchToProps)(SongItemShow);
