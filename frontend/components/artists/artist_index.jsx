import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndex extends React.Component {
  componentDidMount(){
    this.props.fetchArtists();
  }

  render () {
    let artists;
    if (this.props.artists){
      artists = this.props.artists.map( (artist,i) => {
        return (<li className='song-li' key={`artist-${i}`}> { artist.name }</li>);
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
