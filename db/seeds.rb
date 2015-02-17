# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
List.destroy_all
Task.destroy_all

User.create(id: 1, email: 'vlad@smarteditors.co.uk', first_name: 'Vlad', last_name: 'Radulescu')
User.create(id: 2, email: 'kevin@smarteditors.co.uk', first_name: 'Kevin', last_name: 'Karmody')
User.create(id: 3, email: 'hannah@smarteditors.co.uk', first_name: 'Hannah', last_name: 'Lewis')

@user = User.find_by_email('vlad@smarteditors.co.uk')

List.create(
  id: 1,
  user_id: @user.id,
  name: 'Studio51 ToDo',
  description: 'Stuff needed to get this app up and running',
)

List.create(
  id: 2,
  user_id: @user.id,
  name: 'Studio51 Booqmark.it',
  description: 'Stuff needed to get this app up and running',
)

@todo = List.find_by_id(1)
@booqmarkit = List.find_by_id(2)

Task.create(
  user_id: @user.id,
  list_id: @todo.id,
  priority: 5,
  name: 'Working app',
  description: 'Get the app working with Rails and the React gem'
)

Task.create(
  user_id: @user.id,
  list_id: @booqmarkit.id,
  priority: 5,
  name: 'Finish prototype',
  description: 'Implement all required functionality for BETA testing'
)

Task.create(
  user_id: @user.id,
  list_id: @booqmarkit.id,
  priority: 5,
  name: 'Finish landing page',
  description: 'Finish landing page in order to start inviting people for BETA testing'
)
