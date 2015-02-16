class TaskSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :list_id, :priority, :name, :description, :completed, :completed_at
end
