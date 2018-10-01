class Follow < ApplicationRecord
  validates :followable_id, :followable_type, :user_id, presence: true

  belongs_to :followable, polymorphic: true
  belongs_to :user

end
