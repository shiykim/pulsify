import { connect } from 'react-redux';
import React from 'react';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import SearchIndex from './search_index';

const mapStateToProps = ({ entities: { playlists, songs, artists, albums }}) => {
  return {
    playlists: Object.values(playlists),
    songs: Object.values(songs),
    artists: Object.values(artists),
    albums: Object.values(albums),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
