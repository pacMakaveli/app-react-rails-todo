class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :owner_id
      t.integer :list_id
      t.string :name
      t.text :description
      t.integer :priority
      t.timestamp :finished_at

      t.timestamps
    end
  end
end
