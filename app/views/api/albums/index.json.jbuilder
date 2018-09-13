@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :artist_id, :release_year, :title, :song_ids, :img_url
  end
end
