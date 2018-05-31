class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :title
      t.string :image
      t.text :description
      t.string :duration
      t.integer :difficulty

      t.timestamps
    end
  end
end
