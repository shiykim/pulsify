json.extract! @song, :id, :title, :length, :song_url
json.album @song.album, :id, :title
json.artist @song.artist, :id, :name
json.photoUrl url_for(@song.album.photo)
json.mp3 url_for(@song.photo)
