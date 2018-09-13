class Playlist < ApplicationRecord
  validates :author_id, :title, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id
end
