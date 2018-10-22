import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  componentDidMount(){
    this.props.fetchAlbums();
  }

  render () {
    let albums;
    if (this.props.albums){
      albums = this.props.albums.map( (album,i) => {
        return (
          <div key={i}>
            <li className='playlist-li'>
              <Link to={`/albums/${album.id}`}><img src={album.photoUrl}/></Link>
            </li>
            <div className='playlist-title'>{album.title}</div>
            <div className='playlist-username'>{album.artist.name}</div>
          </div>
        );
      });
    } else {
      albums = null;
    }
    return (
      <div className='browse-main'>
        <ul className='playlist-ul album-ul'>
          {albums}
        </ul>
      </div>
    );
  }
}

export default AlbumIndex;
