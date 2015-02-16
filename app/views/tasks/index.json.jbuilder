json.array!(@tasks) do |task|
  json.extract! task, :id, :owner_id, :list_id, :name, :description, :priority, :finished_at
  json.url task_url(task, format: :json)
end
