json.array!(@tasks) do |task|
  json.extract! task, :id, :user_id, :list_id, :priority, :name, :description, :completed, :completed_at
  json.url task_url(task, format: :json)
end
