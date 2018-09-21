import React from 'react';
import { Link } from 'react-router-dom';
import SongItemShow from './song_item_show';
import DropDownList from './drop_down_list';

class PlaylistShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listOpen: false
    };
  }

  handlePlay(){
    if (this.props.songs){
      this.props.fetchPlayingSong(this.props.songs[0]);
    }
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    this.props.fetchSongs();
    this.props.fetchPlaylists();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchPlaylist(nextProps.match.params.id);
      this.props.fetchSongs();
      this.props.fetchPlaylists();
    }
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  playlistSongs(){
    let songs;
    if (this.props.songs[0]){
      songs = (
        this.props.songs.map( (song,i) => {
          return (
            <SongItemShow key={i} index={i} song={song} />
          );
        })
      );
    } else {
      songs = null;
    }
    return songs;
  }

  playlistImage(playlist){
    let cover = playlist.photoUrl;
    if (cover) {
      return (playlist.photoUrl);
    } else {
      return (window.playlist_default);
    }
  }

  render() {
    let playlist;
    let playlistsongs;
    let playlistCover;
    let updateDelete;

    if (this.props.playlist){

      if(this.props.playlist.author_id === this.props.currentUser.id){
        updateDelete = (
          <div>
            <button className='navbar-images pshow-more' onClick={() => this.toggleList()} style={{backgroundImage: `url(${window.more})`}} />
            {this.state.listOpen ? <DropDownList show="open" /> : null }
          </div>
        );
      } else {
        updateDelete = null;
      }


      playlistsongs = (
        <div className='pshow-songlist'>
          { this.playlistSongs() }
        </div>
      );
      playlistCover = this.playlistImage(this.props.playlist);
      playlist =  (
        <div className='pshow-main'>
          <section className='pshow-img' style={{backgroundImage: `url(${playlistCover})`}} >
            <ul className='pshow-info'>
              <li id='pshow-title'>{this.props.playlist.title}</li>
              <li id='pshow-username'>{this.props.playlist.username}</li>
              <li id='pshow-length'>{this.props.playlist.song_ids.length} songs</li>
              {updateDelete}
              {this.state.listOpen ? <DropDownList show="open" /> : null }
            </ul>
        </section>
        {playlistsongs}
      </div>
      );

    } else {
      playlist = null;
      playlistsongs = null;
    }

    return (
      <div className='pshow-whole'>
        {playlist}
      </div>
    );
  }
}


export default PlaylistShow;
