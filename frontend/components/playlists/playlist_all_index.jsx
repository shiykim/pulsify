import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShowContainer from './playlist_show_container';
import { ProtectedRoute } from '../../util/route_util';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';


class PlaylistAllIndex extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  playlistImage(playlist){
    let cover = playlist.photoUrl;
    if (cover) {
      return (
        <li className='playlist-li'>
          <Link to={`/collection/playlists/${playlist.id}`}><img src={playlist.photoUrl} />
          <div className='playlist-title'>{playlist.title}</div>
          <div className='playlist-title'>{playlist.username}</div>
          </Link>
        </li>
      );
    } else {
      return (
        <li className='playlist-li'>
          <Link to={`/collection/playlists/${playlist.id}`}><img src={window.playlist_default}/>
          <div className='playlist-title'>{playlist.title}</div>
          <div className='playlist-title'>{playlist.username}</div>
          </Link>
        </li>
      );
    }
  }

  render () {
    let playlists;
    if (this.props.playlists){
      playlists = this.props.playlists.map( playlist => {
        return (this.playlistImage(playlist));
      });
    } else {
      playlists = null;
    }
    return (
      <div className='browse-main'>
        <ul className='playlist-ul'>
        {playlists}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ session, entities: { playlists, users }}) => {
  return {
    playlists: Object.values(playlists),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistAllIndex);
