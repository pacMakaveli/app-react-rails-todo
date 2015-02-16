json.array!(@to_dos) do |to_do|
  json.extract! to_do, :id, :owner_id, :folder_id, :name, :description
  json.url to_do_url(to_do, format: :json)
end
