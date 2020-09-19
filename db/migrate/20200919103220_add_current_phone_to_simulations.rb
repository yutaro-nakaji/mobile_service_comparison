class AddCurrentPhoneToSimulations < ActiveRecord::Migration[6.0]
  def change
    add_column :simulations, :current_phone, :integer
  end
end
