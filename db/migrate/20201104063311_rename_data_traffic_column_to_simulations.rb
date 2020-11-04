class RenameDataTrafficColumnToSimulations < ActiveRecord::Migration[6.0]
  def change
    rename_column :simulations, :data_traffic, :data_traffic_id
    rename_column :simulations, :optical_line, :optical_line_id
  end
end
