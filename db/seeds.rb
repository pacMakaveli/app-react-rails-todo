# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Folder.destroy_all

Folder.create(
  name: "Smartie",
  description: "Smartie Project ToDo's"
)

Folder.create(
  name: "Booqmark.it",
  description: "Booqmark.it Project ToDo's"
)
