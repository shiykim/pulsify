class Artist < ApplicationRecord

  validates :name, :img_url, presence: true

  after_initialize :ensure_img_url

  has_one_attached :photo

  has_many :albums,
    class_name: 'Album',
    foreign_key: :artist_id,
    primary_key: :id

  has_many :songs,
    class_name: 'Song',
    foreign_key: :artist_id,
    primary_key: :id

  has_many :follows,
    as: :followable,
    dependent: :destroy

  has_many :followers,
    through: :follows,
    source: :user

  def ensure_img_url
    self.img_url = 'insertdefaultartistpicture'
  end

end
