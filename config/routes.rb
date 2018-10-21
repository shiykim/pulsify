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

     #adding songs to playlists
     delete '/playlist_songs/:playlist_id/:song_id', to: 'playlists#destroy_playlist_song'
     post '/playlist_songs', to: 'playlists#add_playlist_song'

     #follows and unfollows
     delete '/playlists/unfollow/:followable_id', to: 'playlists#unfollow'
     post '/playlists/follow/:followable_id', to: 'playlists#follow'

     delete '/albums/unfollow/:followable_id', to: 'albums#unfollow'
     post '/albums/follow/:followable_id', to: 'albums#follow'

     delete '/songs/unfollow/:followable_id', to: 'songs#unfollow'
     post '/songs/follow/:followable_id', to: 'songs#follow'

     delete '/artists/unfollow/:followable_id', to: 'artists#unfollow'
     post '/artists/follow/:followable_id', to: 'artists#follow'

     get '/dailymix/', to: 'songs#followed_songs'

   end
end
