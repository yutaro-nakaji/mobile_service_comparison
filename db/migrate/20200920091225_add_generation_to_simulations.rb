class AddGenerationToSimulations < ActiveRecord::Migration[6.0]
  def change
    add_column :simulations, :generation, :integer
  end
end
