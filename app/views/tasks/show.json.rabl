object @task

attributes :id, :created_at, :updated_at, :title, :complete, :user_id

child :attachments do
	attributes :id, :created_at, :updated_at, :upload_file_name, :upload_url
end