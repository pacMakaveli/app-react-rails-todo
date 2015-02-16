json.array!(@lists) do |list|
  json.extract! list, :id, :user_id, :name, :description, :tasks_count, :completed, :completed_at
  json.url list_url(list, format: :json)
end
