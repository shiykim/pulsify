# json.extract! @album, :id, :artist_id, :release_year, :title, :song_ids, :photo

json.extract! @album, :id, :title, :release_year
json.artist @album.artist, :id, :name
json.photoUrl url_for(album.photo)

json.songs @album.songs.each do |song|
  json.extract! song, :id, :title, :length
end
