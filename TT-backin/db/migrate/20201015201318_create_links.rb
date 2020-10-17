class CreateLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :links do |t|
      t.string :video
      t.string :sound_cloud
      t.string :track_id
      t.timestamps
    end
  end
end
