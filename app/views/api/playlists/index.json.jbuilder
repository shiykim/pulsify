@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :author_id, :song_ids
    if playlist.author
      json.username playlist.author.username
    end

    if playlist.songs.length > 0
      json.photoUrl url_for(playlist.songs[0].album.photo)
    end
  end
end
