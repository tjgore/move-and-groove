class Activity < ApplicationRecord
  has_many :exercises
  has_many :users, through: :exercises
end
