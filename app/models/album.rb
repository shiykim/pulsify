class Album < ApplicationRecord
  validates :artist_id, :release_year, :title, :img_url, presence: true

  after_initialize :ensure_img_url

  has_many :songs,
    class_name: 'Song',
    foreign_key: :album_id,
    primary_key: :id

  belongs_to :artist,
    class_name: 'Artist',
    foreign_key: :artist_id,
    primary_key: :id

  def ensure_img_url
    self.img_url = 'insert_default_album_cover'
  end

end
