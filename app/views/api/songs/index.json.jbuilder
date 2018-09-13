@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :artist_id, :album_id, :song_url, :length
  end
end
