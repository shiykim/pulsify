class Playlist < ApplicationRecord

  validates :title, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  has_many :playlist_songs,
    class_name: 'PlaylistSong',
    foreign_key: :playlist_id,
    primary_key: :id

  has_many :songs,
    through: :playlist_songs

  has_many :follows,
    as: :followable,
    dependent: :destroy

  has_many :followers,
    through: :follows,
    source: :user

end
