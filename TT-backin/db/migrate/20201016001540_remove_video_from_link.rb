class RemoveVideoFromLink < ActiveRecord::Migration[6.0]
  def change
    remove_column :links, :video, :string
    remove_column :links, :sound_cloud, :string
     add_column :links, :instrumental, :string 
     add_column :links, :notes, :string 
  end
end
