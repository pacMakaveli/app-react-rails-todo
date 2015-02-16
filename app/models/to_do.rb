class ToDo < ActiveRecord::Base

  belongs_to :folder

  has_many :tasks
  has_many :users, through: :tasks
end
