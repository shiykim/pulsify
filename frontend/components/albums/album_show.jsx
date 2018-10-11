import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchSong } from '../../actions/song_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchPlayingSong, receiveQueue } from '../../actions/mediaplayer_actions';
import { follow, unfollow } from '../../actions/follow_actions';
import AlbumSongItem from './album_song_item';

class AlbumShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listOpen: false
    };
  }

  handlePlay(){
    if (this.props.album.songs){
      this.props.receiveQueue(this.props.album.songs);
      this.props.fetchPlayingSong(this.props.album.songs[0]);
    }
  }

  handleFollow(){
    this.props.follow(parseInt(this.props.match.params.id), 'albums');
  }

  handleUnfollow(){
    this.props.unfollow(parseInt(this.props.match.params.id), 'albums');
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
    this.props.fetchPlaylists();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchAlbum(nextProps.match.params.id);
      this.props.fetchPlaylists();
    }
  }

  albumSongs(){
    let songs;
    if (this.props.album.songs){
      songs = (
        this.props.album.songs.map( (song,i) => {
          return (
            <AlbumSongItem key={i}
              index={i}
              song={song}
              fetchPlayingSong={this.props.fetchPlayingSong}
              fetchSong={this.props.fetchSong}
              queue={this.props.album.songs}
              receiveQueue={this.props.receiveQueue} />
          );
        })
      );
    } else {
      songs = null;
    }
    return songs;
  }

  render() {
    let album_info;
    let album_songs;
    let follow;

    if(this.props.album){
      album_songs = this.props.album.songs;
    }

    if (this.props.user.includes(parseInt(this.props.match.params.id))){
      follow = <button onClick={() => this.handleUnfollow()} id='btn-follow'>UNFOLLOW</button>;
    } else {
      follow = <button onClick={() => this.handleFollow()} id='btn-follow'>FOLLOW</button>;
    }

    if(album_songs){

      album_songs = (
        <div className='pshow-songlist'>
          { this.albumSongs() }
        </div>
      );

      album_info = (
        <div className='pshow-main'>
          <section className='pshow-img' style={{backgroundImage: `url(${this.props.album.photoUrl})`}} >
            <ul className='pshow-info'>
              <li id='pshow-title'>{this.props.album.title}</li>
              <Link to={`/artists/${this.props.album.artist.id}`}>
                <li id='pshow-username'>{this.props.album.artist.name}</li>
              </Link>
              <li id='pshow-length'>{this.props.album.release_year}</li>
              <button onClick={() => this.handlePlay()} id='btn-pshow-play'>PLAY</button>
              {follow}
            </ul>
          </section>
          {album_songs}
        </div>
      );

    } else {
      album_info = null;
      album_songs = null;
    }

    return (
      <div className='album-whole'>
        {album_info}
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.id],
    queue: Object.values(state.entities.songs),
    user: state.entities.users[state.session.id].followedAlbum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveQueue: (queue) => dispatch(receiveQueue(queue)),
    follow: (followableId, followableType) => dispatch(follow(followableId, followableType)),
    unfollow: (followableId, followableType) => dispatch(unfollow(followableId, followableType)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
