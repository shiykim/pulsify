import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import AlbumIndex from '../albums/album_index';
import ArtistsIndex from '../artists/artist_index';
import PlaylistIndex from '../playlists/playlist_all_index';
import SongItemIndex from '../songs/song_item_index';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.props.fetchArtists();
    this.props.fetchPlaylists();
    this.props.fetchSongs();
    this.props.fetchAlbums();
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches(slice){
    return slice.filter((element) => element.title.toLowerCase().includes(`${this.state.inputVal.toLowerCase()}`));
  }

  nameMatch(slice){
    return slice.filter((element) => element.name.toLowerCase().includes(`${this.state.inputVal.toLowerCase()}`));
  }

  songMatches(){
    let searchSongs;
    let songDisplay;
    if(this.props.songs){
      searchSongs = this.matches(this.props.songs);
      if (searchSongs.length > 0){
        songDisplay = searchSongs.map((song, i) => {
          // debugger
          return(
          <SongItemIndex song={song} key={i} index={i}
            fetchPlayingSong={this.props.fetchPlayingSong}
            fetchSong={this.props.fetchSong}
            queue={searchSongs}
            receiveQueue={this.props.receiveQueue}/>
          );
        });
        searchSongs = (
        <ul className='matches'>
          <h2 >Songs</h2>
            <div className='songs-index'>
              {songDisplay}
            </div>
        </ul>
      );
    } else {
      searchSongs = null;
    }
    return searchSongs;
  }
}

  albumMatches() {
    let searchAlbums;
    if(this.props.albums){
      searchAlbums = this.matches(this.props.albums);
      if (searchAlbums.length > 0){
        searchAlbums = (
          <ul className='matches'>
            <h2>Albums</h2>
            <AlbumIndex albums={searchAlbums} fetchAlbums={this.props.fetchAlbums}/>
          </ul>
        );
      } else {
        searchAlbums = null;
      }
      return searchAlbums;
    }
  }

  artistMatches(){
    let searchArtists;
    if(this.props.artists){
      searchArtists = this.nameMatch(this.props.artists);
      if (searchArtists.length > 0){
        searchArtists = (
        <ul className='matches'>
          <h2>Artists</h2>
          <ArtistsIndex artists={searchArtists} fetchArtists={this.props.fetchArtists}/>
        </ul>
        );
      } else {
        searchArtists = null;
      }
      return searchArtists;
    }
  }

  playlistMatches(){
    let searchPlaylists;
    if(this.props.playlists){
      searchPlaylists = this.matches(this.props.playlists);
      if(searchPlaylists.length > 0){
        searchPlaylists = (
          <ul className='matches'>
            <h2>Playlist</h2>
              <PlaylistIndex playlists={searchPlaylists} fetchPlaylists={this.props.fetchPlaylists}/>
          </ul>
        );
      } else {
        searchPlaylists = null;
      }
      return searchPlaylists;
    }
  }

  render () {
    let topSongs;
    let topAlbums;
    let topArtists;
    let topPlaylists;
    if (this.state.inputVal){
      topAlbums = this.albumMatches();
      topSongs = this.songMatches();
      topArtists = this.artistMatches();
      topPlaylists = this.playlistMatches();
    }
    return (
      <div className='search-main'>
        <div className='content-main'>
          <section className='modal-playlist search-bar'>
            <div id='search-instruction'>Search for an Artist, Song, Album, or Playlist.</div>
              <input
                id='search-text'
                onChange={this.handleInput}
                value={this.state.inputVal}
                placeholder="Start typing..."/>
          </section>
          {topAlbums}
          {topArtists}
          {topPlaylists}
          {topSongs}
        </div>
      </div>
    );
  }

}

export default SearchIndex;
