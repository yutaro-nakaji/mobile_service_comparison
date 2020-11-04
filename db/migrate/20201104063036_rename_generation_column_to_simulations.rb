class RenameGenerationColumnToSimulations < ActiveRecord::Migration[6.0]
  def change
    rename_column :simulations, :generation, :generation_id
  end
end
