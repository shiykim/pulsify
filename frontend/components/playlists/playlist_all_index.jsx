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

  playlistImage(playlist, i){
    let cover = playlist.photoUrl;
    if (cover) {
      return (
        <div key={i}>
          <Link to={`/collection/playlists/${playlist.id}`}>
          <li className='playlist-li' style={{backgroundImage: `url(${playlist.photoUrl})`}} />
        </Link>
          <div className='playlist-title'>{playlist.title}</div>
          <div className='playlist-username'>{playlist.username}</div>
        </div>
    );
    } else {
      return (
        <div>
          <li className='playlist-li'>
            <Link to={`/collection/playlists/${playlist.id}`}><img id='p-images' src={window.playlist_default}/></Link>
          </li>
          <div className='playlist-title'>{playlist.title}</div>
          <div className='playlist-username'>{playlist.username}</div>
        </div>
      );
    }
  }

  render () {
    let playlists;
    if (this.props.playlists){
      playlists = this.props.playlists.map( (playlist,i) => {
        return (this.playlistImage(playlist, i));
      });
    } else {
      playlists = null;
    }
    return (
      <div className='browse-main'>
        <ul className='playlist-ul playlist-all'>
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
