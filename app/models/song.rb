class Song < ApplicationRecord

  validates :title, :song_url, presence: true

  after_initialize :ensure_song_url

  has_one_attached :photo

  belongs_to :artist,
    class_name: 'Artist',
    foreign_key: :artist_id,
    primary_key: :id

  belongs_to :album,
    class_name: 'Album',
    foreign_key: :album_id,
    primary_key: :id

  has_many :playlist_songs,
    class_name: 'PlaylistSong',
    foreign_key: :song_id,
    primary_key: :id

  has_many :playlists, through: :playlist_songs

  has_many :follows,
    as: :followable,
    dependent: :destroy

  has_many :followers,
    through: :follows,
    source: :user

  def ensure_song_url
    self.song_url = 'placeholder.mp3'
  end

end
