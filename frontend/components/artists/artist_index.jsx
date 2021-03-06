import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndex extends React.Component {
  componentDidMount(){
    this.props.fetchArtists();
  }

  artistImage(artist, i){
    let cover = artist.photoUrl;
    if (cover) {
      return (
        <div>
          <Link to={`/artists/${artist.id}`}>
            <li className='artist-li' style={{backgroundImage: `url(${artist.photoUrl})`}} ></li>
          </Link>
          <div className='playlist-title'>{artist.name}</div>
        </div>
      );
    }
  }

  render () {
    let artists;
    if (this.props.artists.length > 0){
      artists = this.props.artists.map( (artist) => {
        return (this.artistImage(artist));
      });
    } else {
      artists = null;
    }
    return (
      <div className='browse-main'>
        <ul className='playlist-ul album-ul artist-ul'>
          {artists}
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;
