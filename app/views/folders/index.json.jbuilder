json.array!(@folders) do |folder|
  json.extract! folder, :id, :name, :description
  json.url folder_url(folder, format: :json)
end
