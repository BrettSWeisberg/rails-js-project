class ManagerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :projects
  has_many :clients #, through: :projects through not needed
end
