import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArtist, fetchArtists } from '../../actions/artist_actions';

class ArtistShow extends React.Component {

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
    const artist = this.props.artist;
    if(this.props.artist){
      artist_albums = this.props.artist.albums;
    }

    if (artist_albums){
      albums = this.props.artist.albums.map( (album,i) => {
        return(<li key={`album-${i}`}>{album.title}</li>);
      })
      songs = this.props.artist.songs.map( (song,i) => {
        return(<li key={`song-${i}`}>{song.title}</li>);
      })
    } else {
      albums = null;
      songs = null;
    }
    
    return (
      <div>
        <ul>
          {albums}
        </ul>

        <ul>
          {songs}
        </ul>
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
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
