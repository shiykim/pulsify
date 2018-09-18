if @playlist
  json.extract! @playlist, :id, :title, :author_id, :song_ids
end

if @username
  json.extract! @username, :username
end

if @playlist.playlist_songs.length > 0
  json.photoUrl url_for(@songs[@playlist.song_ids[0]].album.photo)
end
