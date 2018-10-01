class User < ApplicationRecord
  validates :email, :img_url, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token, :ensure_img_url
  has_one_attached :photo

  attr_reader :password

  has_many :playlists,
    class_name: 'Playlist',
    foreign_key: :author_id,
    primary_key: :id

  has_many :follows,
    class_name: 'Follow',
    foreign_key: :user_id,
    primary_key: :id

  has_many :followed_playlists,
    through: :follows,
    source: :followable,
    source_type: 'Playlist'

  has_many :followed_artists,
    through: :follows,
    source: :followable,
    source_type: 'Artist'

  has_many :followed_albums,
    through: :follows,
    source: :followable,
    source_type: 'Album'

  has_many :followed_songs,
    through: :follows,
    source: :followable,
    source_type: 'Song'


  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password= (password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    return self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_img_url
    self.img_url = 'blankfornow'
  end
end
