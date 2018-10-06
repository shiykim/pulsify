import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MoreDropDown from '../playlists/more_dropdown';
import AlbumSongItem from '../albums/album_song_item';
import { fetchArtist, fetchArtists } from '../../actions/artist_actions';
import { fetchPlaylists} from '../../actions/playlist_actions';
import { fetchPlayingSong, receiveQueue } from '../../actions/mediaplayer_actions';
import { unfollow, follow } from '../../actions/follow_actions';

class ArtistShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchArtist(nextProps.match.params.id);
    }
  }

  handleFollow(){
    this.props.follow(parseInt(this.props.match.params.id), 'artists');
  }

  handleUnfollow(){
    this.props.unfollow(parseInt(this.props.match.params.id), 'artists');
  }

  render() {
    let albums;
    let songs;
    let artist_albums;
    let artist_img;
    let artist_name;
    let follow;


    if (this.props.user.includes(parseInt(this.props.match.params.id))){
      follow = <button onClick={() => this.handleUnfollow()} id='btn-pshow-play'>Unfollow</button>;
    } else {
      follow = <button onClick={() => this.handleFollow()} id='btn-pshow-play'>Follow</button>;
    }

    const artist = this.props.artist;
    if(this.props.artist){
      artist_albums = artist.albums;
      artist_img = artist.photoUrl;
      artist_name = artist.name.toUpperCase();
    }

    if (artist_albums){
      albums = artist.albums.map( (album,i) => {
        return(
          <section key={i}>
            <Link to={`/albums/${album.id}`}>
              <img className='artist-album' src={album.photoUrl} />
              <div className='artist-album-title'>{album.title}</div>
            </Link>
            <div className='artist-name'>{artist.name}</div>
          </section>
        );
      });
      songs = artist.songs.map( (song,i) => {
        return (
          <AlbumSongItem key={i} song={song}
            fetchPlayingSong={this.props.fetchPlayingSong}
            dropdown="false"
            queue={this.props.artist.songs}
            receiveQueue={this.props.receiveQueue} />
        );
      });
    } else {
      albums = null;
      songs = null;
    }

    return (
      <div className='artist-whole'>
        <div className='first-half' style={{backgroundImage: `url(${artist_img})`}} >
          <h1>{artist_name}</h1>
          {follow}
        </div>
        <div className='second-half'>
          <h2 className='headers-artists'> Albums</h2>
          <ul className='artist-albums'>
            {albums}
          </ul>
        </div>
        <div className='third-half'>
          <h2 className='headers-artists'>Songs</h2>
            <div className='artist-songs'>
                {songs}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.id],
    user: state.entities.users[state.session.id].followedArtist,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchPlaylists: id => dispatch(fetchPlaylists()),
    fetchPlayingSong: id => dispatch(fetchPlayingSong(id)),
    receiveQueue: queue => dispatch(receiveQueue(queue)),
    follow: (followableId, followableType) => dispatch(follow(followableId, followableType)),
    unfollow: (followableId, followableType) => dispatch(unfollow(followableId, followableType)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
