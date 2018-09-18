import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAlbum } from '../../actions/album_actions';
class AlbumShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listOpen: false
    };
  }

  handleClickOutside(){
    this.setState({
      listOpen: false
    });
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
    this.props.fetchSongs();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchPlaylist(nextProps.match.params.id);
      this.props.fetchSongs();
    }
  }

  playlistSongs(){
    let songs;
    if (this.props.songs[0]){
      songs = (
        this.props.songs.map( song => {
          return (
            <SongItemShow song={song} />
          );
        })
      );
    } else {
      songs = null;
    }
    return songs;
  }

  render() {
    let songs;
    let album_songs;
    let album_info;

    if(this.props.artist){
      album_songs = this.props.artist.songs;
    }

    if (album_songs){
      songs = (
        <div className='pshow-songlist'>
          { this.playlistSongs() }
        </div>
      );
      album_info =  (
        <ul className='pshow-info'>
          <li id='pshow-title'>{this.props.album.title}</li>
          <li id='pshow-username'>{this.props.album.artist}</li>
          <li id='pshow-length'>{this.props.playlist.songs.length} songs</li>
          <button id='btn-pshow-play'>PLAY</button>
          <button className='navbar-images pshow-more' onClick={() => this.toggleList()} style={{backgroundImage: `url(${window.more})`}} />
          {this.state.listOpen ? <DropDownList show="open" /> : null }
        </ul>
      );
    } else {
      songs = null;
      album_info = null;
    }

    return (
      <div className='pshow-whole'>
        <div className='pshow-main'>
          <section className='pshow-img'>
            {songs}
          </section>
          {album_info}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
