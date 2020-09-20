class Simulation < ApplicationRecord

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :current_phone
  belongs_to_active_hash :calling_plan
  belongs_to_active_hash :data_traffic

end
