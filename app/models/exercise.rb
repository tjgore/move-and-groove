class Exercise < ApplicationRecord
  belongs_to :user
  belongs_to :activity

  validates_associated :activity
  validates :activity_id, :status, :duration, :date, :mood, presence: true
  validates :activity_id, numericality: { only_integer: true } 
  validates :status, :duration, length: { minimum: 3, maximum: 20 }
  validates :mood,  length: { minimum: 3, maximum: 20 }
  validates :note, allow_blank: true, length: { maximum: 255 }

end
