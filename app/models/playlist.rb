class Playlist < ApplicationRecord
  validates :author_id, :title, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  has_many :playlist_songs,
    class_name: 'PlaylistSong',
    foreign_key: :playlist_id,
    primary_key: :id

  has_many :songs, through: :playlist_songs

end
