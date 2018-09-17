import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  componentDidMount(){
    this.props.fetchAlbums();
  }

  render () {
    let albums;
    if (this.props.albums){
      albums = this.props.albums.map( album => {
        return (<li className='album-li'> <img src={album.photoUrl} /></li>);
      });
    } else {
      albums = null;
    }
    return (
      <div className='browse-main'>
        <ul>
          {albums}
        </ul>
      </div>
    );
  }
}

export default AlbumIndex;
