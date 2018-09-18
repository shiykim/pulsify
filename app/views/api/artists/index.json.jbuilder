@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :img_url, :song_ids, :album_ids
    json.photoUrl url_for(artist.photo)
  end
end
