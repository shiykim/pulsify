import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class SearchIndex extends React.Component {

  render () {
    return (
      <div className='search-main'>
        <div className='content-main'>
          <section className='modal-playlist'>
            <div id='search-instruction'>Search for an Artist, Song, Album, Playlist, Podcast or Episode</div>
            <input id='search-text' placeholder="Start typing..."/>
          </section>
        </div>
      </div>
    );
  }

}

export default SearchIndex;
