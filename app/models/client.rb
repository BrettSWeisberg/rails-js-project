class Client < ActiveRecord::Base
  has_many :projects
  belongs_to :manager
  validates :name, presence: true, uniqueness: true
  accepts_nested_attributes_for :projects

  #scope

#  def projects_attributes=(attributes)
#    binding.pry
#  end
  def completed_projects
    self.projects.completed.inspect
      binding.pry
  end
end
