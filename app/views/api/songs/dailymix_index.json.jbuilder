songs = [];

@songs.each do |song|
  if @artists.include?(song.artist_id)
    songs << song
  end
end

randSongs = songs.shuffle.take(10)

randSongs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :length
    json.album song.album, :id, :title
    json.artist song.artist, :id, :name
  end
end
