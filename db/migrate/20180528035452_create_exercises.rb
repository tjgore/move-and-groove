class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.belongs_to :activity, index: true
      t.belongs_to :user, index: true
      t.string :duration
      t.date :date
      t.string :mood
      t.text :note
      t.string :status

      t.timestamps
    end
  end
end
