json.extract! @song, :id, :title, :length, :song_url
json.album @song.album, :id, :title, :img_url
json.artist @song.artist, :id, :name
