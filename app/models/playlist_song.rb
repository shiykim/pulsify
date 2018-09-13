class PlaylistSong < ApplicationRecord
  validates :playlist_id, :song_id, presence: true

  belongs_to :playlists,
    class_name: 'Playlist',
    foreign_key: :playlist_id,
    primary_key: :id

  belongs_to :songs,
    class_name: 'Song',
    foreign_key: :song_id,
    primary_key: :id

end
