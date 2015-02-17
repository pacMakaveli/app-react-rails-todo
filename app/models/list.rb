class List < ActiveRecord::Base

  belongs_to :user

  has_many :tasks
  has_many :users, through: :tasks

  default_scope { includes(:user) }

  def owner
    [user.first_name, user.last_name].join(' ')
  end
end
