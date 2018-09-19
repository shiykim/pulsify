@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :author_id, :song_ids
    if playlist.author
      json.username playlist.author.username
    end 
    if playlist.playlist_songs.length > 0
      json.photoUrl url_for(@songs[playlist.song_ids[0]].album.photo)
    end
  end
end
