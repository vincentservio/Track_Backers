class TrackSerializer < ActiveModel::Serializer
   attributes :id, :title, :status
  has_many :links

end
