import React from 'react';
import { Link } from 'react-router-dom';

class SongIndex extends React.Component {

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

  componentDidMount(){
    this.props.fetchSongs();
  }

  render () {
    let songs;
    if (this.props.songs){
      songs = this.props.songs.map( (song,i) => {
        return(
          <div className='song-index'>
            <ul className='song-individual'>
              <li id='song-image'></li>
              <li className='song-title'>{song.title}</li>
              <li id='song-option' onClick={() => this.toggleList()}></li>
              {this.state.listOpen ? <MoreDropDown show="open" song={song} /> : null }
              <li className='song-length'>{song.length}</li>
            </ul>
            <ul className='artist-album-list'>
              <li className='song-artist'>{song.artist.name}</li>
              <li className='song-separator'>·</li>
              <li className='song-album'>{song.album.title}</li>
            </ul>
        </div>)

      });
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

export default SongIndex;
