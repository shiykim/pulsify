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
    if (this.props.artists){
      artists = this.props.artists.map( (artist,i) => {
        return (this.artistImage(artist));
      });
    } else {
      artists = null;
    }
    return (
      <div className='browse-main'>
        <ul className='playlist-ul album-ul'>
          {artists}
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;
