class AddParticipantReferenceToQuotes < ActiveRecord::Migration[6.0]
  def change
    add_reference :quotes, :participant, null: false, foreign_key: true
  end
end
