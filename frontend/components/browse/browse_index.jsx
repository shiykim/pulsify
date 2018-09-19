import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import BrowseContent from './browse_content';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import HomeIndex from '../home/home_index';
import SearchIndexContainer from '../search/search_index_container';
import ArtistShow from '../artists/artist_show';
import AlbumShow from '../albums/album_show';

class Browse extends React.Component {

  // componentDidMount() {
  //   this.props.fetchArtists();
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchArtists();
  // }

  render () {

    return (

      <div>
        <div className='navbar-main'>
          <section className='navbar-content'>
            <ul className='navbar-header'>
              <li>
                <div className='navbar-logo' style={{backgroundImage: `url(${window.whitelogo})`}}/>
                <h1 id='navbar-header'>Pulsify</h1>
            </li>
            </ul>
            <ul className='navbar-links'>
              <li>
                <div className='navbar-images' style={{backgroundImage: `url(${window.magnifyglass})`}}/>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <div className='navbar-images' style={{backgroundImage: `url(${window.home})`}}/>
                <Link to="/browse">Home</Link>
              </li>
              <li>
                <div className='navbar-images' style={{backgroundImage: `url(${window.library})`}}/>
                <Link to="/collection/playlists">Your Library</Link>
              </li>
            </ul>
            <section className='navbar-user'>
              <h1 className='na'>hello! {this.props.currentUser.username}</h1>
              <button onClick={this.props.logout}>Log Out</button>
            </section>
          </section>
        </div>
        <Switch>
          <ProtectedRoute path="/collection/playlists/:id" component={PlaylistShowContainer}/>
          <ProtectedRoute path="/artists/:id" component={ArtistShow}/>
          <ProtectedRoute path="/albums/:id" component={AlbumShow}/>
          <ProtectedRoute path="/collection" component={BrowseContent} />
          <ProtectedRoute path="/search" component={SearchIndexContainer} />
          <ProtectedRoute path="/browse" component={HomeIndex} />
        </Switch>
    </div>
    );
  }
}



export default Browse;
