class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.belongs_to  :user
      t.belongs_to  :list,        null: false

      t.integer     :priority,    default: 1

      t.string      :name,        null: false
      t.text        :description

      t.boolean     :completed,   default: false
      t.timestamp   :completed_at

      t.timestamps null: false
    end
  end
end
