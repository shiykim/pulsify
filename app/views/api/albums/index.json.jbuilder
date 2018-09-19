@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :release_year, :title, :song_ids
    json.artist album.artist, :id, :name
    json.photoUrl url_for(album.photo)
  end
end
