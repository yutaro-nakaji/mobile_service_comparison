class AddUnitToSimulations < ActiveRecord::Migration[6.0]
  def change
    add_column :simulations, :unit, :integer
  end
end
