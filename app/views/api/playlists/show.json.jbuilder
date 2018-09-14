json.extract! @playlist, :id, :title, :author_id, :song_ids

if @username
  json.extract! @username, :username
end
