class LinkSerializer < ActiveModel::Serializer
   attributes :id, :instrumental, :notes, :track_id
  belongs_to :track
end
