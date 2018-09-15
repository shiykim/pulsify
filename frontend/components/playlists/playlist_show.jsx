import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    this.props.fetchSongs();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchPlaylist(nextProps.match.params.id);
    }
  }

  playlistSongs(){
    let songs;
    if (this.props.playlist.song_ids){
      const playlist_songs = [];
      this.props.playlist.song_ids.map (id => {
        playlist_songs.push(this.props.songs[id]);
      });

      songs = (
        playlist_songs.map( song => {
          return(<li>{song.title}</li>);
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
        <ul className='pshow-info'>
          <li id='pshow-title'>{this.props.playlist.title}</li>
          <li id='pshow-username'>{this.props.playlist.username}</li>
          <li id='pshow-songs'>{this.props.playlist.song_ids.length} songs</li>
        </ul>
        {this.playlistSongs()}
        </div>
      );
    } else {
      playlist = null;
    }

    return (
      <div className='pshow-whole'>
        <div className='pshow-main'>
        <section className='pshow-img'> </section>
        <section>
          {playlist}
        </section>
        </div>
      </div>
    );
  }
}


export default PlaylistShow;
