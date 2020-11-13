class AddInterviewedToParticipants < ActiveRecord::Migration[6.0]
  def change
    add_column :participants, :interviewed, :boolean, default: false
  end
end
