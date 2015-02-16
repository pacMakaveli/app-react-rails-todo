class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.belongs_to :user,        null: false

      t.string     :name,        null: false
      t.text       :description
      t.integer    :tasks_count, default: 0

      t.boolean    :completed,   default: false
      t.timestamp  :completed_at

      t.timestamps null: false
    end
  end
end
