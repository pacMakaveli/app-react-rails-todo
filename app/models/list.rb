class List < ActiveRecord::Base

  belongs_to :user

  has_many :tasks
  has_many :users, through: :tasks
end
