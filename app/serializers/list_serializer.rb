class ListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :description, :tasks_count, :completed, :completed_at
end
