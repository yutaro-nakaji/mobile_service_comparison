class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         
  USERID_REGEX = /\A[a-z0-9]+\z/i.freeze
  validates :user_id, presence: true, uniqueness: true, format: { with: USERID_REGEX }
  validates :nickname, presence: true

  def email_required?
    false
  end

  def email_changed?
    false
  end
end
