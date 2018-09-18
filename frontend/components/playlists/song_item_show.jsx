import React from 'react';
import { connect } from 'react-redux';
import { selectSongAlbum, selectSongArtist } from '../../reducers/selectors.js';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import MoreDropDown from './more_dropdown';
import { Link } from 'react-router-dom';

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
    let songs;
    if(this.props.song){
      songs = (
        <div className='song'>
          <ul className='song-single'>
            <li id='song-image'></li>
            <li className='song-title'>{this.props.song.title}</li>
            <li id='song-option' onClick={() => this.toggleList()}></li>
            {this.state.listOpen ? <MoreDropDown show="open" song={this.props.song} /> : null }
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
  };
};


export default connect(null, mapDispatchToProps)(SongItemShow);
