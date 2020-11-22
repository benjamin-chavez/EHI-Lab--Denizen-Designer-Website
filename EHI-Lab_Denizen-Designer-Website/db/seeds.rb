# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USER SEEDS
puts 'Creating User Seeds...'

User.create!({
  email: 'depaulehilab@gmail.com',
  password: '123456',
  admin: true
})
User.create!({
  email: 'ben.m.chavez@gmail.com',
  password: '123456',
  admin: true
})


# PARTICIPANT SEEDS
puts 'Creating Participant Seeds...'

# Participant.create!({
#   first_name: "",
#   last_name: "",
#   designer_type: "",
#   bio: "",
#   interviewed: ,
#   email: ""
# })
Participant.create!({
  first_name: "Andrea",
  last_name: "Ngan",
  designer_type: "",
  bio: "",
  interviewed: true,
  email: "andrea@creativeresco.org"
})
Participant.create!({
  first_name: "Anjanette",
  last_name: "Davenport Hatter",
  designer_type: "",
  bio: "",
  interviewed: true,
  email: ""
})
Participant.create!({
    first_name: "Brooke",
    last_name: "Staton",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "brooke@reflexdc.com"
})
Participant.create!({
    first_name: "Bryan",
    last_name: "Lee Jr",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "bryan@colloqate.org"
})
Participant.create!({
    first_name: "Cedric",
    last_name: "Douglas",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "cedricdouglasdesign@gmail.com"
})
Participant.create!({
    first_name: "Chris",
    last_name: "Rudd",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "crudd2@id.iit.edu"
})
Participant.create!({
    first_name: "Claudia",
    last_name: "Paraschiv",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "claudia@studiofuldesign.com"
})
Participant.create!({
    first_name: "Denise Shante",
    last_name: "Brown",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "design@deniseshantebrown.com"
})
Participant.create!({
    first_name: "Elle",
    last_name: "Ramel",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "elleramel@gmail.com"
})
Participant.create!({
    first_name: "Forest",
    last_name: "Gregg",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "fgregg@datamade.us"
})
Participant.create!({
    first_name: "Jenny",
    last_name: "Lin",
    designer_type: "UX",
    bio: "",
    interviewed: true,
    email: "jwj.lin@gmail.com"
})
Participant.create!({
    first_name: "Julia",
    last_name: "Kong",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "julia.kong@reflexdc.com"
})
Participant.create!({
    first_name: "Katanya",
    last_name: "Raby",
    designer_type: "Urban Planner",
    bio: "",
    interviewed: true,
    email: "urbandreamsofmine@gmail.com"
})
Participant.create!({
    first_name: "Katherine",
    last_name: "Darnstadt",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "katherine@latentdesign.net"
})
Participant.create!({
    first_name: "Keesha",
    last_name: "Gaskins",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "keesha.gaskins@gmail.com"
})
Participant.create!({
    first_name: "Kenneth",
    last_name: "Bailey",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "kdb@ds4si.org"
})
Participant.create!({
    first_name: "Lorin",
    last_name: "Jackson",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "extrartinaire@gmail.com"
})
Participant.create!({
    first_name: "N'Deye",
    last_name: "Diakhate",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "ndiakhate93@gmail.com"
})
Participant.create!({
    first_name: "Nour",
    last_name: "Afat",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "narafat@umich.edu"
})
Participant.create!({
    first_name: "Olivia",
    last_name: "Nava",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "olivia.nava@gobeegroup.com"
})
Participant.create!({
    first_name: "Sabiha",
    last_name: "Basrai",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "sabiha@designaction.org "
})
Participant.create!({
    first_name: "Shanelle",
    last_name: "Matthews",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "helloshanelle@gmail.com"
})
Participant.create!({
    first_name: "Sloan",
    last_name: "Leo",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "therealsloanleo@gmail.com"
})
Participant.create!({
    first_name: "Stephanie",
    last_name: "Burrell",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "me@stephanieariburrell.com"
})
Participant.create!({
    first_name: "Taylor",
    last_name: "Holloway",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: ""
})
Participant.create!({
    first_name: "Taylor",
    last_name: "Holloway",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: ""
})
Participant.create!({
    first_name: "Tonika",
    last_name: "Johnson",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: "tonika.johnson@gmail.com"
})
Participant.create!({
    first_name: "Victoria",
    last_name: "Barnnett",
    designer_type: "Graphic",
    bio: "",
    interviewed: true,
    email: "veegs42@gmail.com"
})
Participant.create!({
    first_name: "Fo",
    last_name: "Wilson",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: ""
})
Participant.create!({
    first_name: "Michelle",
    last_name: "Washington",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: ""
})
Participant.create!({
    first_name: "Gabe",
    last_name: "Moreno",
    designer_type: "",
    bio: "",
    interviewed: true,
    email: ""
})
