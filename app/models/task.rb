class Task < ActiveRecord::Base

  belongs_to :to_do

  has_many :users
end
