import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArtist, fetchArtists } from '../../actions/artist_actions';
import { fetchPlaylists} from '../../actions/playlist_actions';
import MoreDropDown from '../playlists/more_dropdown';

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

  render() {
    let albums;
    let songs;
    let artist_albums;
    let artist_img;
    let artist_name;

    const artist = this.props.artist;
    if(this.props.artist){
      artist_albums = artist.albums;
      artist_img = artist.photoUrl;
      artist_name = artist.name.toUpperCase();
    }

    if (artist_albums){
      albums = artist.albums.map( (album,i) => {
        return(
          <section>
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
          <div className='song-whole'>
            <div className='song'>
              <ul className='song-single'>
                <li id='song-image'></li>
                <li className='song-title'>{song.title}</li>
              </ul>
            </div>
          </div>
        );
      });
    } else {
      albums = null;
      songs = null;
    }

    return (
      <div className='album-whole'>
        <div className='first-half' style={{backgroundImage: `url(${artist_img})`}} >
          <h1>{artist_name}</h1>
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchPlaylists: (id) => dispatch(fetchPlaylists()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
