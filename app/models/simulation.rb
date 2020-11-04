class Simulation < ApplicationRecord

  extend ActiveHash::Associations::ActiveRecordExtensions
  #belongs_to_active_hash :current_phone
  #belongs_to_active_hash :calling_plan
  belongs_to_active_hash :data_traffic
  belongs_to_active_hash :generation
  #belongs_to_active_hash :number
  belongs_to_active_hash :optical_line

  validates :duration_of_call, presence: true
  validates :generation_id, presence: true
  validates :data_traffic_id, presence: true
  validates :family_docomo, presence: true
  validates :family_au, presence: true
  validates :family_softbank, presence: true
  validates :optical_line_id, presence: true
end
