import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import { createPlaylist, updatePlaylist, deletePlaylist } from './actions/playlist_actions';

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
  window.createPlaylist = createPlaylist;
  window.updatePlaylist = updatePlaylist;
  window.deletePlaylist = deletePlaylist;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
