if @playlist
  json.extract! @playlist, :id, :title, :author_id, :song_ids
end

if @username
  json.extract! @username, :username
end

if @playlist_song
  json.extract! @playlist_song, :id, :playlist_id, :song_id, :songs
end
