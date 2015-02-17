class ListSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :description,
              :owner,
              :tasks_count,
              :completed_at
end
