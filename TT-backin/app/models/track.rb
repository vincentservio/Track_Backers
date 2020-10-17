class Track < ApplicationRecord
    has_many :links
    accepts_nested_attributes_for :links, reject_if: :all_blank

end
