class CreateSimulations < ActiveRecord::Migration[6.0]
  def change
    create_table :simulations do |t|
      t.integer :duration_of_call
      t.integer :data_traffic
      t.integer :family_mobile
      t.integer :optical_line
      t.integer :service
      t.integer :ecsite
      t.integer :creditcard
      t.integer :electronic_money
      t.integer :qr_payment
      t.integer :bank
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
