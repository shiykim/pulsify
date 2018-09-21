
if @playlist
  json.extract! @playlist, :id, :title, :author_id, :song_ids
end

if @username
  json.extract! @username, :username
end

if @playlist.songs.length > 0
  json.photoUrl url_for(@playlist.songs[0].album.photo)
end
