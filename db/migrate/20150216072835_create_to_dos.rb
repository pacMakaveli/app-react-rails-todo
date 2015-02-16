class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.integer :owner_id
      t.integer :folder_id
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
