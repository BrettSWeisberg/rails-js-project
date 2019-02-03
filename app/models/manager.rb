class Manager < ActiveRecord::Base
  has_secure_password
  has_many :projects
  has_many :clients, through: :projects
  validates :name, presence: true
  validates :password, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, :with => /@/


  def self.find_or_create_by_omniauth(auth_hash)
    self.where(:email =>  auth_hash["info"]["email"]).first_or_create do |manager|
      manager.password = SecureRandom.hex
    end
  end
end
