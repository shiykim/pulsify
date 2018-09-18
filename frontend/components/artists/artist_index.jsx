import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndex extends React.Component {
  componentDidMount(){
    this.props.fetchArtists();
  }

  artistImage(artist){
    let cover = artist.photoUrl;
    if (cover) {
      return (
        <li className='playlist-li'>
          <Link to={`/artists/${artist.id}`}><img src={artist.photoUrl} />
          <div className='playlist-title'>{artist.name}</div>
        </Link>
      </li>
      );
    }
  }

  render () {
    let artists;
    if (this.props.artists){
      artists = this.props.artists.map( (artist,i) => {
        return (this.artistImage(artist));
      });
    } else {
      artists = null;
    }
    return (
      <div className='browse-main'>
        <ul>
          {artists}
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;
