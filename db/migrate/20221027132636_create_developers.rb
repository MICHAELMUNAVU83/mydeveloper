class CreateDevelopers < ActiveRecord::Migration[7.0]
  def change
    create_table :developers do |t|
      t.string :name
      t.string :email
      t.string :stack

      t.timestamps
    end
  end
end
