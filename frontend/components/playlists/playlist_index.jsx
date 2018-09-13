import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndex extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  render () {
    let playlists;
    if (this.props.playlists){
      playlists = this.props.playlists.map( playlist => {
        if (playlist.author_id === this.currentUser.id){
          return (<li className='playlist-li'> { playlist.title }</li>);
        }
      });
    } else {
      playlists = null;
    }
    return (
      <div className='browse-main'>
        <ul className='playlist-nav'>
          <li>PLAYLISTS</li>
          <li>YOUR DAILY MIX</li>
          <li>SONGS</li>
          <li>ALBUMS</li>
          <li>ARTISTS</li>
        </ul>
        <button type="button" id="btn-playlist-new">NEW PLAYLIST</button>
        <ul className='playlist-ul'>
        {playlists}
        </ul>
      </div>
    );
  }
}

export default PlaylistIndex;
