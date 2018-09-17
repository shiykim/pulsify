Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root to: 'static_pages#root'

   namespace :api, defaults: { format: :json } do
     resources :users, only: [:create, :index]
     resource :session, only: [:create, :destroy]
     resources :playlists
     resources :songs, only: [:index, :show]
     resources :albums, only: [:index, :show]
     resources :artists, only: [:index, :show]

     delete '/playlist_songs/:playlist_id/:song_id', to: 'playlists#destroy_playlist_song'
     post '/playlist_songs', to: 'playlists#add_playlist_song'
   end
end
