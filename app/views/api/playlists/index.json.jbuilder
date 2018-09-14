@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :author_id, :song_ids
  end
end
