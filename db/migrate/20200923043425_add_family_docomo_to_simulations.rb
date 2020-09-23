class AddFamilyDocomoToSimulations < ActiveRecord::Migration[6.0]
  def change
    add_column :simulations, :family_docomo, :integer
    add_column :simulations, :family_softbank, :integer
    remove_column :simulations, :family_mobile, :integer
    rename_column :simulations, :unit, :family_au
  end
end
