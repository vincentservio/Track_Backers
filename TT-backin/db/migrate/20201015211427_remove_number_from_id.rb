class RemoveNumberFromId < ActiveRecord::Migration[6.0]
  def change
    remove_column :links, :track_id, :string
    add_column :links, :track_id, :integer 
  end
end
