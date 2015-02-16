class AddCounterCacheToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :to_dos_count, :integer, default: 0
  end
end
