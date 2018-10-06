@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :img_url, :playlists
    json.followedPlaylist user.followed_playlist_ids
    json.followedArtist user.followed_artist_ids
    json.followedSong user.followed_song_ids
    json.followedAlbum user.followed_album_ids
  end
end
