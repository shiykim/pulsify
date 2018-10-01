# Pulsify README

[Pulsify](https://pulsify-app.herokuapp.com/) was inspired by Spotify, a music streaming service with over 180 million users. Similarly to Spotify, Pulsify features continuous playback, artist profiles, and playlist creation, all culminating in a seamless user experience.

![front page](app/assets/images/front_page.png)

## Technologies Used
* Pulsify was created with Rails on the backend using a PostgreSQL database and React/Redux on the frontend.
* Images and MP3s were stored using AWS S3, lightening the local storage load increasing scalability.
* The loading time of the app was also optimized through jBuilder and Rails' Active Storage which made for a more cohesive experience for the user.

## Key Features

### `Audio Player`
![frontpage](app/assets/images/demo.gif)

#### Continuous Play
Continuous play is an integral part of

#### Progress Bar

#### Queue

### `Playlist CRUD`

#### Playlist Creation/Update/Delete
![playlist create](app/assets/images/playlist_create.gif)
Signed in users are given the ability to create and customize playlists. Once created, the name of the playlist can be updated on the show page. Also on the show page, is the ability to delete a playlist as well as the play button which will play the first song on the playlist.

All playlists are displayed on the Home/Landing page of the website, which you can use to explore what your friends and other Pulsify users have been listening to.

#### Playlist Songs
![playlist add](app/assets/images/add_playlist.png)
What good is a playlist without any songs? Users have the ability to add a song to any of their playlists on almost any page. In order to facilitate the addition of songs, custom routes were added.

```
delete '/playlist_songs/:playlist_id/:song_id', to: 'playlists#destroy_playlist_song'
post '/playlist_songs', to: 'playlists#add_playlist_song'
```

### `Search`
