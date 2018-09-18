json.extract! @artist, :id, :name

if @artist.albums
  json.albums @artist.albums.each do |album|
    json.extract! album, :id, :title
  end
end

if @artist.songs

  json.songs @artist.songs.each do |song|
      json.extract! song, :id, :title
  end
end
