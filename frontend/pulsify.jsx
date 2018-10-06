import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {follow, unfollow} from './actions/follow_actions';
import { addPlaylistSong, removePlaylistSong } from './actions/song_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
   const preloadedState = {
     session: { id: window.currentUser.id },
     entities: {
       users: { [window.currentUser.id]: window.currentUser }
     }
   };
   store = configureStore(preloadedState);
   delete window.currentUser;
  } else {
   store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.follow = follow;
  window.unfollow = unfollow;
  window.addPlaylistSong = addPlaylistSong;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
