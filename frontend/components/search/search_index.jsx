import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class SearchIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    // this.selectResponse = this.selectResponse.bind(this);
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

  matches(slice) {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }
    slice.forEach(name => {
      const chars = name.title.toLowerCase().replace(/ /g, '').split('');
      const input = this.state.inputVal.toLowerCase().replace(/ /g, '').split('');
      if (chars.includes(input.pop())){
        matches.push(name);
      }
    });
    if (matches.length === 0) {
      matches.push('No matches');
    }

    const results = matches.map((result, i) => {
     return (
       <li key={i}>{result.title}</li>
      );
    });

    return results;
  }

  nameMatches(slice) {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }
    slice.forEach(search => {
      const chars = search.name.toLowerCase().replace(/ /g, '').split('');
      const sub = search.name.slice(0, this.state.inputVal.length).toLowerCase();
      const input = this.state.inputVal.toLowerCase().replace(/ /g, '').split('');

      if (input.length === 1){
        if (chars.includes(input.pop())){
          matches.push(search);
        }
      } else {
        if (sub.toLowerCase() === input.join("")) {
          matches.push(search);
        }
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    const results = matches.map((result, i) => {
     return (
       <li key={i}>{result.name}</li>
      );
    });

    return results;
  }

  songMatches(){
    let songs;
    if(this.props.songs){
      songs = this.matches(this.props.songs);
      if (songs){
        songs = (
        <ul className='song-matches'>
          <h2 className='headers-artists'> Songs</h2>
          {songs}
        </ul>
      );
    } else {
      songs = null;
    }
    return songs;
  }
}

  albumMatches() {
    let albums;
    if(this.props.albums){
      albums = this.matches(this.props.albums);
      if (albums){
        albums = (
          <ul className='album-matches'>
            <h2 className='headers-artists'> Albums</h2>
            {albums}
          </ul>
      );
    } else {
      albums = null;
    }
    return albums;
  }
}

  artistMatches(){
    let artists;
    if(this.props.artists){
      artists = this.nameMatches(this.props.artists);
      if (artists){
        artists = (
        <ul className='artist-matches'>
          <h2 className='headers-artists'> Artists</h2>
          {artists}
        </ul>
        );
      }
    } else {
      artists = null;
    }
    return artists;
  }

  playlistMatches(){
    let playlists;
    if(this.props.playlists){
      playlists = this.matches(this.props.playlists);
      if(playlists){
        playlists = (
          <ul className='playlist-matches'>
            <h2 className='headers-artists'> Playlist</h2>
            {playlists}
          </ul>
        );
      }
    } else {
      playlists = null;
    }
    return playlists;
  }

  render () {
    return (
      <div className='search-main'>
        <div className='content-main'>
          <section className='modal-playlist'>
            <div id='search-instruction'>Search for an Artist, Song, Album, Playlist, Podcast or Episode</div>
              <input
                id='search-text'
                onChange={this.handleInput}
                value={this.state.inputVal}
                placeholder="Start typing..."/>
          </section>

          {this.songMatches()}
          {this.albumMatches()}
          {this.artistMatches()}
          {this.playlistMatches()}

        </div>
      </div>
    );
  }

}

export default SearchIndex;
