json.extract! @artist, :id, :name
json.photoUrl url_for(@artist.photo)

if @artist.albums
  json.albums @artist.albums.each do |album|
    json.extract! album, :id, :title
    json.photoUrl url_for(album.photo)
  end
end

if @artist.songs

  json.songs @artist.songs.each do |song|
      json.extract! song, :id, :title
  end
end
