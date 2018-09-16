import React from 'react';
import { connect } from 'react-redux';
import { selectSongAlbum, selectSongArtist } from '../../reducers/selectors.js';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';

class SongItemShow extends React.Component {

  componentDidMount(){

  }


  render () {
    let playlist;
    if (this.props.artist){
      playlist =  (
        <div>
          { this.songItem() }
        </div>
      );
    } else {
      playlist = null;
    }

    return (
      {playlist}
    );
  }

}

const mapStateToProps = ({ entities: { artists, albums } }) => {
  return {
    artists: artists,
    albums: albums,
  };
};

export default connect(mapStateToProps, null)(SongItemShow);
