class Simulation < ApplicationRecord

  extend ActiveHash::Associations::ActiveRecordExtensions
  #belongs_to_active_hash :current_phone
  #belongs_to_active_hash :calling_plan
  belongs_to_active_hash :data_traffic
  belongs_to_active_hash :generation
  #belongs_to_active_hash :number
  belongs_to_active_hash :optical_line

end
