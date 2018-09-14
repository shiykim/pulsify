@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :img_url, :playlists
  end
end
